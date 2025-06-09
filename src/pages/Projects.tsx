import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Heading as="h1" size="xl" textAlign="center" mb={12}>
          My Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects; 