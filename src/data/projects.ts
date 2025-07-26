export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Get Morganized',
    description: 'Professional resume writing services that help you stand out from the crowd. Get noticed by employers and land your dream job with a compelling, ATS-optimized resume.',
    image: '/assets/get-morganized.png',
    tags: ['React'],
    githubUrl: 'https://github.com/CydVilla/get-morganized',
    liveUrl: 'https://getmorganizedtoday.com/',
  },
  {
    id: '2',
    title: 'Star Wars',
    description: 'A web application that displays information about Star Wars characters and films.',
    image: '/assets/star-wars.jpg',
    tags: ['React', 'SWAPI', 'CSS'],
    githubUrl: 'https://github.com/CydVilla/Star-Wars',
    liveUrl: 'https://cydvilla.github.io/Star-Wars/',
  },
  {
    id: '3',
    title: 'PokeSearch',
    description: 'A search engine for finding and sharing programming resources.',
    image: '/assets/psearch.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/CydVilla/PokeSearch',
    liveUrl: 'https://cydvilla.github.io/PokeSearch/',
  },
]; 