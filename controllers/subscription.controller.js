import { SERVER_URL } from "../config/env.js";
import { workflowClient } from "../config/upstash.js";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });

    const workflowRunId = await workflowClient.trigger({
      url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: { subscriptionId: subscription._id, subscriptionName: subscription.name },
      headers: { "content-type": "application/json" },
      retries: 0,
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: { subscription, workflowRunId },
    });
  } catch (error) {
    next(error);
  }
};

export const getUsersSubscriptions = async (req, res, next) => {
  try {
    const { id: subscriptionId } = req.params;
    const { id: userId } = req.user;
    if (userId.toString() !== subscriptionId.toString()) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access to subscriptions",
      });
    }
    const subscriptions = await Subscription.find({ user: userId });

    res.status(200).json({
      success: true,
      message: "User's subscriptions fetched successfully",
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};
