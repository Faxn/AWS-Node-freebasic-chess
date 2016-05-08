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
        
    }
    else if (ptype == 2){
        
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
        
    }
    else if (ptype == 5){
        
    }
    else if (ptype == 6){
        
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
        mailbox[dest] = ptype;
        mailbox[orig] = 0;
   }
    
}exports.verify = Verify;
