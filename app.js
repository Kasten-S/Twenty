var human = 0;
var computer = 0;

do {

    var randomNumber = Math.floor(Math.random() * 10) + 1
    var randomNumber2 = Math.floor(Math.random() * 10) + 1
        computer = computer + randomNumber
    
        human = human + randomNumber2
        if (human > 20) {
            break
        }
        if (computer > 20) {
            break
        }
        alert(`The computer's number is ${randomNumber}. Computer is now at ${computer}`)
        alert(`Your number is ${randomNumber2}. You now have ${human}`)
        var decision = prompt("Would you like a new number? y for yes n for no")
        if (decision == "n") {
            break
        }
} while ((human < 20) && (decision == "y"))
if ((human > 20) && (computer < 20)) {

    var play = prompt("Computer Wins! Want to play again? type yes for another round or no if you want to stop")
    if (play == "yes"){
        human = 0
        computer = 0
        do {
            
            var randomNumber = Math.floor(Math.random() * 10) + 1
            var randomNumber2 = Math.floor(Math.random() * 10) + 1
                computer = computer + randomNumber
            
                human = human + randomNumber2
                if (human > 20) {
                    break
                }
                if (computer > 20) {
                    break
                }
                alert(`The new number is ${randomNumber}. Computer is now at ${computer}`)
                alert(`Your number is ${randomNumber2}. You now have ${human}`)
                var decision = prompt("Would you like a new number? y for yes n for no")
        } while ((human < 20) && (decision != "n"))
    }
}
if ((human <= 20) && (computer > 20)) {
    var again = prompt("You Win! Want to play again? type yes for another round or no if you want to stop")
    if (again == "yes"){
        human = 0
        computer = 0
        do {
           
            var randomNumber = Math.floor(Math.random() * 10) + 1
            var randomNumber2 = Math.floor(Math.random() * 10) + 1
                computer = computer + randomNumber
            
                human = human + randomNumber2
                if (human > 20) {
                    break
                }
                if (computer > 20) {
                    break
                }
                alert(`The new number is ${randomNumber}. Computer is now at ${computer}`)
                alert(`Your number is ${randomNumber2}. You now have ${human}`)
                var decision = prompt("Would you like a new number? y for yes n for no")
        } while ((human < 20) && (decision != "n"))
    }
}
if ((human > 20) && (computer > 20)) {
    var retry = prompt("You both tie! Want to play again? type yes for another round or no if you want to stop")
    if (retry == "yes"){
        human = 0
        computer = 0
        do {
            
            var randomNumber = Math.floor(Math.random() * 10) + 1
            var randomNumber2 = Math.floor(Math.random() * 10) + 1
                computer = computer + randomNumber
            
                human = human + randomNumber2
                if (human > 20) {
                    break
                }
                if (computer > 20) {
                    break
                }
                
                alert(`The computer's number is ${randomNumber}. Computer is now at ${computer}`)
                alert(`Your number is ${randomNumber}. You now have ${human}`)
                var decision = prompt("Would you like a new number? y for yes n for no")
        } while ((human < 20) && (decision != "n"))
        if ((human > 20) && (computer < 20)) {
    }
}
}
if ((human < 20) && (computer < 20)) {
    var restart = prompt("You ended the game too early to determine the winner! Want to play again? type yes for another round or no if you want to stop")
    if (restart == "yes"){
        human = 0
        computer = 0
        do {
            
            var randomNumber = Math.floor(Math.random() * 10) + 1
            var randomNumber2 = Math.floor(Math.random() * 10) + 1
                computer = computer + randomNumber
            
                human = human + randomNumber2
                if (human > 20) {
                    break
                }
                if (computer > 20) {
                    break
                }
                
                alert(`The computer's number is ${randomNumber}. Computer is now at ${computer}`)
                alert(`Your number is ${randomNumber}. You now have ${human}`)
                var decision = prompt("Would you like a new number? y for yes n for no")
        } while ((human < 20) && (decision != "n"))
        if ((human > 20) && (computer < 20)) {
    }
    }
}