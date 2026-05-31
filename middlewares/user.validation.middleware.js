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
    throw Error("User entity to create isn't valid");
  }
  
  if (!requiredFields.every(field => bodyFields.includes(field))) {
    throw Error("User entity to create isn't valid");
  }
  if (bodyFields.some((field) => !Object.keys(USER).includes(field))) {
    throw Error("User entity to create isn't valid");
  }
  if (req.body.password.length < 3) {
    throw Error("User entity to create isn't valid");
  }
  if (!req.body.email.endsWith("@gmail.com")) {
    throw Error("User entity to create isn't valid");
  }
  if (!/^\+380\d{9}$/.test(req.body.phone)) {
    throw Error("User entity to create isn't valid");
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const bodyFields = Object.keys(req.body);
  if (bodyFields.includes("id")) {
    throw Error("User entity to update isn't valid");
  }
   if (bodyFields.length === 0) {
     throw Error("User entity to update isn't valid");
  }
  if (bodyFields.some((field) => !Object.keys(USER).includes(field))) {
    throw Error("User entity to update isn't valid");
  }
  if (req.body.password && req.body.password.length < 3) {
    throw Error("User entity to update isn't valid");
  }
  if (req.body.email && !req.body.email.endsWith("@gmail.com")) {
    throw Error("User entity to update isn't valid");
  }
  if (req.body.phone && !/^\+380\d{9}$/.test(req.body.phone)) {
    throw Error("User entity to update isn't valid");
  }

  next();
};

export { createUserValid, updateUserValid };
