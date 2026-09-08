import { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera, FaLeaf, FaUserFriends } from 'react-icons/fa';
import usePageMeta from '../hooks/usePageMeta';
import PhotoGrid from '../components/PhotoGrid';
import PhotoLightbox from '../components/PhotoLightbox';
import { photoCategories, photos, type PhotoCategory } from '../data/photos';

const MotionBox = motion(Box);

const services = [
  {
    name: 'Portraits & Headshots',
    icon: FaUserFriends,
    detail:
      'Natural light sessions for individuals, couples and professional headshots, on location or at home.',
  },
  {
    name: 'Events',
    icon: FaCamera,
    detail:
      'Unobtrusive documentary coverage of gatherings, parties and nights out, including low light venues.',
  },
  {
    name: 'Nature & Detail',
    icon: FaLeaf,
    detail:
      'Close focus work on wildlife, plants and small objects, useful for product listings and prints alike.',
  },
];

type Filter = 'All' | PhotoCategory;

/** How many photos to render before the "Show More" button appears. */
const PAGE_SIZE = 9;

const Photography = () => {
  usePageMeta(
    'Cyd Villavicencio | Photography',
    'Photography by Cyd Villavicencio: portraits, event coverage, and close focus work. Sessions and prints can be booked directly.'
  );
  const [filter, setFilter] = useState<Filter>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const heroBg = useColorModeValue('white', 'gray.800');
  const galleryBg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const filteredPhotos = useMemo(
    () => (filter === 'All' ? photos : photos.filter((photo) => photo.category === filter)),
    [filter],
  );

  // The rendered grid is a prefix of filteredPhotos, so grid indexes and
  // lightbox indexes line up and the lightbox can page through the whole filter.
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = filteredPhotos.length > visiblePhotos.length;

  const countFor = (option: Filter) =>
    option === 'All'
      ? photos.length
      : photos.filter((photo) => photo.category === option).length;

  const handleFilter = (next: Filter) => {
    setActiveIndex(null);
    setVisibleCount(PAGE_SIZE);
    setFilter(next);
  };

  return (
    <Box>
      {/* Intro Section */}
      <Box as="section" bg={heroBg} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                as="h1"
                size="2xl"
                bgGradient="linear(to-r, brand.500, brand.700)"
                bgClip="text"
                mb={4}
              >
                Photography
              </Heading>
              <Text fontSize="xl" color={textColor} maxW="2xl">
                Alongside the code, I shoot. What started as a way to get away from the
                screen turned into a side venture: portraits, events, and the small details
                most people walk past. Everything here was shot on a Canon EOS M6 Mark II.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button as={RouterLink} to="/contact" size="lg" colorScheme="brand">
                Book a Shoot
              </Button>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box as="section" py={20} bg={galleryBg}>
        <Container maxW="container.xl">
          <VStack spacing={10}>
            <Heading as="h2" size="xl" textAlign="center">
              Selected Work
            </Heading>

            <HStack spacing={3} flexWrap="wrap" justify="center">
              {(['All', ...photoCategories] as Filter[])
                .filter((option) => countFor(option) > 0)
                .map((option) => (
                  <Button
                    key={option}
                    size="sm"
                    variant={filter === option ? 'solid' : 'outline'}
                    colorScheme="brand"
                    onClick={() => handleFilter(option)}
                    aria-pressed={filter === option}
                    mb={2}
                  >
                    {option} ({countFor(option)})
                  </Button>
                ))}
            </HStack>

            <PhotoGrid photos={visiblePhotos} onSelect={setActiveIndex} />

            {hasMore && (
              <Button
                size="lg"
                variant="outline"
                colorScheme="brand"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                Show More ({filteredPhotos.length - visiblePhotos.length} left)
              </Button>
            )}

            <VStack spacing={1}>
              <Text fontSize="sm" color={textColor}>
                Select any photo to view it larger. Use the arrow keys to move through the set.
              </Text>
              <Text fontSize="sm" color={textColor}>
                Prints and sessions from this gallery can be booked directly with me.
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="xl">
                What I Shoot
              </Heading>
              <Text color={textColor} maxW="2xl">
                Sessions are booked directly with me, and every set comes back edited and
                delivered in full resolution.
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
              {services.map((service) => (
                <MotionBox
                  key={service.name}
                  p={8}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                  whileHover={{ y: -10, scale: 1.03, boxShadow: '0 8px 32px rgba(14,165,233,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Icon as={service.icon} w={10} h={10} color="brand.500" mb={4} />
                  <Heading as="h3" size="md" mb={3}>
                    {service.name}
                  </Heading>
                  <Text color={textColor}>{service.detail}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
            <Button as={RouterLink} to="/contact" size="lg" variant="outline" colorScheme="brand">
              Get in Touch
            </Button>
          </VStack>
        </Container>
      </Box>

      <PhotoLightbox
        photos={filteredPhotos}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </Box>
  );
};

export default Photography;
