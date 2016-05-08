
exports.white = 0;
exports.black = 128;

exports.pawn = 1;
exports.knight = 2;
exports.bishop = 3;
exports.rook = 4;
exports.king = 5;
exports.queen = 6;

unicode = {
    1:'\u2569',
    2:'\u2658',
    3:'\u2657',
    4:'\u2656',
    5:'\u2654',
    6:'\u2655',
}

unicode_html = {5:9812,
           6:9813,
           4:9814,
           3:9815,
           2:9816,
           1:9817
	   }
offset = 6;
exports.toUnicode= function(piece){
    if(piece == 0){
	return " "
    }
    piece = unicode[piece & 127]
    if(piece & 128 > 0){
       piece = piece + offset
    }
    return piece;
}
