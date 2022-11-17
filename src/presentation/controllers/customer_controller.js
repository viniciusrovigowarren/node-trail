import { validationResult } from 'express-validator'
import Customer from '../../domain/user/mocks/user_model.js'

const customers = [];

class CustomerController {
    
    handle(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        var newCustomer = new Customer(req.body);
        customers.push(newCustomer);
        res.status(200).json({ status: "success", customer_created: newCustomer });
    }
}

export default new CustomerController().handle;