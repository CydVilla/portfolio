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
    title: 'Smart Brain',
    description: 'A face detection application that uses the Clarifai API to detect faces in images.',
    image: '/src/assets/smart-brain.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Clarifai API'],
    githubUrl: 'https://github.com/yourusername/smart-brain',
    liveUrl: 'https://smart-brain-app.herokuapp.com',
  },
  {
    id: '2',
    title: 'Star Wars',
    description: 'A web application that displays information about Star Wars characters and films.',
    image: '/src/assets/star-wars.jpg',
    tags: ['React', 'SWAPI', 'CSS'],
    githubUrl: 'https://github.com/yourusername/star-wars',
    liveUrl: 'https://star-wars-app.netlify.app',
  },
  {
    id: '3',
    title: 'Psearch',
    description: 'A search engine for finding and sharing programming resources.',
    image: '/src/assets/psearch.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/psearch',
    liveUrl: 'https://psearch-app.herokuapp.com',
  },
]; 