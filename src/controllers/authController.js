import * as authService from "../services/authService.js";

export const login = (req, res) => {
  const login = authService.login();
  return res.send("Login successful");
};

export const register = (req, res) => {
  const register = authService.register();
  return res.send("Register successful");
};
