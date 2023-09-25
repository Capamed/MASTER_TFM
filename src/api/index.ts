import { Router } from "express";
import users from "./users/routes" 
import doctors from "./doctors/routes" 
import medications from "./medications/routes" 

const router = Router();

router.use("/users", users);
router.use("/doctors", doctors);
router.use("/medications", medications);

export default router;