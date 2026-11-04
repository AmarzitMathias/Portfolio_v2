import { Link } from 'react-router'
import { presentation, skills, projects } from '../../../data'
function AccueilClassic() {
    return (
        <>
            <title>Accueil</title>
            <div>
                <h1>{presentation.name}</h1>
                <h2>{presentation.title}</h2>
                <p>{presentation.description}</p>
                <div>
                    <a href={presentation.links.github}>GitHub</a>
                    <a href={presentation.links.linkedin}>LinkedIn</a>
                    <a href={presentation.links.cv}>CV</a>
                </div>
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            <img src={skill.icon} alt={skill.name} />
                            {skill.name} - {skill.category}
                        </li>
                    ))}
                </ul>
                <h3>Projects</h3>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <h4>{project.title}</h4>
                            <Link to={`/project/${project.id}`}>Voir détails du projet</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default AccueilClassic
