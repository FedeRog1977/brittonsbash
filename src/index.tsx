import './components/reference/styles/_global.scss';
import './components/reference/styles/_fonts.scss';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { reportWebVitals } from './utils';
import {
  Academia,
  BrittonsFoodRC,
  Conquest,
  Employment,
  Error,
  GentlemenWhoCafe,
  GraphicDesign,
  Home,
  InstantGram,
  Library,
  MiamiVice,
  Sport,
  ThinkFlow,
  Weather,
} from './app';

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
        <Route path="gentlemen-who-cafe" element={<GentlemenWhoCafe />} />
        <Route path="think-flow" element={<ThinkFlow />} />
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

reportWebVitals();
