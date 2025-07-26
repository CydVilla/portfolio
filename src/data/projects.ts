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
    description: 'A web application that uses the Giphy API to have Star Wars characters duel each other with animated GIFs.',
    image: '/assets/star-wars.jpg',
    tags: ['React', 'SWAPI', 'CSS'],
    githubUrl: 'https://github.com/CydVilla/Star-Wars',
    liveUrl: 'https://cydvilla.github.io/Star-Wars/',
  },
  {
    id: '3',
    title: 'PokeSearch',
    description: 'PokeSearch is a web app that lets you quickly search for your favorite Pokémon. Simply type a name to view detailed stats and a cool sprite, all powered by the PokeAPI.',
    image: '/assets/psearch.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/CydVilla/PokeSearch',
    liveUrl: 'https://cydvilla.github.io/PokeSearch/',
  },
]; 