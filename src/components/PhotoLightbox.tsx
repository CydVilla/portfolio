import { useEffect } from 'react';
import {
  Box,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { type Photo } from '../data/photos';

interface PhotoLightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const PhotoLightbox = ({ photos, index, onClose, onNavigate }: PhotoLightboxProps) => {
  const isOpen = index !== null;
  const photo = isOpen ? photos[index] : null;

  useEffect(() => {
    if (index === null || photos.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % photos.length);
      } else if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index, photos.length, onNavigate]);

  if (!photo || index === null) return null;

  const goTo = (offset: number) =>
    onNavigate((index + offset + photos.length) % photos.length);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent bg="gray.900" color="white" mx={4}>
        <ModalCloseButton zIndex={2} color="white" />
        <ModalBody p={{ base: 3, md: 6 }}>
          <Box position="relative">
            <Image
              src={photo.src}
              alt={photo.alt}
              w="100%"
              maxH="75vh"
              objectFit="contain"
              borderRadius="md"
            />
            {photos.length > 1 && (
              <>
                <IconButton
                  aria-label="Previous photo"
                  icon={<FaChevronLeft />}
                  onClick={() => goTo(-1)}
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  isRound
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: 'blackAlpha.800' }}
                />
                <IconButton
                  aria-label="Next photo"
                  icon={<FaChevronRight />}
                  onClick={() => goTo(1)}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  isRound
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: 'blackAlpha.800' }}
                />
              </>
            )}
          </Box>
          <VStack align="start" spacing={2} pt={5} pb={2}>
            <Heading as="h2" size="md">
              {photo.title}
            </Heading>
            <Text color="gray.300">{photo.caption}</Text>
            <Text fontSize="sm" color="gray.500">
              {photo.category} &middot; {index + 1} of {photos.length}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PhotoLightbox;
