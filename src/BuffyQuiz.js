import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import { Link } from "react-router-dom";
import "react-buzzfeed-quiz/lib/styles.css";
import ProfPic from './img/ProfilePhoto.jpg'

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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Barbarian",
                        resultID: 3,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Wizard",
                        resultID: 1,
                        backgroundColor: '#4C6663'
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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Werewolf",
                        resultID: 2,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Overalls",
                        resultID: 1,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Being a basic bitch",
                        resultID: 3,
                        backgroundColor: '#4C6663'
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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "15, but you half pay attention",
                        resultID: 1,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "20",
                        resultID: 3,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "None, because you refuse to watch.",
                        resultID: 1,
                        backgroundColor: '#4C6663'
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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Xander",
                        resultID: 2,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Scudder",
                        resultID: 3,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Cock Donut",
                        resultID: 2,
                        backgroundColor: '#4C6663'
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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "Spring",
                        resultID: 1,
                        backgroundColor: '#4C6663',
                        revealResponse: {
                            title: "If you don't choose spring, you are fibbing.",
                            
                         },
                      },
                      {
                        answer: "Summer",
                        backgroundColor: '#4C6663',
                        resultID: 3,
                      },
                      {
                        answer: "Fall",
                        resultID: 3,
                        backgroundColor: '#4C6663'
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
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "A coffee shop",
                        resultID: 1,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "A bar",
                        resultID: 2,
                        backgroundColor: '#4C6663'
                      },
                      {
                        answer: "A 3-in-1 club/coffee/bar thing",
                        resultID: 3,
                        backgroundColor: '#4C6663'
                      }
                    ],
                  },
            ]}
            results={[
              {
                title: "Willow",
                description: "You have great style and are insanely cute.",
                resultID: 1,
              },
              {
                title: "Xander",
                description: "You have the best nickname ever.",
                resultID: 2,
              },
              {
                title: "Buffy",
                description: "You're  literally the worst character on the show and so annoying. You make a lot of dumb mistakes and are annoying, sorrryy.",
                resultID: 3,
              },
            ]}
          />
          </div>
        );
      };