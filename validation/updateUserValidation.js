const { body } = require('express-validator');

const updateUserValidation = [
    body('name').not().isEmpty().withMessage(`Name's required`)
        .isLength({ min: 2 }).withMessage('Name must be at least 2 characters long')
        .isAlpha('en-US', { ignore: ' -' }).withMessage('Name must contain only letters, spaces, or dashes'),

    body('surname').not().isEmpty().withMessage('The Surname is required')
        .isLength({ min: 2 }).withMessage('The Surname must be at least 2 characters long')
        .isAlpha('en-US', { ignore: ' -' }).withMessage('Surname must contain only letters, spaces, or dashes'),
    body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('username').isLength({ min: 5 }).withMessage('The Username cannot be empty'),
    body('password').isLength({ min: 5 }).withMessage('The Password must be at least 5 characters long'),
];

module.exports = { updateUserValidation }