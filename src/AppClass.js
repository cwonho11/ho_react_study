import React, { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    // 가위 바위 보 object
    choice = {
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

    // 생성자
    constructor(props) {
        super(props);

        // state 초기화
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        };
    }

    // 가위바위보 게임 처리 함수
    play = (userChoice) => {        
        let computerChoice = this.randomChoice();
       
        this.setState(
            {
                userSelect: this.choice[userChoice],
                computerSelect: computerChoice,
                result: this.judgement(this.choice[userChoice], computerChoice)
            }
        );
    }

    // 난수 생성을 통한 가위바위보 선택
    randomChoice = () => {
        let itemArray = Object.keys(this.choice);  // 객체에 키값만 뽑아서 배열로 만들어 줌
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        
        return this.choice[final];
    }  

    // 승패 처리 함수
    judgement = (user, computer) => {       
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

    render() {
        return (
            <div>
                <div className='main'>
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
                </div>
                <div className='main'>
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
