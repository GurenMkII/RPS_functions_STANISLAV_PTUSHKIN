
var min = 0;
var max = 2;
var hands = ['rock', 'paper', 'scissors'];
var p1 = 
{
    name : "John",
    handRoll : '',
    p1wins : 0,
}
var p2 = 
{
    name : "Max",
    handRoll : '',
    p2wins : 0,
}
var p3 = 
{
    name : "Cait",
    handRoll : '',
    p3wins : 0,
}
var p4 = 
{
    name : "Rob",
    handRoll : '',
    p4wins : 0,
}

    // function playTournament(player1,player2,player3,player4,playUntil)
    // {
    //     playGame(playGame(player1,player2,playUntil),playGame(player3,player4,playUntil),playUntil)
    // }
    

    function playGame(player1,player2,playUntil)
    {
        while (player1.p1wins<playUntil && player2.p2wins<playUntil)
            {
                getHands(min, max)
                console.log(playRound(player1,player2));
                console.log(player1.name + " " + player1.p1wins);
                console.log(player2.name + " " + player2.p2wins);
            }
            if (player1.p1wins == playUntil)
            {
                console.log(player1);
                return player1;
            }else {console.log(player2);
                return player2;
            }
    }    
        
        
        

            function getHands(min, max) 
            {
                p1.handRoll = hands[(Math.floor(Math.random() * (max - min + 1) ) + min)];
                p2.handRoll = hands[(Math.floor(Math.random() * (max - min + 1) ) + min)];
                // p3.handRoll = hands[(Math.floor(Math.random() * (max - min + 1) ) + min)];
                // p4.handRoll = hands[(Math.floor(Math.random() * (max - min + 1) ) + min)];
            }
            
            
            // console.log(player1);
            // console.log(player2);
            function playRound(player1,player2)
            {
                if (player1.handRoll == player2.handRoll)
                    {
                        return "It's a tie!";
                }else if (player1.handRoll == 'rock' && player2.handRoll == 'paper')
                    {
                        player2.p2wins++;
                        return player2.name + " wins with paper against rock!";
                }else if (player1.handRoll == 'rock' && player2.handRoll == 'scissors')
                    {
                        player1.p1wins++;
                        return player1.name + " wins with rock against scissors!";
                    }
                if (player1.handRoll == 'paper' && player2.handRoll == 'rock')
                    {
                        player1.p1wins++;
                        return player1.name + " wins with paper against rock!";
                }else if (player1.handRoll == 'paper' && player2.handRoll == 'scissors')
                    {
                        player2.p2wins++;
                        return player2.name + " wins with scissors agains paper!";
                    }
                if (player1.handRoll == 'scissors' && player2.handRoll == 'rock')
                    {
                        player2.p2wins++;
                        return player2.name + " wins with rock against scissors!";
                }else if (player1.handRoll == 'scissors' && player2.handRoll == 'paper')
                    {
                        player1.p1wins++;
                        return player1.name + " wins with scissors against paper!";
                    }

            }
            
              
        
    
    playGame(p1,p2,5);
    // playGame(p3,p4,5);
    // playTournament(p1,p2,5);






