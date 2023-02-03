import React from 'react'
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import Fav1 from './img/Fav1.jpg'
import Fav2 from './img/fav2.jpg'
import Fav3 from './img/fav3.jpg'
import Fav4 from './img/fav4.jpg'

import Africa from './img/africa.jpg';
import SAmerica from './img/samerica.png';
import Italy from './img/italy.jpg';

import Safari from './img/safari.jpg'
import France from './img/france.jpg'
import Vermont from './img/vermont.jpg'
import ProfPic from './img/ProfilePhoto.jpg'

export default function ZodiacQuiz(){
    return(
        <div className='zodiacquiz'>
            <BuzzFeedQuiz
            title={"I'm not saying I'm psychic, but I only need 9 questions to correctly guess your zodiac sign"}
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
                  },
                  {
                    answer: "Africa's cousin?",
                    resultID: 2,
                    backgroundImageSrc: Africa,
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
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Wine",
                    resultID: 1,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Scotch",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
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
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Beef stew",
                    resultID: 1,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Tikka Masala",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
                  },
                ],
              },
              {
                question: "How do you like your coffee?",
                backgroundColor: "#4E937A",
                fontColor:'#000', 
                answers: [
                  {
                    answer: "Room temp",
                    resultID: 0,
                    backgroundColor: '#B8CDF8'
                  },
                  {
                    answer: "Actually cold.",
                    resultID: 1,
                    backgroundColor: '#B8CDF8',
                    revealResponse: {
                      title: "I hate this, thank you. Please use your coffee warmer thing.",
                   },
                  },
                  {
                    answer: "Hot and delicious",
                    resultID: 2,
                    backgroundColor: '#B8CDF8'
                  },
                ],
              },
            ]}
            results={[
              {
                title: "Scorpio.",
                description: "I've recently learned that being with me is exhausting for you. So maybe go to the mountains by yourself to relax, count Subies, take a tubby, and eat good pizza.",
                resultImageSrc: Vermont,
                resultID: 1,
              },
              {
                title: "Uhh, definitely Scorpio.",
                description: "Time to go eat a lot of bread, learn a love language, and eat lot of eggs.",
                resultImageSrc: France,
                resultID: 0,
              },
              {
                title: "Could you try not being a Scorpio for two seconds?!",
                description: "You look like you need a long drive to no where and to shout 'subaru!' every time you see one. Good luck, sometimes they're plentiful and sometimes they're rare. (Also, I made this photo myself - you're welcome.)",
                resultImageSrc: Safari,
                resultID: 2,
              },
            ]}
          />
          </div>
        );
      };