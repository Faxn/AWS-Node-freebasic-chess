
exports.white = 0;
exports.black = 128;

exports.pawn = 1;
exports.knight = 2;
exports.bishop = 3;
exports.rook = 4;
exports.king = 5;
exports.queen = 6;

unicode = {
    1:'\u2659',
    2:'\u2658',
    3:'\u2657',
    4:'\u2656',
    5:'\u2654',
    6:'\u2655',
    129:'\u265f',
    130:'\u265e',
    131:'\u265d',
    132:'\u265c',
    133:'\u265a',
    134:'\u265b',
}


offset = 6;
exports.toUnicode= function(piece){
    if(piece == 0){
        
	return '\u0000'
    }
    piece = unicode[piece]

    return piece;
}
//meaningless comment

