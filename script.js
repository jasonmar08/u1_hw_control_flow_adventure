let userName = prompt("Welcome to the ocean! What's your name?")

alert(`Hey, ${userName}!`)

const startGame = () => {
  let userPlay = confirm('Ready for your first day of school?')
  playGame(userPlay)
}

const playGame = (choice) => {
  if (choice) {
    alert('Great! Make sure to hold my fin while we head to school.')
    chooseDestination()
  } else {
    alert("It's okay. I didn't think you were ready anyways.")
  }
}

const chooseDestination = () => {
  let destinationChoice = prompt(
    'Your new friends are inviting you to skip school with them. Would you like to go to: A. the drop off, B. the EAC (East Australian Current), or to C. P Sherman 42 Wallaby Way Sydney? (A/B/C)'
  )

  if (destinationChoice === 'A') {
    prompt(
      "Wow! Check out that big butt! What'd you say? Want to touch it? (Y/N)"
    )
    const dropOff = () => {
      if (dropOff === "Y") {
        prompt("Should've left the butt alone. You've been captured by a scube diver and have been taken to Mount Wannahockaloogie at the dentist's fish tank. Do you PLAY DEAD or STAY with your new friends?") {
          const fishTank = () => {
            if (fishTank === "PLAY DEAD") {
              alert("Good call, Sharkbait! The dentist removed you from the tank and flushed you down the drain. You're headed back home to the ocean!")
            } else {
              alert("Oh no! Darla just arrived to pick up her birthday present. You! You will now join Chuckles as Darlas newest victim. RIP Chuckles.")
            }
          }
        }
      } else {
        alert("Yeah, I figured you were too afraid. You think you can do these things, but you just can’t, ${userName}.")
      }
    }
    startGame()
  } else if (destinationChoice === 'B') {
    prompt(
      "On your way to the EAC, you run into a trench. Your friend Dory stops you before you swim over the trench and suggests you swim through it. Should you listen to Dory? (Y/N) She can't even remember her own name after all."
    )
    startGame()
  } else if (destinationChoice === 'C') {
    prompt(
      "You made it to the Sydney Harbour, but are lost and can't remember what building number you were headed to. Hey! There's a whale heading your way. You speak Whale, don't you? Why don't you ask for directions? (OK/NO)"
    )
    startGame()
  } else {
    alert("That wasn't a choice! Choose one if the options.")
    chooseDestination()
  }
}

startGame()
