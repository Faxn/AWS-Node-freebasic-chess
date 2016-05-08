var verify = require("./verify.js");
var board = require("./board.js")
board1 = new board.mailbox()
board1.arr[23] = 129
board1.arr[14] =  5
board1.arr[47] = 130
board1.arr[65] = 128
board1.arr[34] = 132
board1.arr[26] = 134
board1.arr[38] = 3
board1.arr[26] = 4
board1.arr[36] = 2
board1.arr[39] = 1
board1.arr[20] = 131
board1.arr[27] = 5
board1.arr[25] = 133
board1.arr[17] = 132
board1.arr[28] = 132
board1.arr[16] = 134
board1.arr[52] = 132
board1.arr[53] = 130
board1.arr[16] = 131
board1.arr[47] = 129
board1.arr[52] = 128
board1.arr[42] = 129
board1.arr[52] = 4
board1.arr[15] = 6
board1.arr[37] = 2
board1.arr[2552] = 5
board1.arr[52] = 134
board1.arr[16] = 6
board1.arr[52] = 128
board1.arr[16] = 3
board1.arr[18] = 129
board1.arr[62] = 128
board1.arr[45] = 134
board1.arr[32] = 129
board1.arr[1]  = 131
board1.arr[10] = 132
board1.arr[2]  = 5
board1.arr[9]  = 3
board1.arr[9] = 1
verify.verify(1, 25, 40, board1);
verify.verify(128, 40, 60, board1);
verify.verify(260, 53, 24, board1);
foo = verify.verify(0, 45, 2, board1);
console.log(foo);
bar = verify.verify(0, 9, 25, board1);
console.log(bar);