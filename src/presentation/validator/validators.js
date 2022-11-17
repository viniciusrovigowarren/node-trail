import { body } from 'express-validator'
import isValidCep from '@brazilian-utils/is-valid-cep';

function format(num) {
   return num.replace(/\D/g, "")
}

const customerValidators = [
               body('full_name')//
               .trim()
               .escape()
               .isString(),

               body('email')
               .isString()
               .isLength({ min: 10 }),

               body('cpf')
               .isLength({ max: 14})
               .customSanitizer(format)
               .matches(`\\d{11}$`),
               
               body('cellphone')
               .isLength({ max: 15 })
               .customSanitizer(format)
               .matches(`\\d{${11}}$`),

               body('whatsapp')
               .isBoolean(),

               body('email_sms')
               .isBoolean(),

               body('birthdate')
               .notEmpty()
               .trim()
               .toDate(),

               body('country')
               .isAlpha()
               .notEmpty(),

               body('city')
               .isAlpha()
               .notEmpty(),

               body('postal_code')
               .isLength({ max: 9 })
               .customSanitizer(format)
               .matches(`\\d{8}$`)
               .custom(async value => {isValidCep(value)}),

               body('address')
               .exists({ checkFalsy: true })
               .notEmpty()
               .isString(),

               body('number')
               .notEmpty()
               .isNumeric(),
            ]

export default customerValidators