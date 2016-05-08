
exports.white = 0;
exports.black = 128;

exports.pawn = 1;
exports.knight = 2;
exports.bishop = 3;
exports.rook = 4;
exports.king = 5;
exports.queen = 6;

unicode = {
    1:'\u265F',
    2:'\u265E',
    3:'\u265D',
    4:'\u265C',
    5:'\u265A',
    6:'\u265B',
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
    console.log("peice value"+piece);
    if(piece == 0){
        
	return '\u0000'
    }
    piece = unicode[piece & 127]
    if(piece & 128 > 0){
       piece = piece + offset
    }
    return piece;
}
//meaningless comment

