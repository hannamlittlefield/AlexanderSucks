import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import { Link } from "react-router-dom";
import "react-buzzfeed-quiz/lib/styles.css";
import Fav1 from './img/Fav1.jpg'
import Fav2 from './img/fav2.jpg'
import Fav3 from './img/fav3.jpg'
import Fav4 from './img/fav4.jpg'

import Africa from './img/africa.jpg';
import SAmerica from './img/samerica.png';
import Italy from './img/italy.jpg';

import Walk from './img/walk.jpg';
import Lump from './img/lump.JPG';
import Wedding from './img/wedding.jpg';
import Dancing from './img/dancing.jpg';

import Edmund from './img/edmund.jpg'
import Scorpio from './img/scorpio.webp'
import ScorpioMeme from './img/scorpiomeme.jpg'
import ProfPic from './img/ProfilePhoto.jpg'

import Pizza1 from './img/pizza1.jpg'
import Pizza2 from './img/pizza2.jpg'
import Pizza3 from './img/pizza3.jpg'
import Pizza4 from './img/pizza4.jpg'

export default function ZodiacQuiz(){
    return(
        <div className='quiz' align="center">
        <Link to="/alexandersucks">Return to quizzes</Link>
            <BuzzFeedQuiz
            title={"I'm not saying I'm psychic, but I only need 8 questions to correctly guess your zodiac sign"}
            description={"There will be no Scorpio slander allowed in the comments, thank you very much. ♏️"}
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
                question: "Which one is Africa?",
                backgroundColor: "#4E937A",
                fontColor: "#000",
                questionRelativeToImage: "overlap",
                answerArrangement: "tile",
                answers: [
                  {
                    answer: "Maybe Africa? ",
                    resultID: 0,
                    backgroundImageSrc: Italy,
                  },
                  {
                    answer: "Also potentially Africa",
                    resultID: 1,
                    backgroundImageSrc: SAmerica,
                    revealResponse: {
                      title: "This is hanna's Africa.",
                   },
                  },
                  {
                    answer: "Africa's cousin?",
                    resultID: 2,
                    backgroundImageSrc: Africa,
                    revealResponse: {
                      title: "Okay, honestly. I went through this quiz to QA it and I had to Google Africa again because I couldn't tell if this was Africa, or if South America was Africa. (I once again chose South America first. I will learn by the end of coding this.)",
                   },
                  },
                ],
              },
              {
                question: "How do you break up with people?",
                backgroundColor: "#4E937A",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "Ghost them.",
                    resultID: 0,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Plan a divorce day.",
                    resultID: 1,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "I don't, I make them do it.",
                    resultID: 2,
                    backgroundColor: '#4F759B'
                  },
                ],
              },
              {
                question: "Pick an afternoon activity:",
                backgroundColor: "#84D2C5",
                questionRelativeToImage: "overlap",
                answerArrangement: "tile",
                answers: [
                  {
                    answer: "Going for a walk",
                    resultID: 0,
                    backgroundImageSrc: Walk,
                  },
                  {
                    answer: "Serving a 150 person wedding.",
                    resultID: 1,
                    backgroundImageSrc: Wedding,
                  },
                  {
                    answer: "Lump.",
                    resultID: 2,
                    backgroundImageSrc: Lump,
                  },
                  {
                    answer: "Dancing.",
                    resultID: 2,
                    backgroundImageSrc: Dancing,
                  },
                ],
              },      
            {
                question: "What do you prefer?",
                backgroundColor: "#4E937A",
                fontColor: "#000",
                answers: [
                  {
                    answer: "Beer",
                    resultID: 0,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Wine",
                    resultID: 1,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Scotch",
                    resultID: 2,
                    backgroundColor: '#4F759B'
                  },
                ],
              },
              {
                question: "Choose your favorite photo.",
                questionRelativeToImage: "overlap",
                backgroundColor: "#4E937A",
                answerArrangement: "tile",
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Fav1,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Fav2,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Fav3,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Fav4,
                  },
                ],
              },
              {
                question: "Choose your favorite curry!",
                backgroundColor: "#4E937A",
                fontColor: "#000",
                answers: [
                  {
                    answer: "Vindaloo",
                    resultID: 0,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Beef stew",
                    resultID: 1,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Tikka Masala",
                    resultID: 2,
                    backgroundColor: '#4F759B'
                  },
                ],
              },
              {
                question: "How do you like your coffee?",
                backgroundColor: "#4E937A",
                fontColor:'#fff', 
                answers: [
                  {
                    answer: "Room temp.",
                    resultID: 0,
                    backgroundColor: '#4F759B'
                  },
                  {
                    answer: "Actually cold.",
                    resultID: 1,
                    backgroundColor: '#4F759B',
                    revealResponse: {
                      title: "I hate this, thank you. Please use your coffee warmer thing.",
                   },
                  },
                  {
                    answer: "Hot, like how it's supposed to be.",
                    resultID: 2,
                    backgroundColor: '#4F759B'
                  },
                ],
              },
              {
                question: "Which pizza would you like?",
                questionRelativeToImage: "overlap",
                backgroundColor: "#4E937A",
                answerArrangement: "tile",
                answers: [
                  {
                    resultID: 0,
                    backgroundImageSrc: Pizza1,
                  },
                  {
                    resultID: 1,
                    backgroundImageSrc: Pizza2,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Pizza3,
                  },
                  {
                    resultID: 2,
                    backgroundImageSrc: Pizza4,
                  },
                ],
              },
            ]}
            results={[
              {
                title: "Scorpio.",
                description: "Honestly I took this tag line and title from a legit Buzzfeed quiz, so I have no idea why there would be Scorpio slander? Like, do ya'll suck that much?",
                resultImageSrc: Scorpio,
                resultID: 1,
              },
              {
                title: "Uhh, definitely Scorpio.",
                description: "Okay, so I googled some memes because I had to know why the PA tagline.. This was one of the many relatable memes that came up and I suppose I can see why people hate Scorpios now.",
                resultImageSrc: ScorpioMeme,
                resultID: 2,
              },
              {
                title: "Edmund Fitzgerald",
                description: "Did I make up this sign? Maybe. But you specifically have the zodiac sign of the Edmund Fitzgerald, just because I did not feel like typing out another Scorpio. This is assuming you take these quizzes more than once and answer differently and see this result.",
                resultImageSrc: Edmund,
                resultID: 0,
              }
            ]}
          />
          <a href="/alexandersucks">Return to quizzes</a>
          </div>
        );
      };