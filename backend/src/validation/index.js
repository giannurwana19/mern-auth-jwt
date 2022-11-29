const { body } = require('express-validator');

module.exports.loginValidation = [
  body('username').notEmpty().withMessage('username tidak boleh kosong'),

  body('password')
    .notEmpty()
    .withMessage('password tidak boleh kosong')
    .isLength({ min: 6 })
    .withMessage('minimal password 6 karakter')
    .isLength({ max: 20 })
    .withMessage('maksimal password 20 karakter'),
];

module.exports.registerValidation = [
  body('name').notEmpty().withMessage('name tidak boleh kosong'),

  body('username').notEmpty().withMessage('username tidak boleh kosong'),

  body('email')
    .notEmpty()
    .withMessage('email tidak boleh kosong')
    .isEmail()
    .withMessage('Email tidak valid'),

  body('password')
    .notEmpty()
    .withMessage('password tidak boleh kosong')
    .isLength({ min: 6 })
    .withMessage('minimal password 6 karakter')
    .isLength({ max: 20 })
    .withMessage('maksimal password 20 karakter'),
];
