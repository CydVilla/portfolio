import {
  Box,
  Container,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { articles } from '../data/articles';

const formatDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Blog = () => {
  usePageMeta(
    'Cyd Villavicencio | Blog & Writing',
    'The writing of Cyd Villavicencio: articles, essays and musings on sports, movies, tech and building things for the web.'
  );
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const metaColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box as="section" py={20} bg={bgColor}>
      <Container maxW="container.md">
        <Heading as="h1" size="xl" textAlign="center" mb={4}>
          Blog
        </Heading>
        <Text textAlign="center" color={textColor} mb={12}>
          Musings, articles and whatever else I feel like writing about.
        </Text>
        <VStack spacing={8} align="stretch">
          {articles.map((article) => (
            <LinkBox
              key={article.slug}
              as="article"
              p={8}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              transition="all 0.2s"
              _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
            >
              <Text fontSize="sm" color={metaColor} mb={2}>
                {formatDate(article.date)} &middot; {article.readTime}
              </Text>
              <Heading as="h2" size="md" mb={3}>
                <LinkOverlay as={RouterLink} to={`/blog/${article.slug}`}>
                  {article.title}
                </LinkOverlay>
              </Heading>
              <Text color={textColor} mb={4}>
                {article.excerpt}
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {article.tags.map((tag) => (
                  <Tag key={tag} size="sm" colorScheme="blue" variant="subtle">
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </LinkBox>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Blog;
