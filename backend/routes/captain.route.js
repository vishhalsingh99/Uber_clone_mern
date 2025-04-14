const express = require('express');
const router = express.Router();
const {body } = require("express-validator");
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 2}).withMessage("Firstname Must be of 2 characters"),
    body('password').isLength({min: 6}).withMessage("Password must have at least 6 characters"),
    body('vehicle.color').isLength({min: 3}).withMessage("Vehicle Color must be of 3 characters"),
    body('vehicle.plate').isLength({min: 5}).withMessage("Number Plate of Vehicle must have 5 characters."),
    body('vehicle.capacity').isInt({min: 1}).withMessage("Capacity must be at least 1"),
    body('vehicle.vehicleType').isIn([ 'car', 'bike', 'auto', 'bus']).withMessage("Invalid vehicle type.")
],
captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min : 6}).withMessage("Password must have at least 6 characters")
],
captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;