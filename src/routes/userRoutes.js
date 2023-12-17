import { Router } from "express";
import { registerUser } from "../contollers/userController.js";
// import { loginUser, logoutUser, registerUser, refreshAccessToken } from "../controllers/user.controller.js";
// import {upload} from "../middlewares/multer.middleware.js"
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;
