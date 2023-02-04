import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import TinyCarrot from './img/tinycarrot.jpg'
import TinyRadish from './img/tinyradish.jpg';
import TinyPotato from './img/tinypotato.webp';
import TinyNuts from './img/tinynuts.webp'
import Miller from './img/miller.png';
import BlueMoon from './img/BlueMoon.jpg'
import Steve from './img/nick.jpg';
import Nick from './img/steve.webp'
import Safari from './img/safari.jpg'
import France from './img/france.jpg'
import Vermont from './img/vermont.jpg'
import ProfPic from './img/ProfilePhoto.jpg'

export default function VacationQuiz(){
    return(
        <div className='quiz' align="center">
            <BuzzFeedQuiz
            title={"Where should you take your next vacation?"}
            description={"We'll reveal your dream vacation based on your answers to these questions. Ready, set, jet!"}
            byline={true}
            bylineAuthor={"hanna"}
            bylineAvatarImageSrc={ProfPic}
            autoScroll={true}
            onAnswerSelection={(questionIndex, answerIndex, resultID) =>
              console.log({
                questionIndex,
                answerIndex,
                resultID,
              })
            }
            questions={[

              {
                question: "What is the best day to lump?",
                backgroundColor: "#9D8DF1",
                fontColor: "#000",
                answers: [
                  {
                    answer: "Tuesday",
                    resultID: 0,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Sunday",
                    resultID: 1,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Every dang day.",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
                  },
                ],
              },
              {
                question: "What is the worst song ever?",
                backgroundColor: "#9D8DF1",
                answers: [
                  {
                    answer: "1-800-Kars-For-Kids",
                    resultID: 0,
                    backgroundColor: '#95f2d9',
                    fontColor:"#000"
                  },
                  {
                    answer: "Stinky Baby",
                    resultID: 1,
                    backgroundColor: '#95f2d9',
                    fontColor:"#000"
                  },
                  {
                    answer: "That Brother Bear song that makes everyone cry",
                    resultID: 2,
                    backgroundColor: '#95f2d9',
                    fontColor:"#000"
                  },
                  {
                    answer: "Wonderwall",
                    resultID: 2,
                    backgroundColor: '#95f2d9',
                    fontColor:"#000"
                  }
                ],
              },
              {
                question: "Pick a beer to drink",
                backgroundColor: "#9D8DF1",
                fontColor: "#000",
                questionRelativeToImage: "overlap",
                answerArrangement: "tile",
                answers: [
                  {
                    answer: "Miller High Life ",
                    resultID: 0,
                    backgroundImageSrc: Miller,
                  },
                  {
                    answer: "... Miller High Life again",
                    resultID: 1,
                    backgroundImageSrc: Miller,
                  },
                  {
                    answer: "Really, it's only just Miller High Life",
                    resultID: 2,
                    backgroundImageSrc: Miller,
                  },
                  {
                    answer: "Blue Moon (:",
                    resultID: 2,
                    backgroundImageSrc: BlueMoon,
                    revealResponse: {
                        title: "You promised you would never fib, Alexander!! Nice frucking try.",
                     },
                  },
                ],
              },
              {
                question: "Pick your favorite tiny food.",
                questionRelativeToImage: "overlap",
                backgroundColor: "#9D8DF1",
                answerArrangement: "tile",
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: TinyCarrot,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: TinyPotato,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: TinyRadish,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: TinyNuts,
                  },
                ],
              },
              {
                question: "What's your favorite meal?",
                backgroundColor: "#9D8DF1",
                fontColor:'#000', 
                answers: [
                  {
                    answer: "Domino's",
                    resultID: 0,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Microwaved hotdogs",
                    resultID: 1,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "An Alexander Sucks",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
                  },
                ],
              },
              {
                question: "Choose one to touch yourself to.",
                backgroundColor: "#9D8DF1",
                questionRelativeToImage: "overlap",
                answerArrangement: "tile",
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Steve,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Nick,
                  },
                ],
              },
          
            {
                question: "If you had to eat food baby bird'ed to you, which food would you choose?",
                backgroundColor: "#9D8DF1",
                fontColor: "#000",
                answers: [
                  {
                    answer: "Pizza",
                    resultID: 0,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Mashed 'tatos",
                    resultID: 1,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Chicken tendies",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
                  },
                ],
              },
            ]}
            results={[
              {
                title: "To the mountains.",
                description: "I've recently learned that being with me is exhausting for you. So maybe go to the mountains by yourself to relax, count Subies, take a tubby, and eat good pizza.",
                resultImageSrc: Vermont,
                resultID: 1,
              },
              {
                title: "France",
                description: "Time to go eat a lot of bread, learn a love language, and eat lot of eggs.",
                resultImageSrc: France,
                resultID: 0,
              },
              {
                title: "Subaru counting safari!",
                description: "You look like you need a long drive to no where and to shout 'subaru!' every time you see one. Good luck, sometimes they're plentiful and sometimes they're rare. (Also, I made this photo myself - you're welcome.)",
                resultImageSrc: Safari,
                resultID: 2,
              },
            ]}
          />
          <a href="/alexandersucks">Return to quizzes</a>
          </div>
        );
      };