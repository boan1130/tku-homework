function checkNumber(num: number): string {
    if (num % 2 === 0) {
        return "偶數";
    } else {
        return "奇數";
    }
}

for (let i: number = 1; i <= 10; i++) {
    const result: string = checkNumber(i);
    console.log(`數字 ${i} 是${result}`);
}

const checkNumberTernary = (num: number): string => 
    num % 2 === 0 ? "偶數" : "奇數";

console.log("\n使用陣列方法的另一種寫法：");
Array.from({length: 10}, (_, i) => i + 1).forEach(num => {
    console.log(`數字 ${num} 是${checkNumberTernary(num)}`);
});