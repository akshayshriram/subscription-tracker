import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get("/", (req,res) => res.send({status: 200, message:"Get all Subscriptions"}))
subscriptionRouter.get("/:id", (req,res) => res.send({status: 200, message:"Get Subscription details"}))
subscriptionRouter.post("/", (req,res) => res.send({status: 201, message:"Create a Subscription"}))
subscriptionRouter.put("/:id", (req,res) => res.send({status: 200, message:"Update a Subscription"}))
subscriptionRouter.delete("/:id", (req,res) => res.send({ message:"Delete a Subscription"}))

subscriptionRouter.get("/user/:id", (req,res) => res.send({status: 200, message:"Get Subscription details"}))
subscriptionRouter.put("/:id/cancel", (req,res) => res.send({status: 200, message:"Cancel Subscription"}))
subscriptionRouter.get("/upcoming-renewals", (req,res) => res.send({status: 200, message:"Get Upcoming renewals"}))

export default subscriptionRouter