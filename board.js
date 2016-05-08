
// 56 57 58 59 60 61 62 63
// 48 49 50 51 52 53 54 55
// 40 41 42 43 44 45 46 47
// 32 33 34 35 36 37 38 39
// 24 25 26 27 28 29 30 31 
// 16 17 18 19 20 21 22 23
// 08 09 10 11 12 13 14 15
// 00 01 02 03 04 05 06 07


var mailbox = function () {
	this.arr = [ 0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0]
       this.foo = function(){
           return "bar"
       }

       
       /** Set the board to the traditional chess starting position.
        */
       back = [4,2,3,6,5,3,2,4]
       this.init = function(){
           
           for(i=0; i<8; i++){
              this.arr[i+48]=129; //black pawn
              this.arr[i+8]=1; //white pawn
              this.arr[i+56] = back[i]+128; //black rank
              this.arr[i] = back[i];        //white rank
           }
	

       }
}

exports.mailbox = mailbox;

exports.getRank = function(idx){
    return idx/8;
}

exports.getFile = function(idx){
    return idx % 8;
}

