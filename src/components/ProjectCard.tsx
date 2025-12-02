import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Tag,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
    >
      <Image
        src={image}
        alt={title}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <Stack p={6} spacing={4}>
        <Heading size="md">{title}</Heading>
        <Text color="gray.600">{description}</Text>
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          {tags.map((tag) => (
            <Tag key={tag} size="sm" colorScheme="brand">
              {tag}
            </Tag>
          ))}
        </Stack>
        <Stack direction="row" spacing={4}>
          <Link href={githubUrl} isExternal color="brand.500">
            GitHub
          </Link>
          {liveUrl && (
            <Link href={liveUrl} isExternal color="brand.500">
              Live Demo
            </Link>
          )}
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export default ProjectCard; 