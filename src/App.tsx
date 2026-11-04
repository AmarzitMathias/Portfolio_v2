import { presentation, skills, projects } from './data/typesJson'

function App() {
    return (
        <>
            <h1>Portfolio-v2</h1>
            Presentation:
            <ul>
                {Object.entries(presentation).map(([key, value]) => (
                    <li key={key}>
                        {key}: {JSON.stringify(value)}
                    </li>
                ))}
            </ul>
            Skills:
            <ul>
                {skills.map((skill) => (
                    <li key={skill.name}>
                        {skill.name} - {skill.category}
                    </li>
                ))}
            </ul>
            Projects:
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        {project.title} - {project.description}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
