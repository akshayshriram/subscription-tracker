import { Router } from "express";

const authRouter = Router()

authRouter.post('sign-in', (req,res) => res.send({status:200, message : "Sign In"}))
authRouter.post('sign-up', (req,res) => res.send({status:200, message : "Sign Up"}))
authRouter.post('sign-out', (req,res) => res.send({status:200, message : "Sign Out"}))

export default authRouter