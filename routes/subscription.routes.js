import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import {
  createSubscription,
  getUsersSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ status: 200, message: "Get all Subscriptions" })
);
subscriptionRouter.get("/:id", (req, res) =>
  res.send({ status: 200, message: "Get Subscription details" })
);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
  res.send({ status: 200, message: "Update a Subscription" })
);
subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ status: 200, message: "Delete a Subscription" })
);

subscriptionRouter.get("/user/:id", authorize, getUsersSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ status: 200, message: "Cancel Subscription" })
);
subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ status: 200, message: "Get Upcoming renewals" })
);

export default subscriptionRouter;
