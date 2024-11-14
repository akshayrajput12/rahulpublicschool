import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaCalendarAlt, FaClock, FaMapMarkerAlt, 
  FaGraduationCap, FaTheaterMasks, FaFutbol,
  FaChalkboardTeacher, FaMusic, FaPalette, FaFlask,
  FaSearch, FaFilter, FaChevronDown, FaStar,
  FaTimes, FaBullhorn
} from 'react-icons/fa';

const SearchSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(233, 69, 96, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #e94560;
  }
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(233, 69, 96, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.1);
  }
`;

const FiltersContainer = styled(motion.div)`
  display: ${props => props.show ? 'flex' : 'none'};
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(233, 69, 96, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;

  option {
    background: #1a1a1a;
  }
`;

const LoadMoreButton = styled.button`
  background: rgba(233, 69, 96, 0.1);
  color: #e94560;
  border: 1px solid rgba(233, 69, 96, 0.2);
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(233, 69, 96, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [eventsPerPage, setEventsPerPage] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const categories = [
    { id: 'all', name: 'All Events', icon: <FaCalendarAlt /> },
    { id: 'academic', name: 'Academic', icon: <FaGraduationCap /> },
    { id: 'cultural', name: 'Cultural', icon: <FaTheaterMasks /> },
    { id: 'sports', name: 'Sports', icon: <FaFutbol /> },
    { id: 'assembly', name: 'Assembly', icon: <FaChalkboardTeacher /> },
    { id: 'celebration', name: 'Celebration', icon: <FaMusic /> },
    { id: 'competition', name: 'Competition', icon: <FaPalette /> },
    { id: 'exhibition', name: 'Exhibition', icon: <FaFlask /> },
  ];

  const events = [
    {
      id: 1,
      title: "Annual Day Celebration",
      category: "celebration",
      date: "2024-03-25",
      time: "09:00 AM - 04:00 PM",
      venue: "School Auditorium",
      description: "Join us for our grand Annual Day celebration featuring cultural performances, award ceremonies, and special guest appearances.",
      image: "/images/events/annual-day.jpg",
      highlights: [
        "Student performances",
        "Academic awards ceremony",
        "Cultural showcase",
        "Parent-teacher meet"
      ],
      isHighlight: true
    },
    {
      id: 2,
      title: "Inter-House Sports Meet",
      category: "sports",
      date: "2024-04-10",
      time: "08:00 AM - 05:00 PM",
      venue: "School Sports Ground",
      description: "Annual inter-house sports competition featuring athletics, team sports, and indoor games.",
      image: "/images/events/sports-meet.jpg",
      highlights: [
        "Track and field events",
        "Team sports competitions",
        "March past ceremony",
        "Prize distribution"
      ],
      isHighlight: true
    },
    {
      id: 3,
      title: "Science Exhibition",
      category: "exhibition",
      date: "2024-05-15",
      time: "10:00 AM - 03:00 PM",
      venue: "School Science Labs",
      description: "Annual science exhibition showcasing student projects, experiments, and innovations in various scientific fields.",
      image: "/images/events/science-exhibition.jpg",
      highlights: [
        "Student research projects",
        "Live demonstrations",
        "Interactive experiments",
        "Expert jury evaluation"
      ],
      isHighlight: false
    },
    {
      id: 4,
      title: "Literary Week",
      category: "academic",
      date: "2024-06-05",
      time: "09:00 AM - 03:00 PM",
      venue: "School Library",
      description: "A week-long celebration of literature featuring debates, poetry recitation, and creative writing workshops.",
      image: "/images/events/literary-week.jpg",
      highlights: [
        "Debate competition",
        "Poetry slam",
        "Story writing contest",
        "Book fair"
      ],
      isHighlight: false
    },
    {
      id: 5,
      title: "Cultural Festival",
      category: "cultural",
      date: "2024-07-20",
      time: "11:00 AM - 06:00 PM",
      venue: "School Campus",
      description: "Vibrant celebration of diverse cultures through dance, music, food, and traditional art forms.",
      image: "/images/events/cultural-fest.jpg",
      highlights: [
        "Folk dance performances",
        "International food stalls",
        "Traditional art workshops",
        "Cultural parade"
      ],
      isHighlight: true
    },
    {
      id: 6,
      title: "Math Olympiad",
      category: "competition",
      date: "2024-08-12",
      time: "09:00 AM - 12:00 PM",
      venue: "School Classrooms",
      description: "Annual mathematics competition testing problem-solving skills and mathematical reasoning.",
      image: "/images/events/math-olympiad.jpg",
      highlights: [
        "Individual competition",
        "Team challenges",
        "Logic puzzles",
        "Speed math contest"
      ],
      isHighlight: false
    },
    {
      id: 7,
      title: "Independence Day Assembly",
      category: "assembly",
      date: "2024-08-15",
      time: "08:00 AM - 09:30 AM",
      venue: "School Assembly Ground",
      description: "Special assembly commemorating Independence Day with patriotic performances and flag hoisting ceremony.",
      image: "/images/events/independence-day.jpg",
      highlights: [
        "Flag hoisting",
        "Patriotic songs",
        "Student speeches",
        "March past"
      ],
      isHighlight: true
    },
    {
      id: 8,
      title: "Art Exhibition",
      category: "exhibition",
      date: "2024-09-10",
      time: "10:00 AM - 04:00 PM",
      venue: "School Art Gallery",
      description: "Showcase of student artwork including paintings, sculptures, and digital art installations.",
      image: "/images/events/art-exhibition.jpg",
      highlights: [
        "Student artwork display",
        "Live painting sessions",
        "Art workshops",
        "Guest artist talks"
      ],
      isHighlight: false
    },
    {
      id: 9,
      title: "Inter-School Debate Competition",
      category: "competition",
      date: "2024-10-05",
      time: "09:00 AM - 05:00 PM",
      venue: "School Auditorium",
      description: "Prestigious debate competition featuring participants from various schools across the region.",
      image: "/images/events/debate-competition.jpg",
      highlights: [
        "Preliminary rounds",
        "Semi-finals",
        "Finals",
        "Awards ceremony"
      ],
      isHighlight: true
    },
    {
      id: 10,
      title: "Teachers' Day Celebration",
      category: "celebration",
      date: "2024-09-05",
      time: "10:00 AM - 02:00 PM",
      venue: "School Auditorium",
      description: "Special celebration honoring teachers with performances and activities organized by students.",
      image: "/images/events/teachers-day.jpg",
      highlights: [
        "Student performances",
        "Teacher appreciation",
        "Fun activities",
        "Special lunch"
      ],
      isHighlight: false
    },
    {
      id: 11,
      title: "Career Guidance Week",
      category: "academic",
      date: "2024-11-15",
      time: "09:00 AM - 03:00 PM",
      venue: "School Conference Hall",
      description: "Week-long program featuring career counseling sessions, workshops, and interactions with industry professionals.",
      image: "/images/events/career-guidance.jpg",
      highlights: [
        "Expert sessions",
        "College counseling",
        "Industry visits",
        "Alumni interactions"
      ],
      isHighlight: true
    },
    {
      id: 12,
      title: "Christmas Carnival",
      category: "celebration",
      date: "2024-12-20",
      time: "11:00 AM - 06:00 PM",
      venue: "School Campus",
      description: "Annual Christmas celebration featuring carnival games, performances, and holiday activities.",
      image: "/images/events/christmas-carnival.jpg",
      highlights: [
        "Santa's grotto",
        "Christmas market",
        "Carol singing",
        "Gift exchange"
      ],
      isHighlight: true
    }
  ];

  // Update this filter to show all events for demonstration
  const upcomingEvents = events
    // .filter(event => new Date(event.date) >= new Date()) // Comment this line out to show all events
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const filteredEvents = upcomingEvents
    .filter(event => {
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesMonth = selectedMonth === 'all' || 
                          new Date(event.date).getMonth() + 1 === parseInt(selectedMonth);
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesMonth && matchesSearch;
    });

  const displayedEvents = filteredEvents.slice(0, eventsPerPage);

  const handleLoadMore = () => {
    const newEventsPerPage = eventsPerPage + 6;
    setEventsPerPage(newEventsPerPage);
    setHasMore(newEventsPerPage < filteredEvents.length);
  };

  return (
    <PageContainer>
      <Header>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Upcoming School Events
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stay updated with our school activities and celebrations
        </motion.p>
      </Header>

      <SearchSection>
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FilterButton onClick={() => setShowFilters(!showFilters)}>
            <FaFilter />
            Filters
            <FaChevronDown style={{ 
              transform: showFilters ? 'rotate(180deg)' : 'rotate(0)', 
              transition: 'transform 0.3s ease' 
            }} />
          </FilterButton>
        </SearchBar>

        <FiltersContainer show={showFilters}>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>

          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">All Months</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(2024, i, 1).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </Select>
        </FiltersContainer>
      </SearchSection>

      <EventTimeline>
        {displayedEvents.map((event, index) => (
          <TimelineItem
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedEvent(event)}
          >
            <DateBadge>
              <div className="month">
                {new Date(event.date).toLocaleString('default', { month: 'short' })}
              </div>
              <div className="day">
                {new Date(event.date).getDate()}
              </div>
            </DateBadge>

            <EventContent>
              <EventTitle>
                {event.title}
                {event.isHighlight && (
                  <HighlightBadge>
                    <FaStar /> Highlight Event
                  </HighlightBadge>
                )}
              </EventTitle>
              
              <EventDetails>
                <EventDetail>
                  <FaClock />
                  <span>{event.time}</span>
                </EventDetail>
                <EventDetail>
                  <FaMapMarkerAlt />
                  <span>{event.venue}</span>
                </EventDetail>
                <EventDetail>
                  {categories.find(cat => cat.id === event.category)?.icon}
                  <span>{categories.find(cat => cat.id === event.category)?.name}</span>
                </EventDetail>
              </EventDetails>
            </EventContent>
          </TimelineItem>
        ))}

        {filteredEvents.length > eventsPerPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <LoadMoreButton 
              onClick={handleLoadMore}
              disabled={!hasMore}
            >
              {hasMore ? 'Load More Events' : 'No More Events'}
            </LoadMoreButton>
          </motion.div>
        )}

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              padding: '2rem', 
              color: '#888' 
            }}
          >
            No events found matching your criteria
          </motion.div>
        )}
      </EventTimeline>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            {/* Modal content */}
          </EventModal>
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
    font-size: 3rem;
    background: linear-gradient(to right, #e94560, #ff6b81);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    color: #888;
    font-size: 1.2rem;
  }
`;

const EventTimeline = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(233, 69, 96, 0.1);

  &:hover {
    background: rgba(233, 69, 96, 0.1);
    transform: translateX(10px);
  }
`;

const DateBadge = styled.div`
  background: rgba(233, 69, 96, 0.1);
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  min-width: 80px;

  .month {
    font-size: 0.9rem;
    color: #e94560;
    text-transform: uppercase;
  }

  .day {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const EventContent = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HighlightBadge = styled.span`
  background: rgba(255, 193, 7, 0.1);
  color: #ffc107;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const EventDetails = styled.div`
  display: flex;
  gap: 2rem;
  color: #888;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  svg {
    color: #e94560;
  }
`;

const EventModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export default EventsPage; 