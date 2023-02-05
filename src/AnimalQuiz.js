import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import Hands1 from './img/hands1.jpg'
import Hands2 from './img/hands2.jpg'
import Hands3 from './img/hands3.jpg'
import Hands4 from './img/hands4.jpg'
import Dall from './img/dall.jpg'
import Turkey from './img/turk.jpg'
import Peebs from './img/peebs.jpg'
import Chicken from './img/chicky.jpg'
import ProfPic from './img/ProfilePhoto.jpg'
import Chickadee from './img/chickadee.jpg';
import Junco from './img/junco.webp';
import Sparrow from './img/sparrow.webp';
import Titmouse from './img/titmouse.webp';

export default function AnimalLady(){
    return(
        <div className='quiz' align="center">
        <a href="/alexandersucks">Return to quizzes</a>
            <BuzzFeedQuiz
            title={"How well informed are you on your animal species?"}
            description={"We'll put your animal smarts to the test with this quiz!"}
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
                    question: "Which of these is the infamous cheeseburger bird?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        backgroundImageSrc: Sparrow,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Titmouse,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Chickadee,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Junco,
                        resultID: 1,
                      },
                    ],
                  },
                  {
                    question: "What fish species will eat chewed gum?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Striped bass",
                        resultID: 0,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Brook trout",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Weird, desperate Massa fish",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Pickerel",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      }
                    ],
                  },
                  {
                    question: "Which squirrel would be the best for face-hands?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        backgroundImageSrc: Hands1,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Hands2,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Hands3,
                        resultID: 1,
                      },
                      {
                        backgroundImageSrc: Hands4,
                        resultID: 1,
                      },
                    ],
                  },
                  {
                    question: "Which animal is this?",
                    questionRelativeToImage: "adjacent",
                    backgroundColor: "#006E90",
                    answerArrangement: "row",
                    backgroundImageSrc: Dall,
                    answers: [
                      {
                        answer: "Tiny alpaca",
                        resultID: 0,
                      },
                      {
                        answer: "Dall sheep",
                        resultID: 1,
                      },
                      {
                        answer: "Highland cow",
                        resultID: 2,
                      },
                      {
                        answer: "Mountain goat",
                        resultID: 2,
                        revealResponse: {
                            title: "I was really convinced it was a mtn goat.",
                         },
                      },
                    ],
                  },
                  {
                    question: "What is the highest poaching demographic?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Old white men",
                        resultID: 0,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "African war lords",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "37 year old white women",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Egg connoisseurs",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      }
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