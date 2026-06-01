import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const bodyFields = Object.keys(req.body);
  const requiredFields = ["name", "power", "defense"];

  if (bodyFields.includes("id")) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }
  if (!requiredFields.every((field) => bodyFields.includes(field))) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }

  if (bodyFields.some((field) => !Object.keys(FIGHTER).includes(field))) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }

  if (req.body.power < 1 || req.body.power > 100) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }

  if (req.body.defense < 1 || req.body.defense > 10) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }

  if (
    req.body.health !== undefined &&
    (req.body.health < 80 || req.body.health > 120)
  ) {
    res.err = Error("Fighter entity to create isn't valid");
    return next();
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const bodyFields = Object.keys(req.body);

  if (bodyFields.includes("id")) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }

  if (bodyFields.length === 0) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }

  if (bodyFields.some((field) => !Object.keys(FIGHTER).includes(field))) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }

  if (
    req.body.power !== undefined &&
    (req.body.power < 1 || req.body.power > 100)
  ) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }

  if (
    req.body.defense !== undefined &&
    (req.body.defense < 1 || req.body.defense > 10)
  ) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }

  if (
    req.body.health !== undefined &&
    (req.body.health < 80 || req.body.health > 120)
  ) {
    res.err = Error("Fighter entity to update isn't valid");
    return next();
  }
  next();
};

export { createFighterValid, updateFighterValid };
