import { Box, Button, Container, Heading, SimpleGrid, Stack, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const MotionBox = motion(Box);

const services = [
  {
    title: 'Business Websites',
    description:
      'Responsive, professional websites for small businesses that need a trustworthy online presence and clear calls to action.',
  },
  {
    title: 'Portfolio Sites',
    description:
      'Clean personal websites for creatives, students, freelancers, and professionals who want to showcase their work.',
  },
  {
    title: 'Custom Web Solutions',
    description:
      'Modern web apps, landing pages, redesigns, and UI improvements built around your goals and your audience.',
  },
];

const Home = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const sectionBgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        as="section"
        bg={bgColor}
        py={20}
        position="relative"
        overflow="hidden"
      >
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
                Hi, I'm Cyd Villavicencio
              </Heading>
              <Text fontSize="xl" color={textColor} maxW="2xl">
                I build responsive websites and web solutions for businesses, portfolios, and
                brands that need a polished online presence. My work blends modern web
                technology with intuitive, user-friendly design.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
                <Button
                  as={RouterLink}
                  to="/projects"
                  size="lg"
                  colorScheme="brand"
                >
                  View My Work
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                >
                  Start a Project
                </Button>
              </Stack>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Web Solutions Section */}
      <Box as="section" py={20} bg={sectionBgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" maxW="3xl">
              <Heading as="h2" size="xl">
                Web Solutions for Your Next Step
              </Heading>
              <Text fontSize="lg" color={textColor}>
                Whether you need a business website, a portfolio, or a custom landing page,
                I can help turn your ideas into a fast, mobile-friendly web experience.
              </Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              {services.map((service) => (
                <Box
                  key={service.title}
                  bg={cardBgColor}
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="lg"
                  boxShadow="md"
                  p={8}
                >
                  <Heading as="h3" size="md" mb={4}>
                    {service.title}
                  </Heading>
                  <Text color={textColor}>{service.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              colorScheme="brand"
              alignSelf="center"
            >
              Let's Build Something
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box as="section" py={20} bg={bgColor}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center">
              Featured Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </SimpleGrid>
            <Button
              as={RouterLink}
              to="/projects"
              size="lg"
              colorScheme="brand"
              variant="outline"
              mt={4}
              alignSelf="center"
            >
              See All Projects
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 