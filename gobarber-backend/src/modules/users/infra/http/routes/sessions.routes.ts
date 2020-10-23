import { Router } from 'express';
import SessionsControler from '@modules/users/infra/http/controllers/SessionsController';

const sessionsRouter = Router();

const sessionsController = new SessionsControler();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
