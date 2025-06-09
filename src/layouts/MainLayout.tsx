import { Box, Container, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box
        as="nav"
        position="fixed"
        w="100%"
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
        zIndex={10}
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
              Cyd Villavicencio
            </Link>
            <Flex gap={8}>
              <Link as={RouterLink} to="/" _hover={{ color: 'brand.500' }}>
                Home
              </Link>
              <Link as={RouterLink} to="/projects" _hover={{ color: 'brand.500' }}>
                Projects
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ color: 'brand.500' }}>
                About
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ color: 'brand.500' }}>
                Contact
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as="main" flex="1" pt={16}>
        {children}
      </Box>

      <Box as="footer" bg={bgColor} borderTop="1px" borderColor={borderColor}>
        <Container maxW="container.xl" py={8}>
          <Flex justify="space-between" align="center">
            <Box>&copy; {new Date().getFullYear()} Cyd Villavicencio</Box>
            <Flex gap={4}>
              <Link href="https://github.com/yourusername" isExternal>
                <FaGithub size={24} />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" isExternal>
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://twitter.com/yourusername" isExternal>
                <FaTwitter size={24} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout; 