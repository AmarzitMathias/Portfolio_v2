import { useParams } from 'react-router'
import { projects } from '../../../data'
import Classic404 from './404'
import { getProjectById } from '../../../data'

function Project() {
    const { id } = useParams<{ id: string }>()

    const project: (typeof projects)[0] | undefined = getProjectById(id as string)
    if (!project) {
        return <Classic404 />
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.detailedDescription}</p>
            <img src={project.image} alt={project.title} />
            <p>Technologies: {project.skills.join(', ')}</p>

            {project.links.website && (
                <a href={`${project.links.website}`} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            )}
            {project.links.github && (
                <a href={`${project.links.github}`} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
            )}
        </div>
    )
}

export default Project
