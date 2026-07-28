import {
  Box,
  Button,
  Code,
  Container,
  Heading,
  HStack,
  Link,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Navigate, Link as RouterLink, useParams } from 'react-router-dom';
import { articles, type ArticleBlock } from '../data/articles';

const formatDate = (date: string) =>
  new Date(`${date}T12:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

// Renders **bold** spans inside article text
const renderInline = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <Text as="strong" key={i}>
        {part.slice(2, -2)}
      </Text>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );

const ArticleBlockView = ({ block }: { block: ArticleBlock }) => {
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const codeBg = useColorModeValue('gray.100', 'gray.700');
  const quoteBorder = useColorModeValue('brand.500', 'brand.300');

  switch (block.type) {
    case 'heading':
      return (
        <Heading as="h2" size="md" mt={10} mb={4}>
          {block.text}
        </Heading>
      );
    case 'paragraph':
      return (
        <Text color={textColor} fontSize="lg" lineHeight="tall" mb={5}>
          {renderInline(block.text)}
        </Text>
      );
    case 'list':
      return (
        <UnorderedList spacing={3} mb={5} pl={4}>
          {block.items.map((item, i) => (
            <ListItem key={i} color={textColor} fontSize="lg" lineHeight="tall">
              {renderInline(item)}
            </ListItem>
          ))}
        </UnorderedList>
      );
    case 'code':
      return (
        <Code
          display="block"
          whiteSpace="pre"
          overflowX="auto"
          p={4}
          mb={5}
          borderRadius="md"
          bg={codeBg}
          fontSize="sm"
        >
          {block.code}
        </Code>
      );
    case 'quote':
      return (
        <Box
          as="blockquote"
          borderLeft="4px solid"
          borderColor={quoteBorder}
          pl={4}
          mb={5}
          fontStyle="italic"
        >
          <Text color={textColor} fontSize="lg" lineHeight="tall">
            {renderInline(block.text)}
          </Text>
        </Box>
      );
    case 'cta':
      return (
        <Button
          as={Link}
          href={block.href}
          isExternal
          size="lg"
          mb={5}
          _hover={{ textDecoration: 'none', bg: 'brand.600' }}
        >
          {block.text}
        </Button>
      );
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const metaColor = useColorModeValue('gray.500', 'gray.400');
  const subtitleColor = useColorModeValue('gray.600', 'gray.300');

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Box as="section" py={20}>
      <Container maxW="container.md">
        <Button
          as={RouterLink}
          to="/blog"
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          size="sm"
          mb={8}
        >
          All posts
        </Button>
        <Box as="article">
          <HStack spacing={2} mb={4} flexWrap="wrap">
            {article.tags.map((tag) => (
              <Tag key={tag} size="sm" colorScheme="blue" variant="subtle">
                {tag}
              </Tag>
            ))}
          </HStack>
          <Heading as="h1" size="xl" mb={4}>
            {article.title}
          </Heading>
          <Text fontSize="xl" color={subtitleColor} mb={4}>
            {article.subtitle}
          </Text>
          <Text fontSize="sm" color={metaColor} mb={10}>
            {formatDate(article.date)} &middot; {article.readTime} &middot; Cyd Villavicencio
          </Text>
          {article.content.map((block, i) => (
            <ArticleBlockView key={i} block={block} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPost;
