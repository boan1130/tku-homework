function printMultiplicationTable() {
    console.log("九九乘法表\n");
    for (var i = 1; i <= 9; i++) {
        var row = "";
        for (var j = 1; j <= 9; j++) {
            var result = i * j;
            var formattedResult = result < 10 ? " ".concat(result) : "".concat(result);
            row += "".concat(i, " x ").concat(j, " = ").concat(formattedResult, "    ");
            if (j % 3 === 0) {
                console.log(row);
                row = "";
            }
        }
        if (row !== "") {
            console.log(row);
        }
    }
    // 使用迴圈產生分隔線
    var separator = "";
    for (var i = 0; i < 50; i++) {
        separator += "-";
    }
    console.log(separator);
}
// 呼叫函數來印出九九乘法表
printMultiplicationTable();
