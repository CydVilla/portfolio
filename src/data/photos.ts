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
 *
 * Order matters: the grid renders this list top to bottom and shows the first
 * page before the "Show More" button, so the categories are interleaved here to
 * keep the opening screen varied.
 */
export type PhotoCategory = 'Portraits' | 'Events' | 'Animals' | 'Still Life';

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
  'Animals',
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
    category: 'Animals',
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
    id: 'feeding-time',
    title: 'Feeding Time',
    caption:
      'A giraffe leaning over the rail for a handful of lettuce, timed for the moment the tongue committed.',
    category: 'Animals',
    src: '/assets/photography/feeding-time.jpg',
    thumb: '/assets/photography/feeding-time-thumb.jpg',
    alt: 'A woman holding out lettuce to a giraffe reaching over a fence with its tongue extended',
  },
  {
    id: 'front-row-energy',
    title: 'Front Row Energy',
    caption:
      'Someone spotted the camera at the outdoor screening and decided the frame was hers.',
    category: 'Events',
    src: '/assets/photography/front-row-energy.jpg',
    thumb: '/assets/photography/front-row-energy-thumb.jpg',
    alt: 'A woman pulling a playful face and throwing a hand up in front of a nighttime outdoor movie crowd',
  },
  {
    id: 'sea-lion',
    title: 'Sea Lion',
    caption:
      'A sea lion turning toward the light on wet sand, framed from a distance so nothing about the moment changed.',
    category: 'Animals',
    src: '/assets/photography/sea-lion.jpg',
    thumb: '/assets/photography/sea-lion-thumb.jpg',
    alt: 'A sea lion resting on damp sand, head turned upward toward the light',
  },
  {
    id: 'house-rules',
    title: 'House Rules',
    caption:
      'A poolside card game in low afternoon sun, caught in the pause between hands.',
    category: 'Portraits',
    src: '/assets/photography/house-rules.jpg',
    thumb: '/assets/photography/house-rules-thumb.jpg',
    alt: 'A woman in sunglasses holding playing cards and bills at a poolside patio table',
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
    id: 'all-ears',
    title: 'All Ears',
    caption:
      'A beagle mid-greeting on a bright morning walk, shot down at his level so the ears lead the frame.',
    category: 'Animals',
    src: '/assets/photography/all-ears.jpg',
    thumb: '/assets/photography/all-ears-thumb.jpg',
    alt: 'A beagle in a bandana looking up at the camera with its tongue out on sunlit pavement',
  },
  {
    id: 'half-a-smile',
    title: 'Half a Smile',
    caption:
      'A candid in a crowded room, shot wide open so the crowd behind her softens into color and shape.',
    category: 'Portraits',
    src: '/assets/photography/half-a-smile.jpg',
    thumb: '/assets/photography/half-a-smile-thumb.jpg',
    alt: 'Close portrait of a woman with a wry expression, hand raised near her face, in a busy dim room',
  },
  {
    id: 'number-ten',
    title: 'Number Ten',
    caption:
      'Two supporters crossing the crowd after the match, lit by nothing but the park lamps.',
    category: 'Events',
    src: '/assets/photography/number-ten.jpg',
    thumb: '/assets/photography/number-ten-thumb.jpg',
    alt: 'Two young men in a nighttime park crowd, one wearing a white number ten soccer jersey',
  },
  {
    id: 'street-side',
    title: 'Street Side',
    caption:
      'A pause in the middle of a street celebration, with the night carrying on behind her.',
    category: 'Events',
    src: '/assets/photography/street-side.jpg',
    thumb: '/assets/photography/street-side-thumb.jpg',
    alt: 'A woman standing on a city street at night, smiling, with a celebrating crowd behind her',
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
];
