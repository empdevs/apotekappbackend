import express, { Router } from 'express';
import { createRole, deleteRole, getAllRoles, getRoleById, updatedRole,  } from '../controllers/RoleController';

const router : Router = express.Router();

router.get('/', getAllRoles);
router.post('/', createRole);
router.get('/:id/', getRoleById);
router.put('/:id/update/', updatedRole);
router.put('/:id/delete/', deleteRole);

export default router;