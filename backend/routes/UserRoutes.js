const express = require("express");
const router = express.Router();
const { imageUpload } = require("../middlewares/imageUpload");

// Controller
const {
    register, 
    login, 
    getCurrentUser,
    update,
    getUserById,
} = require("../controllers/UserController");

// Middlewares 
const validate = require("../middlewares/handleValidation");
const {
    userCreateValidation,
    loginValidation,
    userUpdateValidation,
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);
router.get("/:id", getUserById);

module.exports = router;