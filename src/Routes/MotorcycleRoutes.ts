import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default routes;
