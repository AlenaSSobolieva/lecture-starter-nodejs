import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const bodyFields = Object.keys(req.body);

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "password",
  ];

  if (bodyFields.includes("id")) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }
  if (!requiredFields.every((field) => bodyFields.includes(field))) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }

  if (bodyFields.some((field) => !Object.keys(USER).includes(field))) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }
  if (req.body.password.length < 3) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }
  if (!req.body.email.endsWith("@gmail.com")) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }
  if (!/^\+380\d{9}$/.test(req.body.phone)) {
    res.err = Error("User entity to create isn't valid");
    return next();
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const bodyFields = Object.keys(req.body);
  if (bodyFields.includes("id")) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }
  if (bodyFields.length === 0) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }
  if (bodyFields.some((field) => !Object.keys(USER).includes(field))) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }
  if (req.body.password && req.body.password.length < 3) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }
  if (req.body.email && !req.body.email.endsWith("@gmail.com")) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }
  if (req.body.phone && !/^\+380\d{9}$/.test(req.body.phone)) {
    res.err = Error("User entity to update isn't valid");
    return next();
  }

  next();
};

export { createUserValid, updateUserValid };
