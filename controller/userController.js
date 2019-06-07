import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("Join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("Join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User.create({
        name,
        email
      });
      console.log(1);
      await User.register(user, password);
      console.log(2);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("Login", { pageTitle: "Login" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const logout = (req, res) => {
  // To Do: Process log out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("Users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("UserDetail", { pageTitle: "UserDetail" });
export const editProfile = (req, res) =>
  res.render("EditProfile", { pageTitle: "EditProfile" });
export const changePassword = (req, res) =>
  res.render("ChangePassword", { pageTitle: "ChangePassword" });
