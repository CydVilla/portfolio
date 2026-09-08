import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { type Photo } from '../data/photos';

interface PhotoGridProps {
  photos: Photo[];
  onSelect: (index: number) => void;
  columns?: Record<string, number>;
}

const PhotoGrid = ({
  photos,
  onSelect,
  columns = { base: 1, sm: 2, lg: 3 },
}: PhotoGridProps) => (
  <SimpleGrid columns={columns} spacing={6} w="100%">
    {photos.map((photo, index) => (
      <Box
        key={photo.id}
        as="button"
        type="button"
        onClick={() => onSelect(index)}
        aria-label={`View photo: ${photo.title}`}
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        boxShadow="md"
        display="block"
        w="100%"
        textAlign="left"
        transition="transform 0.2s ease"
        _hover={{ transform: 'translateY(-6px)' }}
        _focusVisible={{ outline: '3px solid', outlineColor: 'brand.500', outlineOffset: '2px' }}
        sx={{ '&:hover img': { transform: 'scale(1.06)' } }}
      >
        <Image
          src={photo.thumb}
          alt={photo.alt}
          w="100%"
          h={{ base: '240px', md: '260px' }}
          objectFit="cover"
          loading="lazy"
          transition="transform 0.4s ease"
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          px={4}
          py={3}
          bgGradient="linear(to-t, blackAlpha.800, blackAlpha.000)"
          color="white"
        >
          <Heading as="h3" size="sm">
            {photo.title}
          </Heading>
          <Text fontSize="xs" opacity={0.85}>
            {photo.category}
          </Text>
        </Box>
      </Box>
    ))}
  </SimpleGrid>
);

export default PhotoGrid;
