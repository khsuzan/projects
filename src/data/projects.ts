import rawProjects from "./projects.json";

export interface SubSystem {
  title: string;
  description: string;
  points: string[];
}

export interface TechLayer {
  layer: string;
  techs: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "all" | "ai" | "mobile" | "fullstack" | "iot";
  isFeatured: boolean;
  icon?: string;
  techStack: string[];
  techLayers?: TechLayer[];
  challenges: string[];
  architectureHighlights: string[];
  subsystems?: SubSystem[];
  accomplishments?: string[];
  metrics?: string;
  path?: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const PROJECTS: Project[] = rawProjects as Project[];

export function getProjects(): Project[] {
  return PROJECTS;
}
