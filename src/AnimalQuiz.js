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

export default function AnimalLady(){
    return(
        <div className='quiz' align="center">
        <Link to="/alexandersucks">Return to quizzes</Link>
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
                    question: "What is a scrumble?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "A German breakfast dish with bleu cheese and eggs.",
                        resultID: 0,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "When a cat wriggles all over you with love.",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "A type of slap fight where you don't try to actually hurt eachother.",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "A race up a mountain.",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                    ],
                  },
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
                    question: "When can your partner bring home any wildlife?",
                    backgroundColor: "#006E90",
                    answers: [
                      {
                        answer: "Whenever they find something cute",
                        resultID: 0,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "After their poaching trip",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "When they're a certified wildlife rehabilitator (:",
                        resultID: 2,
                        backgroundColor: '#ADCAD6'
                      },
                      {
                        answer: "When they accidentally run it over",
                        resultID: 1,
                        backgroundColor: '#ADCAD6'
                      }
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
                        resultID: 2
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
                title: "Part time bird watcher",
                description: "You've prolly spent some time out in nature, but not much. Maybe brush up on your Royal Pizza calendar animals and spend a bit more time outside.",
                resultID: 1,
              },
              {
                title: "Weenie Hut Junior",
                description: "Honestly, have you even ever stepped outside? You might need some boyscouts, or like.. a trail run or something..",
                resultID: 0,
              },
              {
                title: "Wildlife Rehabilitator",
                description: "Holy cow, you're basically on par with someone who is certified to rehab wildlife! Absolutely amazing. I hope you bring home all the abandoned babies and wounded soldiers. Excellent job knowing so much about wildlife!.",
                resultID: 2,
              },
            ]}
          />
          </div>
        );
      };