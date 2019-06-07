import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  changePassword
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

export const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
