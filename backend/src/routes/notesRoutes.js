import express from 'express';
import { createNotes, getNotesById, deleteNotes, getAllNotes, updateNotes } from '../controllers/notesControllers.js';

const router = express.Router();
//routes/ end points
// add "/some" it will be "/api/notes/some"
router.get("/",getAllNotes);
router.get("/:id",getNotesById);
router.post("/",createNotes);
//for testing
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;


