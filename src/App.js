import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://blackbearwow.github.io/image/rockPaperScissors/scissors.png"
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
    // user === computer tie
    // user === rock, computer === "scissors" user 이김
    // user === rock, computer === "paper" user 짐
    // user === scissors, computer === paper user 이긴
    // user === scissors, computer === rock user 짐
    // user === paper, computer === rock user 이김
    // user === paper, computer === scissors user 짐

    if(user.name === computer.name) {
      // 비김
      return "tie";
    } else if(user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // 객체에 키값만 뽑아서 배열로 만들어 줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    
    return choice[final];
  } 

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
