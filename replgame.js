let readlineSync = require('readline-sync');

console.log( "Welcome to Bootysmack: The game of smackin booties!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: 1-look around, 2-smack a booty, 3-run away \n" );

switch(option) {
  case "1":
    console.log( "You search the surrounding area for booties, and come up empty handed! \n" );

    let option2 = readlineSync.question( "Options: 1-look around some more, 2- give up and quit! \n" );
        switch(option2) {
        case "1":
        console.log("You found mad booties! Smack away son! Thanks for playing!")
        break;
        case "2":
        console.log("Game over! Peace out!")
        break;
        default:
        readlineSync.question( "Press enter to restart!" )
        console.log('\033c');
      }
    break;

  case "2":
    console.log( "Ouch! She wasnt ready! " );
    let option3 = readlineSync.question( "Options: 1-Slap again, you're pretty scummy anyway!, 2-Realize the error of your bootysmackin ways and repent \n" );
        switch(option3) {
        case "1":
        console.log("Scumbag city population you bro! Play again by executing the command again because I slacked on Super Bowl Weekend!")
          break;
        case "2":
        console.log("Atta boy/girl/him/xim/xer! You're officially pronounly-progressive! Thanks for playing!")
        break;
        default:
        readlineSync.question( "Press enter to restart!" )
        console.log('\033c');
      }
    break;
  case "3":
    console.log( "Scared money never made money! Go find a booty and get ya smack on!" );
    let option4 = readlineSync.question( "Options: 1-Your goal in life was to smack booties. You achieved your goal. Pick this option to win., 2- You won. Twice if you type in 2. \n" );
        switch(option4) {
        case "1":
        console.log("You the bootysmacker! Thanks for playing this terrible game!")
        break;
        case "2":
        console.log("Game over, champion! peace out!")
        break;
        default:
        readlineSync.question( "Press enter to restart!" )
        console.log('\033c');
      }
    break;
  default:
    console.log( "That booty smacked back!" );
    console.log( "You weren't ready for that!" );

}
