/**
 * The photography gallery. To add a photo:
 *
 *   1. ./scripts/add-photos.sh <path-to-original> <slug>
 *      (resizes to the two sizes below and strips EXIF, including GPS)
 *   2. Append an entry here pointing at the new slug.
 *
 * The gallery reveals photos in pages and filters by category, so the list can
 * grow without any change to the page. Adding a new PhotoCategory automatically
 * adds a filter button; categories with no photos are not shown.
 */
export type PhotoCategory = 'Portraits' | 'Events' | 'Nature' | 'Still Life';

export interface Photo {
  id: string;
  title: string;
  caption: string;
  category: PhotoCategory;
  src: string;
  thumb: string;
  alt: string;
}

export const photoCategories: PhotoCategory[] = [
  'Portraits',
  'Events',
  'Nature',
  'Still Life',
];

export const photos: Photo[] = [
  {
    id: 'orchard',
    title: 'Orchard',
    caption:
      'Late summer at the apple orchard, backlit by the afternoon sun with the wind doing the styling.',
    category: 'Portraits',
    src: '/assets/photography/orchard.jpg',
    thumb: '/assets/photography/orchard-thumb.jpg',
    alt: 'Portrait of a woman holding a half-eaten apple in an orchard, hair caught by the wind',
  },
  {
    id: 'match-night',
    title: 'Match Night',
    caption:
      'A street celebration after the final whistle, shot on available light so the night stays the color it actually was.',
    category: 'Events',
    src: '/assets/photography/match-night.jpg',
    thumb: '/assets/photography/match-night-thumb.jpg',
    alt: 'Two fans in soccer jerseys celebrating on a city street at night',
  },
  {
    id: 'owl-eyes',
    title: 'Owl Eyes',
    caption:
      'A blue morpho at rest. Close focus on the underwing eyespots, everything else allowed to fall away.',
    category: 'Nature',
    src: '/assets/photography/owl-eyes.jpg',
    thumb: '/assets/photography/owl-eyes-thumb.jpg',
    alt: 'Macro photograph of a blue morpho butterfly showing the eyespots on its underwing',
  },
  {
    id: 'neon-portrait',
    title: 'Neon Portrait',
    caption:
      'A portrait in a dim room, wide open and high ISO, keeping the bar lights behind him as color rather than clutter.',
    category: 'Portraits',
    src: '/assets/photography/neon-portrait.jpg',
    thumb: '/assets/photography/neon-portrait-thumb.jpg',
    alt: 'Portrait of a bearded man in an orange cap against a dark room lit with purple light',
  },
  {
    id: 'sea-lion',
    title: 'Sea Lion',
    caption:
      'A sea lion turning toward the light on wet sand, framed from a distance so nothing about the moment changed.',
    category: 'Nature',
    src: '/assets/photography/sea-lion.jpg',
    thumb: '/assets/photography/sea-lion-thumb.jpg',
    alt: 'A sea lion resting on damp sand, head turned upward toward the light',
  },
  {
    id: 'old-walls',
    title: 'Old Walls',
    caption:
      'Floodlit stone at night, exposed for the wall so the figure in front of it reads as a silhouette.',
    category: 'Portraits',
    src: '/assets/photography/old-walls.jpg',
    thumb: '/assets/photography/old-walls-thumb.jpg',
    alt: 'Silhouette of a person walking past a floodlit stone wall at night',
  },
  {
    id: 'screen-on-the-lawn',
    title: 'Screen on the Lawn',
    caption:
      'An outdoor movie night from the back of the crowd, handheld in near darkness to keep the scale of the audience.',
    category: 'Events',
    src: '/assets/photography/screen-on-the-lawn.jpg',
    thumb: '/assets/photography/screen-on-the-lawn-thumb.jpg',
    alt: 'A crowd seated on the grass at night watching a large outdoor screen',
  },
  {
    id: 'sword-drawn',
    title: 'Sword Drawn',
    caption:
      'A hand-painted figure in window light, shot wide open so the plane of focus lands on the eyes and the blade.',
    category: 'Still Life',
    src: '/assets/photography/sword-drawn.jpg',
    thumb: '/assets/photography/sword-drawn-thumb.jpg',
    alt: 'Macro photograph of a hand-painted figurine in blue armor with a red cape, drawing a sword',
  },
];
