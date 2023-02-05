import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import Bird from './img/bird.jpg'
import Hands from './img/hands.jpg'
import Toy from './img/toy.webp'
import Ball from './img/ball.jpg'
import Fishsticks from './img/fishsticks.jpg';
import Sushi from './img/sushi.webp';
import Sword from './img/sword.jpg';
import Salmon from './img/salmon.jpg'
import Turkey from './img/turk.jpg'
import Peebs from './img/peebs.jpg'
import Chicken from './img/chicky.jpg'
import ProfPic from './img/ProfilePhoto.jpg'

export default function Meow(){
    return(
        <div className='quiz' align="center">
        <Link to="/alexandersucks">Return to quizzes</Link>
            <BuzzFeedQuiz
            title={"What kitkat are you?"}
            description={"Deep down, everybody wants to be a cat."}
            byline={true}
            bylineAuthor={"hanna"}
            bylineAvatarImageSrc={ProfPic}
            autoScroll={true}
            //onRestart={() => alert("Are you seriously hoping to get a different result?")}
            //onResult={() => alert("The onResult prop triggered this alert!")}
            onAnswerSelection={(questionIndex, answerIndex, resultID) =>
              console.log({
                questionIndex,
                answerIndex,
                resultID,
              })
            }
            questions={[
                {
                    question: "Which is your favorite smell?",
                    backgroundColor: "#A2AD91",
                    answers: [
                      {
                        answer: "Sandal wood",
                        resultID: 0,
                        backgroundColor: '#B7918C'
                      },
                      {
                        answer: "Noteworthy  551",
                        resultID: 1,
                        backgroundColor: '#B7918C'
                      },
                      {
                        answer: "Patchouli",
                        resultID: 2,
                        backgroundColor: '#B7918C',
                        revealResponse: {
                            title: "Immediate divorce, Alexander.",
                         },
                      },
                    ],
                  },
                  {
                    question: "Choose something to play with",
                    backgroundColor: "#A2AD91",
                    answerArrangement: "tile",
                    answers: [
                      {
                        resultID: 0,
                        backgroundImageSrc: Toy,
                      },
                      {
                        resultID: 1,
                        backgroundImageSrc: Ball,
                      },
                      {
                        resultID: 2,
                        backgroundImageSrc: Bird,
                      },
                      {
                        resultID: 2,
                        backgroundImageSrc: Hands,
                      },
                    ],
                  },
              {
                question: "Do you enjoy screaming into the void?",
                backgroundColor: "#A2AD91",
                answers: [
                  {
                    answer: "Yes, constantly.",
                    resultID: 0,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "No, I am classier than that.",
                    resultID: 1,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "Occasionally, when I'm upset or excited",
                    resultID: 2,
                    backgroundColor: '#B7918C'
                  },
                ],
              },
              {
                question: "Choose a spot to nap",
                backgroundColor: "#A2AD91",
                answers: [
                  {
                    answer: "In the windowsill.",
                    resultID: 0,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "In a box, or a bag.",
                    resultID: 1,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "On the bed, preferrably on a human.",
                    resultID: 2,
                    backgroundColor: '#B7918C'
                  },
                ],
              },
              {
                question: "What do you do for work?",
                backgroundColor: "#A2AD91",
                answers: [
                  {
                    answer: "Software developer",
                    resultID: 0,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "Retired",
                    resultID: 1,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "Bird watcher",
                    resultID: 2,
                    backgroundColor: '#B7918C'
                  },
                ],
              },
              {
                question: "What dish would you prefer to eat?",
                questionRelativeToImage: "overlap",
                backgroundColor: "#A2AD91",
                answerArrangement: "tile",
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Sword,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Fishsticks,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Salmon,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Sushi,
                  },
                ],
              },
              {
                question: "Choose an alignment",
                backgroundColor: "#A2AD91",
                answers: [
                  {
                    answer: "Chaotic Neutral",
                    resultID: 0,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "Lawful Good",
                    resultID: 1,
                    backgroundColor: '#B7918C'
                  },
                  {
                    answer: "Lawful Evil",
                    resultID: 2,
                    backgroundColor: '#B7918C',
                  },
                ],
              },
            ]}
            results={[
              {
                title: "Peebutter",
                description: "You're the OG queen. I hope every day you hear a 'hanna loves you' whispered into your ear. You are my most favorite and I miss you.",
                resultImageSrc: Peebs,
                resultID: 1,
              },
              {
                title: "Chicky Pot Pie",
                description: "I'm assuming you really like to scream a lot, and ocassionally claw your way up peoples' bodies to sit on their shoulders. You're also an amazing programming assistant and are great company through potato peeling meetings. You're very snuggly, but will attack unprovoked.",
                resultImageSrc: Chicken,
                resultID: 0,
              },
              {
                title: "Turkish",
                description: "You're a little sunbathing baby with a penchant for randomly darting off the bed out of nowhere to do god knows what. You remind me of a little reeses cup and I just wanna eat your little ears.",
                resultImageSrc: Turkey,
                resultID: 2,
              },
            ]}
          />
          </div>
        );
      };