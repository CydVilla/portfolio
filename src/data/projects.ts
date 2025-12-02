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
    tags: ['React', 'Custom Domain'],
    githubUrl: 'https://github.com/CydVilla/get-morganized',
    liveUrl: 'https://getmorganizedtoday.com/',
  },
  {
    id: '2',
    title: 'Play Villa',
    description: 'A retro-styled single-page React application for community game voting. Vote for what game to play on Saturday!',
    image: '/assets/pvilla.png',
    tags: ['React', 'CSS', 'API'],
    githubUrl: 'https://github.com/CydVilla/play-villa',
    liveUrl: 'https://cydvilla.github.io/play-villa/',
  },
  {
    id: '3',
    title: 'Link Snip',
    description: 'A simple URL Shortener built with Ruby on Rails, based on techniques from GoRails. This application encodes database IDs into Base62 short codes, allowing you to share shortened URLs like /v/a2 that redirect to the full link.',
    image: '/assets/linksnip.png',
    tags: ['Ruby on Rails', 'Base62', 'URL Shortener', 'Heroku'],
    githubUrl: 'https://github.com/CydVilla/link-snip',
    liveUrl: 'https://linksnip-1fe294508f86.herokuapp.com/',
  },
]; 