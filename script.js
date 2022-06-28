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

function touchedButt() {
  let touchedButtOptions = prompt(
    'Shouldve left the butt alone. Youve been captured by a scuba diver and have been taken to Mount Wannahockaloogie at the dentists fish tank. Do you PLAY DEAD or STAY with your new friends?'
  )
  if (touchedButtOptions === 'PLAY DEAD') {
    alert(
      'Good call, Sharkbait! The dentist removed you from the tank and flushed you down the drain. Youre headed back home to the ocean!'
    )
    startGame()
  } else if (touchedButtOptions === 'STAY') {
    alert(
      'Oh no! Darla just arrived to pick up her birthday present, You! You will now join Chuckles as Darlas newest victim. RIP Chuckles.'
    )
    startGame()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    touchedButt()
  }
}

function dropOffChoices() {
  let dropOffChoices = prompt(
    "Wow! Check out that big butt! What'd you say? Want to touch it? (Y/N)"
  )
  if (dropOffChoices === 'Y') {
    touchedButt()
  } else if (dropOffChoices === 'N') {
    alert(
      `Yeah, I figured you were too afraid. You think you can do these things, but you just cant, ${userName}.`
    )
    startGame()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    dropOffChoices()
  }
}

function overTrench() {
  let overTrenchOptions = prompt(
    'Ahhh! Thousands of squishies are surrounding you! Dory was right. You still need to head to the EAC, so how about a race out of here. Want to HOP on the squishies or SWIM through them? (H/S)'
  )
  if (overTrenchOptions === 'H') {
    alert(
      `Boing! Boing! ${userName} Wins! Dory ate your bubbles and you made it to the EAC. Dont forget to ask how old the sea turtle is!`
    )
    startGame()
  } else if (overTrenchOptions === 'S') {
    alert(
      'Dory was like “woah”, and you were like “WOAH”, and the jellyfish stung you to death…'
    )
    startGame()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    overTrench()
  }
}

function eACCHoices() {
  let eACChoicesOptions = prompt(
    'On your way to the EAC, you run into a trench. Your friend Dory stops you before you swim over the trench and suggests you swim through it. Should you listen to Dory? (Y/N) She cant even remember her own name after all.'
  )
  if (eACChoicesOptions === 'Y') {
    alert(
      'You race Dory through the trench and make it to the EAC where you meet Crush Dude and his little dude children. Smart choice, Dude!'
    )
    startGame()
  } else if (eACChoicesOptions === 'N') {
    overTrench()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    eACCHoices()
  }
}

function pShermanChoices() {
  let pShermanChoicesOptions = prompt(
    `${userName}, you made it to the Sydney Harbour, but are lost and cant remember what building number you were headed to. Hey! Theres a whale heading your way. You speak Whale, dont you? Why dont you ask for directions? (OK/NO)`
  )
  if (pShermanChoicesOptions === 'OK') {
    alert(
      "Thhaaaankkk youuu, Big fellaa! He directed you to P Sherman and you're on your way to the Opera House!"
    )
    startGame()
  } else if (pShermanChoicesOptions === 'NO') {
    noDirections()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    pShermanChoices()
  }
}

function noDirections() {
  let noDirectionsOptions = prompt(
    'I guess we are on our own. I think the building number was either 45 or 42. Want to take a guess and well try it out? (45/42)'
  )
  if (noDirectionsOptions == 45) {
    alert(
      'Oh no! This led you to the sharks lair where you accidentally grazed one of the floating ballons and it annihilated you and your friends!'
    )
    startGame()
  } else if (noDirectionsOptions == 42) {
    alert(
      'We finally made it to P Sherman! Just keep swimming! Just keep swimming!'
    )
    startGame()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    noDirections()
  }
}

const chooseDestination = () => {
  let destinationChoice = prompt(
    'Your new friends are inviting you to skip school with them. Would you like to go to: A. the drop off, B. the EAC (East Australian Current), or to C. P Sherman 42 Wallaby Way Sydney? (A/B/C)'
  )

  if (destinationChoice === 'A') {
    dropOffChoices()
    touchedButt()
    startGame()
  } else if (destinationChoice === 'B') {
    eACCHoices()
    overTrench()
    startGame()
  } else if (destinationChoice === 'C') {
    pShermanChoices()
    noDirections()
    startGame()
  } else {
    alert("That wasn't a choice! Choose one of the options.")
    chooseDestination()
  }
}

startGame()
