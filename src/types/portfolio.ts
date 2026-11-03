interface Presentation {
    name: string;
    title: string;
    needJob: string
    description: string;
    links: { github: string ; linkedin: string;  cv: string  }; // URLs to the presentation
}


type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Other' | 'Tools';
interface Skill {
  name: string;
  category: SkillCategory; 
  icon: string; // URL or path to the skill icon
}

interface Project {
  title: string;
  id: string; 
  description: string;
  detailedDescription: string; // Detailed description of the project
  image: string; // URL or path to the project image
  links: { website: string | null; github: string | null }; // URLs to the project
  skills: string[]; // Skills used in the project
}

export type { Skill, Project, SkillCategory, Presentation };