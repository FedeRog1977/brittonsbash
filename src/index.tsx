import './components/reference/styles/_global.scss';
import './components/reference/styles/_fonts.scss';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { reportWebVitals } from './utils';
import { useRegions, useSport } from './legacy-api';
import {
  Academia,
  Allroad,
  BrittonsFoodRC,
  Conquest,
  Employment,
  Error,
  FoundingFathers,
  GentlemenWhoCafe,
  GraphicDesign,
  Home,
  InstantGram,
  Library,
  Media,
  MiamiVice,
  Ricing,
  Sport,
  ThinkFlow,
  Weather,
} from './application';

// TODO: replace all of these with their according
// services and implementations
const TriggerSession = () => {
  useRegions();
  useSport();
};

TriggerSession();
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
      <Route path="*" element={<Error />} />
    </Routes>
  </HashRouter>
);
