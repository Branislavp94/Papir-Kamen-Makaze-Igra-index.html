
alert (`Branislav Pavkovic igra Papir Kamen Makaze`);
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
         
          setTimeout(() => {
            //Here is where we call compare hands
            uporediti(this.textContent, computerChoice);

            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);

          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";

   
      });
    });
  };


        const updateRezultat = () =>{

              const igrac_rez = document.querySelector(".player-score p");
              const  komp_rez = document.querySelector(".computer-score p");
                igrac_rez.textContent = pScore;
                komp_rez.textContent = cScore;

        }






        const  uporediti = (playerChoice , computerChoice)   => {
            const winner = document.querySelector(".winner");
          if(playerChoice === computerChoice){
                  winner.textContent = "Nereseno je";
                  return;
          }

          if (playerChoice === "rock"){
            if(computerChoice === "scissors" ){
                  winner.textContent  = "Igrac je pobedio"
                  pScore++ ;
                  updateRezultat();
                  return;

            }else{
                            winner.textContent = "Kompjuter je pobedio"
                            
                            cScore++;
                            updateRezultat();
                            return;
            }
          }

          if (playerChoice === "paper"){
            if(computerChoice === "scissors" ){
                  winner.textContent  = "Kompjuter je pobedio"
                  sScore++
                  updateRezultat();
                  return;
                  
            }else{
                            winner.textContent = "Igrac je pobedio"
                            pScore++;
                            updateRezultat();
                            return;
            }
          }
          if (playerChoice === "scissors"){
            if(computerChoice === "rock" ){
                  winner.textContent  = "Kompjuter je pobedio"
                  cScore++ ;
                  updateRezultat();
                  return;
                  
            }else{
                            winner.textContent = "Igrac  je pobedio"
                            pScore++
                            updateRezultat();
                            return;
            }
          }


        };
        

 

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
