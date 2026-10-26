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
    {id: 102, name: "Ball", age: 19, major: "IT Roblox"},
    {id: 103, name: "Korn", age: 30, major: "IT PUBG"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการเเสดงผล
const names = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age} รหัส ${s.id} แผนกวิชา ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`);

