const prisma = require("../prisma");

// ตรวจสอบและแปลงข้อมูลรายวิชาจาก req.body
// รับ ท-ป-น ได้ 2 แบบ: แยกฟิลด์ theoryHours/practiceHours/selfStudyHours หรือ hours: "2-2-5"
function parseSubject(body) {
  let { subjectCode, subjectName, objective, description, theoryHours, practiceHours, selfStudyHours, instructor, hours } = body;

  if (hours !== undefined && hours !== null && hours !== "") {
    const parts = String(hours).split("-").map((s) => s.trim());
    if (parts.length !== 3) {
      return { error: "รูปแบบ ท-ป-น ไม่ถูกต้อง (ตัวอย่าง: 2-2-5)" };
    }
    [theoryHours, practiceHours, selfStudyHours] = parts;
  }

  const textFields = { subjectCode, subjectName, objective, description, instructor };
  for (const [key, value] of Object.entries(textFields)) {
    if (typeof value !== "string" || value.trim() === "") {
      return { error: `กรุณากรอกข้อมูลให้ครบ (${key})` };
    }
  }

  const hourFields = { theoryHours, practiceHours, selfStudyHours };
  const hoursData = {};
  for (const [key, value] of Object.entries(hourFields)) {
    const n = Number(value);
    if (value === undefined || value === null || value === "" || !Number.isInteger(n) || n < 0) {
      return { error: `ชั่วโมง ท-ป-น ต้องเป็นจำนวนเต็มตั้งแต่ 0 ขึ้นไป (${key})` };
    }
    hoursData[key] = n;
  }

  return {
    data: {
      subjectCode: subjectCode.trim(),
      subjectName: subjectName.trim(),
      objective: objective.trim(),
      description: description.trim(),
      instructor: instructor.trim(),
      ...hoursData,
    },
  };
}

// เพิ่มฟิลด์ hours ("ท-ป-น") ในผลลัพธ์ เพื่อให้หน้าเว็บแสดงผลได้ง่าย
function withHours(subject) {
  return {
    ...subject,
    hours: `${subject.theoryHours}-${subject.practiceHours}-${subject.selfStudyHours}`,
  };
}

function parseId(param) {
  const id = Number(param);
  return Number.isInteger(id) && id > 0 ? id : null;
}

// ดึงข้อมูลทั้งหมด และค้นหาจากรหัสวิชา / ชื่อวิชา / ครูผู้สอน
exports.getAllSubjects = async (req, res) => {
  try {
    const search = req.query.search || "";
    const subjects = await prisma.subject.findMany({
      where: search
        ? {
            OR: [
              { subjectCode: { contains: search } },
              { subjectName: { contains: search } },
              { instructor: { contains: search } },
            ],
          }
        : undefined,
      orderBy: { id: "asc" },
    });
    res.json(subjects.map(withHours));
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ดึงข้อมูลรายวิชาเดียว
exports.getSubjectById = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) return res.status(400).json({ message: "รหัสอ้างอิงไม่ถูกต้อง" });

    const subject = await prisma.subject.findUnique({ where: { id } });
    if (!subject) return res.status(404).json({ message: "ไม่พบรายวิชา" });

    res.json(withHours(subject));
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// เพิ่มรายวิชา
exports.createSubject = async (req, res) => {
  try {
    const { data, error } = parseSubject(req.body || {});
    if (error) return res.status(400).json({ message: error });

    const subject = await prisma.subject.create({ data });
    res.status(201).json(withHours(subject));
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(409).json({ message: "รหัสวิชานี้มีอยู่แล้ว" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// แก้ไขรายวิชา
exports.updateSubject = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) return res.status(400).json({ message: "รหัสอ้างอิงไม่ถูกต้อง" });

    const { data, error } = parseSubject(req.body || {});
    if (error) return res.status(400).json({ message: error });

    const subject = await prisma.subject.update({ where: { id }, data });
    res.json(withHours(subject));
  } catch (err) {
    if (err.code === "P2025") return res.status(404).json({ message: "ไม่พบรายวิชา" });
    if (err.code === "P2002") return res.status(409).json({ message: "รหัสวิชานี้มีอยู่แล้ว" });
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ลบรายวิชา
exports.deleteSubject = async (req, res) => {
  try {
    const id = parseId(req.params.id);
    if (!id) return res.status(400).json({ message: "รหัสอ้างอิงไม่ถูกต้อง" });

    const subject = await prisma.subject.delete({ where: { id } });
    res.json({ message: `ลบรายวิชา ${subject.subjectCode} สำเร็จ` });
  } catch (err) {
    if (err.code === "P2025") return res.status(404).json({ message: "ไม่พบรายวิชา" });
    res.status(500).json({ message: "Internal Server Error" });
  }
};
