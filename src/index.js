import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Projects from './Projects'
import Contact from './Contact'
import About from './AboutMe';
import AlexanderSucks from './Alexander';
import DessertQuiz from './DessertQuiz';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="alexandersucks" element={<AlexanderSucks />} />
      <Route path="dessertquiz" element={<DessertQuiz />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
