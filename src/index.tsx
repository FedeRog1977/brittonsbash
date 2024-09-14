import './components/bash-blocks/reference/styles/_global.scss';
import './components/bash-blocks/reference/styles/_fonts.scss';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  Academia,
  ErrorPage,
  Home,
  Employment,
  Library,
  InstantGram,
  Sport,
  Allroad,
  BrittonsFoodRC,
  FoundingFathers,
  Media,
  MiamiVice,
  Ricing,
  ThinkFlow,
  GentlemenWhoCafe,
  GraphicDesign,
  Weather,
  Conquest,
} from './components';
import { reportWebVitals } from './utils/react/report-web-vitals.js';
import { useEvents, useHills, useLinks, useRegions, useSport } from './api/index.js';

const triggerSession = () => {
  useEvents();
  useHills();
  // useLinks();
  useRegions();
  useSport();
};

triggerSession();
reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academia" element={<Academia />} />
      <Route path="/employment" element={<Employment />} />
      <Route path="/library" element={<Library />} />
      <Route path="/blog">
        <Route path="instant-gram" element={<InstantGram />} />
        <Route path="sport" element={<Sport />} />
        <Route path="brittons-foodrc" element={<BrittonsFoodRC />} />
        <Route path="allroad" element={<Allroad />} />
        <Route path="gentlemen-who-cafe" element={<GentlemenWhoCafe />} />
        <Route path="ricing" element={<Ricing />} />
        <Route path="think-flow" element={<ThinkFlow />} />
        <Route path="founding-fathers" element={<FoundingFathers />} />
        <Route path="media" element={<Media />} />
        <Route path="miami-vice" element={<MiamiVice />} />
        <Route path="graphic-design" element={<GraphicDesign />} />
      </Route>
      <Route path="/utilities">
        <Route path="weather" element={<Weather />} />
        <Route path="conquest" element={<Conquest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
);
