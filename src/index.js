import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';

import AlexanderSucks from './Alexander';
import VacationQuiz from './VacaQuiz';
import DessertQuiz from './DessertQuiz';
import ZodiacQuiz from './SignQuiz';
import Meow from './Meow';
import AnimalLady from './AnimalQuiz';
import BuffyQuiz from './BuffyQuiz';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AlexanderSucks />} />
      <Route path="alexandersucks" element={<AlexanderSucks />} />
      <Route path="dessertquiz" element={<DessertQuiz/>} />
      <Route path="vacationquiz" element={<VacationQuiz />} />
      <Route path="zodiacquiz" element={<ZodiacQuiz/>}/>
      <Route path="meow" element={<Meow/>}/>
      <Route path="ididit" element={<AnimalLady/>}/>
      <Route path="whyyyyy" element={<BuffyQuiz/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
