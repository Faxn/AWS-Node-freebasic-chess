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
    validMove(type, origin, destination);
   
    
    }
    else 
    {
    return "Invalid Move.";
    }
    
}

function validMove(ptype, orig, dest){
    if (ptype == 1){
        
    }
    else if (ptype == 2){
        
    }
    else if (ptype == 3){
        
    }
    else if (ptype == 4){
        
    }
    else if (ptype == 5){
        
    }
    else if (ptype == 6){
        
    }

    
}exports.verify = Verify();
