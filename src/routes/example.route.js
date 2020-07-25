import {Router} from 'express';
import * as controller from 'src/controllers/example.controller';

const router = Router();

router.route('/')
	.get(controller.all);

export default router;