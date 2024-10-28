function checkNumber(num) {
    if (num % 2 === 0) {
        return "偶數";
    }
    else {
        return "奇數";
    }
}

for (var i = 1; i <= 10; i++) {
    var result = checkNumber(i);
    console.log("\u6578\u5B57 ".concat(i, " \u662F").concat(result));
}

var checkNumberTernary = function (num) {
    return num % 2 === 0 ? "偶數" : "奇數";
};

console.log("\n使用陣列方法的另一種寫法：");
Array.from({ length: 10 }, function (_, i) { return i + 1; }).forEach(function (num) {
    console.log("\u6578\u5B57 ".concat(num, " \u662F").concat(checkNumberTernary(num)));
});
