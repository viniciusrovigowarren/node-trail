import { Router }  from 'express'
import handle from './controllers/customer_controller.js'
import customerValidators from  './validator/validators.js'
const CustumerRouter = Router()

CustumerRouter.post("/", customerValidators, handle);

export default CustumerRouter;
