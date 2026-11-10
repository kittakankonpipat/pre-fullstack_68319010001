// เงื่อนไข เเละ วนซ้ำ

function checkScore(score){
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(`75 คะเเนน ${checkScore(75)}`);
console.log(`49 คะเเนน ${checkScore(49)}`);


// Ternary Operator
const result = 62 >= 50 ? "Pass" : "Fail";
console.log(`62 คะเเนน ${result}`);

// for loop 
for (let i = 1; i <= 10; i++){
    console.log(`รอบที่ ${i}`);
}