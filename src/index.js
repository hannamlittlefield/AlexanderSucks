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
import DessertQuiz from './DessertQuiz';
import VacationQuiz from './VacaQuiz';
import ZodiacQuiz from './SignQuiz.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/AlexanderSucks" element={<App />}>
        <Route index element={<AlexanderSucks />} />
      <Route path="alexandersucks" element={<AlexanderSucks />} />
      <Route path="dessertquiz" element={<DessertQuiz />} />
      <Route path="vacationquiz" element={<VacationQuiz />} />
      <Route path="zodiacquiz" element={<ZodiacQuiz/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
