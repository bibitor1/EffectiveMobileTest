import { Router } from 'express';
import { addHistoryUser, getHistoryUser } from '../controllers/history.controller';
import { addHistoryUserValidate, getHistoryUserValidate } from '../middlewares/validate';

const router: Router = Router();

router.post('/', addHistoryUserValidate, addHistoryUser);
router.get('/:id', getHistoryUserValidate, getHistoryUser);

export default router;
