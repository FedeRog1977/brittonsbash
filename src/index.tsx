import './components/styles/app.css'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import { Header, Footer } from './components/elements'

import {
    ErrorPage,
    Home,
    Academia,
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
    BashBlocks,
} from './components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <HashRouter>
        <Header />
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
                <Route
                    path="gentlemen-who-cafe"
                    element={<GentlemenWhoCafe />}
                />
                <Route path="ricing" element={<Ricing />} />
                <Route path="think-flow" element={<ThinkFlow />} />
                <Route path="founding-fathers" element={<FoundingFathers />} />
                <Route path="media" element={<Media />} />
                <Route path="miami-vice" element={<MiamiVice />} />
                <Route path="graphic-design" element={<GraphicDesign />} />
            </Route>
            <Route path="/utils">
                <Route path="weather" element={<Weather />} />
                <Route path="conquest" element={<Conquest />} />
                <Route path="bash-blocks" element={<BashBlocks />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </HashRouter>
)

reportWebVitals()
