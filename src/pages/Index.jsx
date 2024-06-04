import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Select, Box, IconButton, Image, Textarea } from "@chakra-ui/react";
import { FaBook, FaSearch, FaUpload, FaStar, FaComments, FaPodcast } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
  };

  const handleUpload = () => {
    // Implement book upload functionality here
  };

  const handleRating = (rate) => {
    setRating(rate);
    // Implement rating functionality here
  };

  const handleComment = () => {
    // Implement comment functionality here
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Elara
        </Text>
        <HStack spacing={4} width="100%">
          <Input placeholder="Search for books..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Select placeholder="Select genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="science-fiction">Science Fiction</option>
          </Select>
          <IconButton aria-label="Search" icon={<FaSearch />} onClick={handleSearch} />
        </HStack>
        <HStack spacing={4} width="100%">
          <Button leftIcon={<FaUpload />} onClick={handleUpload}>
            Upload Book
          </Button>
          <Button leftIcon={<FaComments />}>Community Chat</Button>
          <Button leftIcon={<FaPodcast />}>Podcasts</Button>
        </HStack>
        <Box width="100%">
          {books.map((book, index) => (
            <HStack key={index} spacing={4} p={4} borderWidth="1px" borderRadius="lg">
              <Image src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXJ8ZW58MHx8fHwxNzE3NTE0ODQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book Cover" boxSize="100px" />
              <VStack align="start">
                <Text fontSize="xl" fontWeight="bold">
                  {book.title}
                </Text>
                <Text>{book.author}</Text>
                <Text>{book.genre}</Text>
                <HStack>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconButton key={star} aria-label={`Rate ${star} stars`} icon={<FaStar />} color={star <= rating ? "yellow.400" : "gray.300"} onClick={() => handleRating(star)} />
                  ))}
                </HStack>
              </VStack>
            </HStack>
          ))}
        </Box>
        {selectedBook && (
          <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" fontWeight="bold">
              {selectedBook.title}
            </Text>
            <Text>{selectedBook.author}</Text>
            <Text>{selectedBook.genre}</Text>
            <Textarea placeholder="Write a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
            <Button onClick={handleComment}>Submit Comment</Button>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
