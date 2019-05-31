import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controller/userController";

export const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
