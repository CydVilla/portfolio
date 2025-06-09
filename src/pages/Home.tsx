import { Box, Button, Container, Heading, Text, VStack, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const MotionBox = motion(Box);

const Home = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
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
                A passionate developer crafting beautiful and functional web experiences.
                I specialize in modern web technologies and creating intuitive user interfaces.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                as={RouterLink}
                to="/projects"
                size="lg"
                colorScheme="brand"
                mr={4}
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
                Contact Me
              </Button>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box as="section" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
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