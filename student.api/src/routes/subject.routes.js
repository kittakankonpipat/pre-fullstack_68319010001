const express = require("express");
const subjectController = require("../controllers/subject.controller");
const router = express.Router();

router.get("/", subjectController.getAllSubjects);
router.get("/:id", subjectController.getSubjectById);
router.post("/", subjectController.createSubject);
router.put("/:id", subjectController.updateSubject);
router.delete("/:id", subjectController.deleteSubject);

module.exports = router;
