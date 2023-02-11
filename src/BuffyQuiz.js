import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import { Link } from "react-router-dom";
import "react-buzzfeed-quiz/lib/styles.css";
import Hands1 from './img/hands1.jpg'
import Hands2 from './img/hands2.jpg'
import Hands3 from './img/hands3.jpg'
import Hands4 from './img/hands4.jpg'
import Dall from './img/dall.jpg'
import ProfPic from './img/ProfilePhoto.jpg'
import Chickadee from './img/chickadee.jpg';
import Junco from './img/junco.webp';
import Sparrow from './img/sparrow.webp';
import Titmouse from './img/titmouse.webp';

export default function BuffyQuiz(){
    return(
        <div className='quiz' align="center">
        <Link to="/alexandersucks">Return to quizzes</Link>
            <BuzzFeedQuiz
            title={"Everyone has a Buffy the Vampire Slayer character that matches their personality, which one is yours?"}
            description={"In every generation there is a chosen one...to take this quiz, and right now that's you!"}
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
                    question: "Choose a D&D class",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Rogue",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Barbarian",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Wizard",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                    ],
                  },
                  {
                    question: "Which do you like best?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Vampire",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Werewolf",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Overalls",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Being a basic bitch",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      },
                    ],
                  },
                  {
                    question: "How many episodes does it take you to crochet a blanket?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "10",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "15, but you half pay attention",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "20",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "None, because you refuse to watch.",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      }
                    ],
                  },
                  {
                    question: "Choose a nickname",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Sasha",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Xander",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Scudder",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "Cock Donut",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      }
                    ],
                  },
                  {
                    question: "What's your favorite season?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Winter",
                        resultID: 2,
                      },
                      {
                        answer: "Spring",
                        resultID: 1,
                        revealResponse: {
                            title: "If you don't choose spring, you are fibbing.",
                         },
                      },
                      {
                        answer: "Summer",
                        resultID: 3,
                      },
                      {
                        answer: "Fall",
                        resultID: 3,
                      },
                    ],
                  },
                  {
                    question: "Where would you like to spend Friday night?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "A nightclub",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "A coffee shop",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "A bar",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "A 3-in-1 club/coffee/bar thing",
                        resultID: 3,
                        backgroundColor: '#ADCAD6'
                      }
                    ],
                  },
            ]}
            results={[
              {
                title: "Willow",
                description: "You've prolly spent some time out in nature, but not much. Maybe brush up on your Royal Pizza calendar animals and spend a bit more time outside.",
                resultID: 1,
              },
              {
                title: "Xander",
                description: "Honestly, have you even ever stepped outside? You might need some boyscouts, or like.. a trail run or something..",
                resultID: 2,
              },
              {
                title: "Buffy",
                description: "Holy cow, you're basically on par with someone who is certified to rehab wildlife! Absolutely amazing. I hope you bring home all the abandoned babies and wounded soldiers. Excellent job knowing so much about wildlife!",
                resultID: 3,
              },
            ]}
          />
          </div>
        );
      };