const rock = {
  choice: 'Rock',
};

const paper = {
  choice: 'Paper',
};

const scissors = {
  choice: 'Scissors',
};

rock.beats = scissors;
scissors.beats = paper;
paper.beats = rock;

const possibilities = [rock, paper, scissors];

const pick = () => possibilities[Math.floor(Math.random() * 3)];

const play = function () {
    
  const computerChoice = pick();
  const userChoice = pick();

  console.log(`Computer Choice: "${computerChoice.choice}"`);
  console.log(`User Choice: "${userChoice.choice}"`);

  if (computerChoice === userChoice) {
    console.log('\nTIE!');
  } else if (computerChoice.beats === userChoice) {
    console.log('\nComputer Wins!');
  } else console.log('\nUser Wins!');

};

play();
