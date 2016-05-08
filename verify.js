var board = require("./board.js");
function Verify(Player, SC1, SC2, mailbox){

    vOne = Math.floor(mailbox.arr[SC1] / 128);
    vTwo = Math.floor(mailbox.arr[SC2] / 128);
    xorOne = Boolean(Player == vOne);
    xorTwo = Boolean(Player == vTwo);
 
    type = 0;
    origin = 0;
    destination = 0;

    if ((xorOne && !xorTwo) || (!xorOne && xorTwo))
    {
  
    if (Player == vOne) 
    {
         
        type = (mailbox.arr[SC1] % 128);
       
        origin = SC1;
        destination = SC2;
        
       
       return validMove(type, origin, destination, Player, mailbox);
    
       
    }
    else if (Player == vTwo)
    {
        type = (mailbox.arr[SC2] % 128);
        origin = SC2;
        destination = SC1;
        
    return validMove(type, origin, destination, Player, mailbox);
    }
   
    
    }
    else 
    {
    return false+"01";
    }
 
        

}
function validMove(type, origin, destination, Player, mailbox){
    
    if (origin > destination){
         min = destination;
         max = origin;
         
    }
    else {
        
        
        min = origin;
        max = destination;
    }
    travel = max - min;

    if (type == 1){
        if (travel == 16){
            
           if (((origin <= 7)) || ((origin >= 16) && (origin <= 47)) || (origin >= 56)){
               return false+"02";
               
           }
           else {
               increment = 16;
               return commitMove(type, origin, destination, Player, mailbox);
           }
           
           }
          else if ((travel == 8)){
              if (mailbox.arr[destination] != 0){
                  return false+"04";
                 
              }
              else {increment = 8;}
          }
          else if ((travel == 7) || (travel == 9)){
              if (mailbox.arr[destination] == 0){
                  return false;
              }
              else {
            return commitMove(type, origin, destination, Player, mailbox);
              }
          }
        else {
            return false;
            
        }
            
        
        
    }
    else if (type == 2){
        if ((travel == 15) || (travel == 17) || (travel == 6) || (travel ==10)){
           return commitMove(type, origin, destination, Player, mailbox);
        }
        else {
            return false;
        }
    }
    else if (type == 3){
        if ((travel % 9 == 0))
        {
            increment = 9;
        }
        else if (travel % 7 == 0){
            increment = 7          
        }
        else 
        {
            return false;
        }
        
    }
    else if (type == 4){
        if (travel % 8 == 0){
            increment = 8;
        }
        else if (travel % 8 != 0){
         for (i = 0; i<=56; i++){
             j = 7 + i;
             if ((min >= i && min <= j) && (max >= i && max <= j)){
                 increment = 1;
                 travelTrace(min, max, increment, Player, mailbox, destination, origin, type);
             }
         }
         
        }
        else {
            return false;
        }
        
    }
    else if (type == 5){
        
         if ((travel == 1) || (travel == 8) || (travel == 7) || (travel == 9)){
            
            commitMove(type, origin, destination, Player, mailbox);
            
        }
        else {
       
            return false;
        
        }
        
    }
    else if (type == 6){
        
              if (travel % 8 == 0){
            increment = 8;
        }
        else if ((travel % 9 == 0))
        {
            increment = 9;
        }
        else if (travel % 7 == 0){
            increment = 7          
        }
        else{
         for (i = 0; i<=56; i++){
             j = 7 + i;
             if ((min >= i && min <= j) && (max >= i && max <= j)){
                 increment = 1;
                return travelTrace(min, max, increment, Player, mailbox, destination, origin, type);
             }
             else {
                return false;
             }

  
        }
        
   return travelTrace(min, max, increment, Player, mailbox, destination, origin, type);
    }

    function travelTrace(min, max, increment, Player, mailbox, destination, origin, type){
        min = min + increment;
        while (min < max){
            if (mailbox.arr[min] != 0){
                return false;
            }
            min = min + increment;
        }
       return commitMove(type, origin, destination, Player, mailbox);
    }
    
   }
   
}


var CommitMove = function(type, orig, destination, Player, mailbox){
                console.log("Write Success");

        if (Player == 1){
            type = type + 128;
        }
     
        mailbox.arr[destination] = type;
        mailbox.arr[origin] = 0;
        console.log("Write Success");
        return true;
}



exports.commit = CommitMove;
exports.verify = Verify;

