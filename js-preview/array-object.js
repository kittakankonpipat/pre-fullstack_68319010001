// อาร์เรย์ เเละ ออบเจคต์

// Array
const students = ["Earth", "Tho", "Silapakorn" , "Ood", "Matus"];

console.log(`ก. เเสดงทั้งหมด ${students}`);
console.log(`ข. คนเเรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการเเสดงผลลัพธ์ที่อัพเดต ${students} จำนวนรายชื่อ ${students.length} คน0`);

//Object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major: "Information Technology",
};
console.log(`Name ${student.name}`);
console.log(`Major ${student.major}`);

// Array and Object
const studentList = [
    {id: 101, name: "Ice", age: 20, major: "IT"},
    {id: 102, name: "Ball", age: 19, major: "CG"},
    {id: 103, name: "Korn", age: 30, major: "IT"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการเเสดงผล
const names = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age} รหัส ${s.id} แผนกวิชา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);

// filter : คัดกรองเฉพาะตัวที่เลือกเเละตรงเงื่อนไข
const isStudents = studentList.filter((s) => s.major === "IT");
console.log(`กรองข้อมูล ${isStudents.length}`);

//find : หาตัวเเรก(ตัวอักษร ตัวเลข) ที่คตรงเงื่อนไข
const found = studentList.find((s) => s.id === 103);
console.log("ผลการค้นหา" , found);
console.log(`ผลการค้นหา ${found.name}`);

// ค้นหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ่
const keyword = "ba";
const searchResult = studentList.filter((s) => s.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.name));

// ที่นี้ นศ. ปรับให้ลองค้นหาชื่อสาขา เเละให้เเสดงข้อมูลทั้งหมดที่ตรวจกับการพิมพ์ชื่อสาขาเเค่บางอักษร (keyword : i)
// ค้นหาชื่อสาขา และแสดงข้อมูลที่ตรงกับ keyword (เช่น "i")
const keywordMajor = "i";
const searchResultMajor = studentList.filter((s) => s.major.toLocaleLowerCase().includes(keywordMajor.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keywordMajor}`, searchResultMajor.map((s) => s.major));