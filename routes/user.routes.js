import { Router } from "express";
import { getUsers, getUserById } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUserById);
userRouter.post("/", (req, res) =>
  res.send({ status: 201, message: "Create new user" })
);
userRouter.put("/:id", (req, res) =>
  res.send({ status: 200, message: "Update the user" })
);
userRouter.delete("/:id", (req, res) => res.send({ message: "Deleted users" }));

export default userRouter;
