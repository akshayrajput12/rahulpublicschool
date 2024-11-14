import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaGraduationCap, FaTrophy, FaTheaterMasks, 
  FaFlask, FaPalette, FaFutbol, FaGuitar, 
  FaChalkboardTeacher, FaSearch, FaExpand, FaTimes
} from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);

  const categories = [
    { id: 'all', name: 'All', icon: <FaSearch /> },
    { id: 'academic', name: 'Academic', icon: <FaGraduationCap /> },
    { id: 'sports', name: 'Sports', icon: <FaFutbol /> },
    { id: 'cultural', name: 'Cultural', icon: <FaTheaterMasks /> },
    { id: 'science', name: 'Science', icon: <FaFlask /> },
    { id: 'arts', name: 'Arts', icon: <FaPalette /> },
    { id: 'music', name: 'Music', icon: <FaGuitar /> },
    { id: 'achievements', name: 'Achievements', icon: <FaTrophy /> },
    { id: 'faculty', name: 'Faculty', icon: <FaChalkboardTeacher /> },
  ];

  const allGalleryItems = [
    {
      id: 1,
      category: 'academic',
      image: '/images/gallery/classroom-1.jpg',
      title: 'Smart Class Session',
      description: 'Interactive digital learning with advanced smart boards',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      category: 'sports',
      image: '/images/gallery/sports-1.jpg',
      title: 'Annual Sports Meet 2024',
      description: 'Inter-house athletics championship finals',
      date: 'February 28, 2024'
    },
    {
      id: 3,
      category: 'cultural',
      image: '/images/gallery/dance-1.jpg',
      title: 'Classical Dance Performance',
      description: 'Bharatanatyam performance at Annual Day',
      date: 'January 20, 2024'
    },
    {
      id: 4,
      category: 'science',
      image: '/images/gallery/lab-1.jpg',
      title: 'Science Exhibition',
      description: 'Innovative robotics projects by senior students',
      date: 'March 10, 2024'
    },
    {
      id: 5,
      category: 'arts',
      image: '/images/gallery/art-1.jpg',
      title: 'Art Exhibition',
      description: 'Student artwork showcase - Paintings & Sculptures',
      date: 'February 15, 2024'
    },
    {
      id: 6,
      category: 'music',
      image: '/images/gallery/music-1.jpg',
      title: 'Annual Music Concert',
      description: 'Classical fusion performance by school orchestra',
      date: 'March 5, 2024'
    },
    {
      id: 7,
      category: 'achievements',
      image: '/images/gallery/awards-1.jpg',
      title: 'Academic Excellence Awards',
      description: 'Toppers receiving recognition at Annual Day',
      date: 'December 20, 2023'
    },
    {
      id: 8,
      category: 'faculty',
      image: '/images/gallery/faculty-1.jpg',
      title: 'Teacher Training Workshop',
      description: 'Professional development session on modern teaching methods',
      date: 'January 15, 2024'
    },
    {
      id: 9,
      category: 'cultural',
      image: '/images/gallery/drama-1.jpg',
      title: 'Annual Drama Production',
      description: 'Shakespeare\'s Hamlet performed by senior students',
      date: 'February 10, 2024'
    },
    {
      id: 10,
      category: 'sports',
      image: '/images/gallery/cricket-1.jpg',
      title: 'Inter-School Cricket Tournament',
      description: 'Final match victory celebration',
      date: 'March 1, 2024'
    },
    {
      id: 11,
      category: 'academic',
      image: '/images/gallery/debate-1.jpg',
      title: 'Inter-House Debate Competition',
      description: 'Students discussing global environmental issues',
      date: 'January 25, 2024'
    },
    {
      id: 12,
      category: 'science',
      image: '/images/gallery/chemistry-1.jpg',
      title: 'Chemistry Lab Experiments',
      description: 'Advanced practical session for Class XII',
      date: 'February 20, 2024'
    },
    {
      id: 13,
      category: 'arts',
      image: '/images/gallery/craft-1.jpg',
      title: 'Traditional Crafts Workshop',
      description: 'Students learning pottery and textile design',
      date: 'March 8, 2024'
    },
    {
      id: 14,
      category: 'achievements',
      image: '/images/gallery/olympiad-1.jpg',
      title: 'International Olympiad Winners',
      description: 'Students receiving medals for Mathematics Olympiad',
      date: 'December 15, 2023'
    },
    {
      id: 15,
      category: 'cultural',
      image: '/images/gallery/festival-1.jpg',
      title: 'Cultural Festival',
      description: 'Celebration of India\'s diverse cultural heritage',
      date: 'January 30, 2024'
    },
    {
      id: 16,
      category: 'sports',
      image: '/images/gallery/basketball-1.jpg',
      title: 'Basketball Championship',
      description: 'Girls team winning state-level tournament',
      date: 'February 5, 2024'
    },
    {
      id: 17,
      category: 'music',
      image: '/images/gallery/choir-1.jpg',
      title: 'School Choir Performance',
      description: 'Annual inter-school music competition',
      date: 'March 12, 2024'
    },
    {
      id: 18,
      category: 'faculty',
      image: '/images/gallery/seminar-1.jpg',
      title: 'Educational Leadership Seminar',
      description: 'Faculty development program on modern education',
      date: 'January 18, 2024'
    },
    {
      id: 19,
      category: 'science',
      image: '/images/gallery/physics-1.jpg',
      title: 'Physics Exhibition',
      description: 'Working models of renewable energy systems',
      date: 'February 25, 2024'
    },
    {
      id: 20,
      category: 'achievements',
      image: '/images/gallery/sports-awards-1.jpg',
      title: 'Sports Excellence Awards',
      description: 'Annual sports achievement recognition ceremony',
      date: 'March 20, 2024'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? allGalleryItems 
    : allGalleryItems.filter(item => item.category === selectedCategory);

  const displayedItems = filteredItems.slice(0, visibleItems);
  const hasMore = visibleItems < filteredItems.length;

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <PageContainer>
      <Header>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          School Gallery
        </motion.h1>
        <SubHeader>Capturing Moments, Creating Memories</SubHeader>
      </Header>

      <CategoryContainer>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            selected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="icon">{category.icon}</span>
            {category.name}
          </CategoryButton>
        ))}
      </CategoryContainer>

      <GalleryGrid>
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <GalleryItem
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(item)}
              >
                <ImageContainer>
                  <img src={item.image} alt={item.title} />
                  <ImageOverlay>
                    <OverlayContent>
                      <FaExpand className="expand-icon" />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span className="date">{item.date}</span>
                    </OverlayContent>
                  </ImageOverlay>
                </ImageContainer>
              </GalleryItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </GalleryGrid>

      {hasMore && (
        <LoadMoreButton
          onClick={loadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Load More
        </LoadMoreButton>
      )}

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={() => setSelectedImage(null)}>
                <FaTimes />
              </CloseButton>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="modal-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
                <span>{selectedImage.date}</span>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom right, #111111, #1a1a1a);
  color: white;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    background: linear-gradient(to right, #e94560, #d5314c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SubHeader = styled.p`
  color: #888;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const CategoryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: 1px solid ${props => props.selected ? '#e94560' : 'rgba(233, 69, 96, 0.3)'};
  background: ${props => props.selected ? 'rgba(233, 69, 96, 0.2)' : 'rgba(0, 0, 0, 0.3)'};
  color: ${props => props.selected ? '#e94560' : '#fff'};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  .icon {
    font-size: 1.2rem;
    color: ${props => props.selected ? '#e94560' : 'rgba(233, 69, 96, 0.8)'};
  }

  &:hover {
    background: rgba(233, 69, 96, 0.15);
    border-color: #e94560;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.2);
  }
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const GalleryItem = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  background: #1f1f1f;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(233, 69, 96, 0.3);
    border-color: rgba(233, 69, 96, 0.5);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${GalleryItem}:hover img {
    transform: scale(1.1);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(233, 69, 96, 0.8) 100%
  );
  opacity: 0;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const OverlayContent = styled.div`
  text-align: center;
  color: white;
  transform: translateY(20px);
  transition: transform 0.4s ease;

  ${GalleryItem}:hover & {
    transform: translateY(0);
  }

  .expand-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.4s ease;

    ${GalleryItem}:hover & {
      opacity: 1;
      transform: scale(1);
    }
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
  }

  .date {
    font-size: 0.9rem;
    opacity: 0.8;
    display: block;
    margin-top: 0.5rem;
    color: #e94560;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  .modal-content {
    max-width: 90vw;
    max-height: 90vh;
    background: #1a1a1a;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(233, 69, 96, 0.3);
    box-shadow: 0 0 30px rgba(233, 69, 96, 0.2);

    img {
      max-width: 100%;
      max-height: 70vh;
      object-fit: contain;
    }

    .modal-info {
      padding: 1.5rem;
      background: linear-gradient(to top, #1a1a1a, rgba(26, 26, 26, 0.9));
      
      h2 {
        color: #e94560;
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
      }

      p {
        color: #e94560;
        margin-bottom: 0.5rem;
        font-size: 1.8rem;
      }

      span {
        display: block;
        margin-top: 0.5rem;
        color: #888;
      }
    }
  }
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2.5rem;
  background: #e94560;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #d5314c;
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.3);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(233, 69, 96, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.2rem;
  z-index: 1000;

  &:hover {
    background: #e94560;
    transform: rotate(90deg);
  }
`;

export default GalleryPage; 