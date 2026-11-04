import { Route, Routes } from 'react-router'
//import Classic
import AccueilClassic from './themes/classic/pages/accueil'
import Project from './themes/classic/pages/project'
import Classic404 from './themes/classic/pages/404'
//import Persona
import AccueilPersona from './themes/persona/pages/accueil'
import Persona404 from './themes/persona/pages/404'

function App() {
    return (
        <Routes>
            {/* // Routes classics */}
            <Route path="/" element={<AccueilClassic />} />
            <Route path="/project/:id" element={<Project />} />
            {/* // Routes persona */}
            <Route path="/persona" element={<AccueilPersona />} />
            {/* 404 Not Found */}
            <Route path="/persona/*" element={<Persona404 />} />
            <Route path="*" element={<Classic404 />} />
        </Routes>
    )
}

export default App
