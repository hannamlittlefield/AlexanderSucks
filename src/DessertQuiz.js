import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import { Link } from "react-router-dom";
import "react-buzzfeed-quiz/lib/styles.css";
import Subaru from "./img/subaru.jpg";
import Fossils from './img/fossil.jpg'
import Nickelback from "./img/nickelback.webp";
import BogRocks from "./img/bogrocks.JPG";
import FakeRock from './img/antiquerock.webp';
import Mise1 from './img/mise1.webp';
import Mise2 from './img/mise2.webp';
import Mise3 from './img/mise3.jpg';
import Mise4 from './img/mise4.webp';
import Potato1 from './img/potato1.jpg';
import Potato2 from './img/potato2.jpg';
import Potato3 from './img/potato3.jpg';
import Potato4 from './img/potato4.jpg';
import Donut1 from './img/donut1.webp';
import Donut2 from './img/donut2.jpg';
import Donut3 from './img/donut3.jpg';
import ProfPic from './img/ProfilePhoto.jpg'

export default function DessertQuiz(){
    return(
        <div className='quiz' align="center">
        <Link to="/alexandersucks">Return to quizzes</Link>
            <BuzzFeedQuiz
            title={"What kind of dessert are you?"}
            description={"Everyone has a dessert that matches their personality - what's yours?!"}
            byline={true}
            bylineAuthor={"hanna"}
            bylineAvatarImageSrc={ProfPic}
            autoScroll={true}
            onRestart={() => alert("Are you seriously hoping to get a different result?")}
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
                question: "What is an absolute 'no' for you?",
                backgroundColor: "#84D2C5",
                answers: [
                  {
                    answer: "Well done steak",
                    resultID: 0,
                  },
                  {
                    answer: "Socks on, missionary style",
                    resultID: 1,
                  },
                  {
                    answer: "Getting your eyeball licked",
                    resultID: 2,
                  },
                ],
              },
              {
                question: "What food would you choose for your wedding?",
                backgroundColor: "#84D2C5",
                fontColor: "#000",
                answers: [
                  {
                    answer: "Taco Bell",
                    backgroundColor: "#36399a",
                    fontColor: "#ef1897",
                    resultID: 0,
                  },
                  {
                    answer: "Quahogs",
                    backgroundColor: "#999999",
                    fontColor: "#C4BDAC",
                    resultID: 1,
                  },
                  {
                    answer: "A dozen passed apps",
                    backgroundColor: "#128f8b",
                    fontColor: "#4c5270",
                    resultID: 2,
                  },
                ],
              },
              {
                question: "What do you do for fun?",
                backgroundColor: "#84D2C5",
                answers: [
                  {
                    answer: "Free climbing",
                    resultID: 0,
                  },
                  {
                    answer: "Stamp collecting",
                    resultID: 1,
                  },
                  {
                    answer: "Nothing, I am a fun sucker.",
                    resultID: 2,
                  },
                  {
                    answer: "Snake charming",
                    resultID: 2,
                  }
                ],
              },
              {
                question: "What's your favorite rock?",
                backgroundColor: "#84D2C5",
                questionRelativeToImage: "overlap",
                imageAttribution: "Question image attribution text goes here",
                answerArrangement: "tile",
                answers: [
                  {
                    answer: "Nickelback ",
                    resultID: 0,
                    backgroundImageSrc: Nickelback,
                    revealResponse: {
                        title: "Holy shit. You did not actually just pick Nickelback.. I'm divorcing you.",
                     },
                  },
                  {
                    answer: "Bog rocks",
                    resultID: 1,
                    backgroundImageSrc: BogRocks,
                  },
                  {
                    answer: "Fossils",
                    resultID: 2,
                    backgroundImageSrc: Fossils,
                  },
                  {
                    answer: "That one rock from the antique place",
                    resultID: 2,
                    backgroundImageSrc: FakeRock,
                  },
                ],
              },
              {
                question: "Choose a mise en place.",
                questionRelativeToImage: "overlap",
                backgroundColor: "#84D2C5",
                answerArrangement: "tile",
                //backgroundImageSrc: BackgroundImage,
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Mise1,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Mise2,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Mise3,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Mise4,
                  },
                ],
              },
              {
                question: "On average, how many Subarus do you see on a mountain trip?",
                questionRelativeToImage: "adjacent",
                answerArrangement: "row",
                backgroundImageSrc: Subaru,
                answers: [
                  {
                    answer: "104",
                    resultID: 0,
                  },
                  {
                    answer: "23",
                    resultID: 1,
                  },
                  {
                    answer: "69 (nice.)",
                    resultID: 2,
                  },
                ],
              },
              {
                question: "What's your love language?",
                backgroundColor: '#A571A5',
                answers: [
                    {
                        answer: "Not saying 'lol'",
                        backgroundColor: "#EBBFC4",
                        resultID: 0,
                    },
                    {
                        answer: "Giving people magic rocks",
                        backgroundColor: "#EBBFC4",
                        resultID: 0,
                    },
                    {
                        answer: "Let me know when you're home safe.",
                        backgroundColor: "#EBBFC4",
                        resultID: 1,
                    },
                    {
                        answer: "French",
                        backgroundColor: "#EBBFC4",
                        resultID: 1,
                    },
                    {
                        answer: "One of those normal ones like physical touch",
                        backgroundColor: "#EBBFC4",
                        resultID: 2,
                    },
                    {
                        answer: "Feeding people",
                        backgroundColor: "#EBBFC4",
                        resultID: 2,
                    },
                ],
            },
            {
                question: "Choose a potato dish.",
                questionRelativeToImage: "overlap",
                backgroundColor: "#84D2C5",
                answerArrangement: "tile",
                //backgroundImageSrc: BackgroundImage,
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Potato1,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Potato2,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Potato3,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Potato4,
                  },
                ],
              },
            ]}
            results={[
              {
                title: "Congratulations! You're a cock donut!",
                description: "Is anyone really surprised? Because I definitely am not.",
                resultImageSrc: Donut1,
                resultID: 1,
              },
              {
                title: "Hmm.. Looks like you're a cock donut!",
                description: "Is anyone really surprised? Because I definitely am not.",
                resultImageSrc: Donut2,
                resultID: 0,
              },
              {
                title: "Ooh. This was a close one - but you're a cock donut!",
                description: "Is anyone really surprised? Because I definitely am not.",
                resultImageSrc: Donut3,
                resultID: 2,
              },
            ]}
          />
          </div>
        );
      };