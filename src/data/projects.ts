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
    title: 'Link Snip',
    description: 'A full-featured URL shortener built with Ruby on Rails. Base62 short codes, click analytics with charts and breakdowns, UTM campaign tracking, custom QR codes, editable destinations, and freemium Pro plans (custom domains, REST API, geography, heatmaps) billed through Stripe.',
    image: '/assets/linksnip.png',
    tags: ['Ruby on Rails', 'Stripe', 'Analytics', 'URL Shortener'],
    githubUrl: 'https://github.com/CydVilla/link-snip',
    liveUrl: 'https://linksnip-1fe294508f86.herokuapp.com/',
  },
  {
    id: '3',
    title: 'TrendCart',
    description: 'A Bluesky bot and web app that finds trending posts with real product intent, then replies with a tagged Amazon search link under either manual approval or confidence-gated autonomy. Next.js operator dashboard, Node worker pipeline, and an LLM evaluation loop, all built to be conservative and never spammy.',
    image: '/assets/project.jpg',
    tags: ['TypeScript', 'Next.js', 'Bluesky API', 'LLM'],
    githubUrl: 'https://github.com/CydVilla/trend-cart',
  },
  {
    id: '4',
    title: 'Slop Hero',
    description: 'A Clone Hero-style, tap-only rhythm game for the Tesla in-car browser, built around a 3D perspective note highway. Upload any song for an auto-generated chart, import Clone Hero songs, build charts in the in-app editor, and publish them to a shared community catalog.',
    image: '/assets/project.jpg',
    tags: ['TypeScript', 'Web Audio API', 'Game', 'Tesla'],
    githubUrl: 'https://github.com/CydVilla/slop-hero',
    liveUrl: 'https://slop-hero-silk.vercel.app',
  },
  {
    id: '5',
    title: 'StellaFrame',
    description: 'Embeddable website widgets for Google reviews, Instagram feeds, YouTube galleries, FAQ accordions, WhatsApp buttons and countdown timers, all added to any site with two lines of HTML. A Preact + Shadow DOM widget (~20 KB gzipped), Express API, and React dashboard builder, with a free tier and $5/month Pro.',
    image: '/assets/project.jpg',
    tags: ['TypeScript', 'Preact', 'Express', 'SaaS'],
    githubUrl: 'https://github.com/CydVilla/stellaframe',
    liveUrl: 'https://stellaframe.com',
  },
  {
    id: '6',
    title: 'Peckish',
    description: 'An AI ordering agent for DoorDash built on Claude and DoorDash\'s official dd-cli. It searches restaurants, compares real totals with fees included, and builds the cart. You approve every order. One tool layer with three surfaces: terminal chat, a local web app, and an MCP server.',
    image: '/assets/project.jpg',
    tags: ['TypeScript', 'Claude', 'MCP', 'AI Agent'],
    githubUrl: 'https://github.com/CydVilla/peckish',
  },
];
