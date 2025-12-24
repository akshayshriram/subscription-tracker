import { Router } from "express";

const userRouter = Router()

userRouter.get("/", (req,res) => res.send({status: 200, message:"Get all users"}))
userRouter.get("/:id", (req,res) => res.send({status: 200, message:"Get user details"}))
userRouter.post("/", (req,res) => res.send({status: 201, message:"Create new user"}))
userRouter.put("/:id", (req,res) => res.send({status: 200, message:"Update the user"}))
userRouter.delete("/:id", (req,res) => res.send({message:"Deleted users"}))

export default userRouter