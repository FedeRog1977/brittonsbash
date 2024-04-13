import './components/bash-blocks/reference/styles/_global.scss'
import './components/bash-blocks/reference/styles/_fonts.scss'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
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
} from './components'
import { Footer, Header } from './components/bash-blocks'
import { reportWebVitals } from './scripts/react'
import { useEvents, useHills, useRegions } from './api'
// import { useSport } from './components/compounds'

const triggerSession = () => {
    useEvents()
    useHills()
    useRegions()
    // useSport()
}

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
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
    </HashRouter>
)

triggerSession()
reportWebVitals()
