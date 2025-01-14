import {Router} from "express";
import { registerUser, loginUser, logoutUser, myProfile, userProfile, editProfile, addSocial } from "../controllers/user.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const user_router = Router()

user_router.route("/register").post(registerUser)
user_router.route("/login").post(loginUser)
user_router.route("/logout").get(verifyJWT, logoutUser)
user_router.route("/myProfile").get(verifyJWT, myProfile)
user_router.route("/editProfile").get(verifyJWT, editProfile)
user_router.route("/addSocial").post(verifyJWT, addSocial)
user_router.route("/userProfile").post( userProfile)

export default user_router;