import Skills from './skills.json'
import Projects from './projects.json'
import PresentationData from './presentation.json'
import type { Skill, Project, Presentation } from '../types/portfolio'

export const skills = Skills as Skill[]
export const projects = Projects as Project[]
export const presentation = PresentationData as Presentation
