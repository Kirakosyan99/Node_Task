const express = require("express");
const router = express.Router();
const { userLogin, registerUser, viewAccount, updateAccount, logoutUser, verifyRefreshToken, isAdmin } = require('../controller/auth.controller');
const { userValidation } = require('../validation/userValidation');
const { updateUserValidation } = require('../validation/updateUserValidation');
const { verifyToken } = require('../middlewares/authMiddleware');
const { SuccessHandlerUtil } = require('../utils/success-handler.util');

/* User registration */
router.post('/register', userValidation, registerUser);
router.get('/account', viewAccount);

router.post('/login', userLogin);
router.put('/update/:userId ', [verifyToken, updateUserValidation], updateAccount);
router.post('/logout', verifyToken, logoutUser);
router.get('/protected-route', verifyToken, (req, res) => {
  try {
   return res.status(200).send( { message: "This is a Protected Route" });
  } catch (error) {
    return res.status(409).send( { message: `You don't have Access` });
  }
})

router.post('/token/refresh', verifyRefreshToken)

router.get('/admin/dashboard', [verifyToken, isAdmin], (req, res) => {
 return res.status(200).send( { message: "Welcome to the Admin Panel" });
});

module.exports = router;