let confirmplay = confirm("Are you confirm to start playing?")
if(confirmplay){
    let player = prompt("Please enter one: stone, paper, scissor?");
    if(player){
        let firstPlayer = player.trim().toLowerCase();
        if(
            firstPlayer === "stone" || 
            firstPlayer ===  "paper" || 
            firstPlayer === "scissor" 
        ){
            let computerChoice = Math.floor(Math.random()*3+1);
                let computer = computerChoice === 1? "stone":
                               computerChoice === 2? "paper":  "scissor";
            let result= computer === firstPlayer? "tie":
                        computer === "stone" && firstPlayer === "scissor"? `computer: 
                        ${computer}\n player: ${firstPlayer}\n Computer wins!` :
                         computer === "paper" && firstPlayer === "stone"? `computer: 
                        ${computer}\n player: ${firstPlayer}\n Computer wins!:`:
                        computer === "scissor" && firstPlayer === "paper"? `computer: 
                        ${computer}\n player: ${firstPlayer}\n Computer wins!:`: `computer: ${computer}\n player: ${firstPlayer}\n Player wins!`;
            alert(result);
            let playagain = confirm("Play again?");
            playagain? location.reload() : alert("Thanks for playing!");
        }
        else{let wrongmsg = confirm("You did not enter stone, paper, scissor")
            wrongmsg?location.reload(): alert("Seems like you wish to cancel the game :)")
        }

    }
    else{
        alert("Your mind may be changed. May be next time!")
    }

}
else{
    alert("May be next time!");
}