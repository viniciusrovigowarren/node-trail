import { validationResult } from 'express-validator'
import Customers from '../../domain/user/mocks/user_model.js'

class CustomerController {
    
    handle(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        
        const {full_name, email, email_confirmation, cpf, 
                cellphone, birthdate, email_sms, whatsapp, 
                country, city, postal_code, address, number} = req.body

        const newCustomer = [full_name, email, email_confirmation, cpf, 
                cellphone, birthdate, email_sms, whatsapp, 
                country, city, postal_code, address, number]
                
            Customers.push(newCustomer);
            console.log(Customers)

        res.status(200).end( "success");
    }
}

export default new CustomerController().handle;