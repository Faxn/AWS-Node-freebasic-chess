var board = require("./board.js");
function Verify(Player, SC1, SC2, mailbox){
    vOne = (mailbox[SC1] / 128);
    vTwo = (mailbox[SC2] / 128);
    xorOne = Boolean(Player == vOne);
    xorTwo = Boolean(Player == vTwo);
    
    if ((xorOne && !xorTwo) || (!xorOne && !xorTwo))
    {
    if (Player == vOne) 
    {
        type = (mailbox[SC1] % 128);
        origin = SC1;
        destination = SC2;
        
    
       
    }
    else if (Player == vTwo)
    {
        type = (mailbox[SC2] % 128);
        origin = SC2;
        destination = SC1;
     
    }
    validMove(type, origin, destination, Player, mailbox);
   
    
    }
    else 
    {
    return "Invalid Move.";
    }
    
}

function validMove(ptype, orig, dest, player, mailbox){
    if (orig > dest){
         min = dest;
         max = orig;
    }
    else {
        min = orig;
        max = dest;
    }
    travel = max - min;
    if (ptype == 1){
        if (travel == 16){
           if (((orig <= 7)) || ((orig >= 16) && (orig <= 47)) || (orig >= 56)){
               return false
           }
           else {
               increment = 16;
           }
           
           }
          else if ((travel == 8)){
              if (mailbox[dest] != 0){
                  return false
              }
              else {increment = 8;}
          }
          else if ((travel == 7) || (travel == 9)){
              if (mailbox[dest] == 0){
                  return false;
              }
              else {
              commitMove(ptype, origin, dest, player, mailbox);
              }
          }
        else {
            return false;
            
        }
            
        
        
    }
    else if (ptype == 2){
        if ((travel == 15) || (travel == 17) || (travel == 6) || (travel ==10)){
            commitMove(ptype, origin, dest, player, mailbox);
        }
        else {
            return "Invalid Move.";
        }
    }
    else if (ptype == 3){
        if ((travel % 9 == 0))
        {
            increment = 9;
        }
        else if (travel % 7 == 0){
            increment = 7          
        }
        else 
        {
            return "Invalid Move.";
        }
        
    }
    else if (ptype == 4){
        if (travel % 8 == 0){
            increment = 8;
        }
        else if (travel % 8 != 0){
         for (i = 0; i<=56; i++){
             j = 7 + i;
             if ((min >= i && min <= j) && (max >= i && max <= j)){
                 increment = 1;
                 travelTrace(min, max, increment, player, mailbox, dest, origin, ptype);
             }
         }
         
        }
        else {
            return false;
        }
        
    }
    else if (ptype == 5){
         if ((travel == 1) || (travel == 8) || (travel == 7) || (travel == 9)){
            commitMove(ptype, origin, dest, player, mailbox);
        }
        else {
            return "Invalid Move.";
        }
        
    }
    else if (ptype == 6){
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
                 travelTrace(min, max, increment, player, mailbox, dest, origin, ptype);
             }
             else {
                return false;
             }

        }
        }
        
    travelTrace(min, max, increment, player, mailbox, dest, origin, ptype);
    

    function travelTrace(min, max, increment, player, mailbox, dest, origin, ptype){
        min = min + increment;
        while (min < max){
            if (mailbox[min] != 0){
                return "Invalid Move";
            }
            min = min + increment;
        }
        commitMove(ptype, origin, dest, player, mailbox);
    }
    
   
    function commitMove(ptype, orig, dest, player, mailbox){
        if (player == 1){
            ptype = ptype + 128;
        }
        if ((mailbox[dest] == 5) || (mailbox[dest] == 133)){
            if (player == 0){
                player == "White";
            }
            else {
                player == "Black";
            }
            }
            winner = player;
            gameover = 1;
        }
        mailbox[dest] = ptype;
        mailbox[orig] = 0;
        if (gameover == 1){
            return player +" Player is the winner!";
        }
   }
    
    }
}exports.verify = Verify;
