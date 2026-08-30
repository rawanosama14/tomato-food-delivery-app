import express from "express";
import multer from "multer";
import { addfood } from "../controllers/foodcontroller.js";

// create router
const router = express.Router();

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}--${file.originalname}`);
  }
});

// upload handler
const upload = multer({ storage: storage });

// route
router.post("/add", upload.single("image"), addfood);

// export
export default router;
