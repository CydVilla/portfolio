import {
  Box,
  Collapse,
  Container,
  Flex,
  Icon,
  IconButton,
  Link,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaGithub, FaLinkedin, FaTimes, FaTwitter } from 'react-icons/fa';
import { type ReactNode } from 'react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
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
        top={0}
        left={0}
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Link
              as={RouterLink}
              to="/"
              fontWeight="bold"
              fontSize={{ base: 'lg', sm: 'xl' }}
              whiteSpace="nowrap"
              onClick={onClose}
            >
              Cyd Villavicencio
            </Link>
            <Flex gap={8} display={{ base: 'none', md: 'flex' }}>
              {navLinks.map((link) => (
                <Link key={link.to} as={RouterLink} to={link.to} _hover={{ color: 'brand.500' }}>
                  {link.label}
                </Link>
              ))}
            </Flex>
            <IconButton
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              display={{ base: 'inline-flex', md: 'none' }}
              icon={<Icon as={isOpen ? FaTimes : FaBars} />}
              onClick={onToggle}
              variant="ghost"
            />
          </Flex>
          <Collapse in={isOpen} animateOpacity>
            <VStack
              align="stretch"
              display={{ md: 'none' }}
              pb={4}
              spacing={1}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  borderRadius="md"
                  fontWeight="medium"
                  onClick={onClose}
                  px={3}
                  py={3}
                  _hover={{ bg: 'brand.50', color: 'brand.500' }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </Collapse>
        </Container>
      </Box>

      <Box as="main" flex="1" pt={16}>
        {children}
      </Box>

      <Box as="footer" bg={bgColor} borderTop="1px" borderColor={borderColor}>
        <Container maxW="container.xl" py={8}>
          <Flex justify="space-between" align="center" direction={{ base: 'column', sm: 'row' }} gap={4}>
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