import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Databases', icon: FaDatabase },
  { name: 'Git', icon: FaGitAlt },
];

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box as="section" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* About Me Section */}
          <Box>
            <Heading as="h1" size="xl" mb={6}>
              About Me
            </Heading>
            <HStack spacing={8} align="start" mb={6}>
              <Image
                src="/assets/profile.jpg"
                alt="Cyd Villavicencio"
                borderRadius="full"
                boxSize="200px"
                objectFit="cover"
                boxShadow="lg"
                border="4px solid"
                borderColor="brand.500"
              />
              <VStack align="start" spacing={4} flex={1}>
                <Text fontSize="lg" color={textColor}>
                  I'm a passionate full-stack developer with a strong foundation in modern web technologies.
                  I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
                  My journey in web development started with a curiosity about how things work on the internet,
                  and it has evolved into a professional career where I continuously learn and grow.
                </Text>
              </VStack>
            </HStack>
          </Box>

          {/* Skills Section */}
          <Box>
            <Heading as="h2" size="lg" mb={8}>
              Skills & Technologies
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={8}>
              {skills.map((skill) => (
                <MotionBox
                  key={skill.name}
                  p={6}
                  bg={bgColor}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                  whileHover={{ y: -10, scale: 1.07, boxShadow: '0 8px 32px rgba(14,165,233,0.15)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  cursor="pointer"
                >
                  <Icon as={skill.icon} w={10} h={10} color="brand.500" mb={4} />
                  <Text fontWeight="medium">{skill.name}</Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>

          {/* Experience Section */}
          <Box>
            <Heading as="h2" size="lg" mb={8}>
              Experience
            </Heading>
            <VStack spacing={8} align="stretch">
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Full Stack Developer
                </Heading>
                <Text color={textColor}>
                  Developed and maintained web applications using React, Node.js, and various databases.
                  Implemented responsive designs and optimized application performance.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Frontend Developer
                </Heading>
                <Text color={textColor}>
                  Created modern user interfaces using React and TypeScript.
                  Collaborated with designers to implement pixel-perfect designs.
                </Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 