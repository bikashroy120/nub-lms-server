// index.ts (main routes)
import express from 'express';
import userRoute from '../module/users/users.route';
import { AuthRoutes } from '../module/auth/auth.route';

const router = express.Router();

const routes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

routes.forEach(r => {
  router.use(r.path, r.route);
});

export default router;
