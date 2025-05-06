import express from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { BadRequestError } from "../errors/bad-request-error";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  if (!req.session?.jwt) {
    res.send({ currentUser: null })
  }

  try {
    const payload = jwt.verify(req.session!.jwt, process.env.JWT_KEY!);
    res.send({ currentUser: payload })
  } catch (err) {
    res.send({ currentUser: null })
  }
});

export { router as currentUserRouter };