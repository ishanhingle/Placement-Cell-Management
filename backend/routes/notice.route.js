import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { multipleUpload } from "../middlewares/mutler.js";
import { createNotice, getAllNotices } from "../controllers/notice.controller.js";

const router = express.Router();

router.route('/upload').post(multipleUpload,createNotice);
router.route('/getAll').get(getAllNotices);
export default router;