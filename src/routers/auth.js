import express from "express";
import { Router } from "express";

import { validateBody } from "../middlewares/validateBody.js";
import {
<<<<<<< HEAD
    loginUserController,
    logoutUserController,
    refreshUserSessionController,
    registerUserController,
    requestResetEmailController,
    resetPasswordController,
} from "../controllers/auth.js";
import {
    loginUserSchema,
    registerUserSchema,
    requestResetEmailSchema,
    resetPasswordSchema,
} from "../db/validation/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

=======
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validation/auth.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
  resetPasswordController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
>>>>>>> ddf6431b7b7a483629994dc8cf7118277320fb43

const router = Router();
const jsonParser = express.json();

router.post(
    "/register",
    jsonParser,
    validateBody(registerUserSchema),
    ctrlWrapper(registerUserController));
router.post(
    "/login",
    jsonParser,
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController));

router.post("/logout",
    ctrlWrapper(logoutUserController));

router.post("/refresh",
    ctrlWrapper(refreshUserSessionController));

router.post("/send-reset-email",
    jsonParser,
    validateBody(requestResetEmailSchema),
    ctrlWrapper(requestResetEmailController));

router.post("/reset-pwd",
    jsonParser,
    validateBody(resetPasswordSchema),
    ctrlWrapper(resetPasswordController)
);

<<<<<<< HEAD
=======
router.post('/refresh', ctrlWrapper(refreshUserSessionController));

router.post('/logout', ctrlWrapper(logoutUserController));

router.post(
  '/send-reset-email',
  validateBody(requestResetEmailSchema),
  ctrlWrapper(requestResetEmailController),
);
>>>>>>> ddf6431b7b7a483629994dc8cf7118277320fb43
export default router;
