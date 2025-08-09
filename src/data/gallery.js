export const galleryData = [
  {
    id: 1,
    title: "Football Training Session",
    category: "outdoor",
    image: "/api/placeholder/400/300",
    description: "Professional football training in action"
  },
  {
    id: 2,
    title: "Basketball Championship",
    category: "indoor",
    image: "/api/placeholder/400/400",
    description: "Competitive basketball match"
  },
  {
    id: 3,
    title: "Tennis Court Facilities",
    category: "outdoor",
    image: "/api/placeholder/600/400",
    description: "State-of-the-art tennis courts"
  },
  {
    id: 4,
    title: "Swimming Pool",
    category: "indoor",
    image: "/api/placeholder/800/400",
    description: "Olympic-standard swimming pool"
  },
  {
    id: 5,
    title: "Athletics Track",
    category: "outdoor",
    image: "/api/placeholder/500/300",
    description: "Professional athletics track and field"
  },
  {
    id: 6,
    title: "Annual Sports Day",
    category: "events",
    image: "/api/placeholder/600/300",
    description: "Celebrating our annual sports day"
  },
  {
    id: 7,
    title: "Badminton Tournament",
    category: "indoor",
    image: "/api/placeholder/400/500",
    description: "Competitive badminton matches"
  },
  {
    id: 8,
    title: "Cricket Match",
    category: "outdoor",
    image: "/api/placeholder/700/400",
    description: "Exciting cricket match in progress"
  },
  {
    id: 9,
    title: "Team Celebration",
    category: "events",
    image: "/api/placeholder/400/300",
    description: "Team celebrating their victory"
  },
  {
    id: 10,
    title: "Volleyball Training",
    category: "indoor",
    image: "/api/placeholder/500/400",
    description: "Intensive volleyball training session"
  },
  {
    id: 11,
    title: "Youth Program",
    category: "events",
    image: "/api/placeholder/600/400",
    description: "Youth development program in action"
  },
  {
    id: 12,
    title: "Fitness Center",
    category: "indoor",
    image: "/api/placeholder/800/500",
    description: "Modern fitness and training facilities"
  }
];

export const getGalleryByCategory = (category) => {
  if (category === 'all') return galleryData;
  return galleryData.filter(item => item.category === category);
};
