export const sportsData = [
  {
    id: 1,
    name: "Football",
    slug: "football",
    icon: "⚽",
    description: "Join our competitive football program with expert coaching and state-of-the-art facilities.",
    fullDescription: "Our football program offers comprehensive training for all skill levels. From fundamental techniques to advanced strategies, our certified coaches help players develop their potential.",
    coaches: ["Coach Martinez", "Coach Thompson"],
    schedule: "Mon, Wed, Fri: 6:00 PM - 8:00 PM",
    ageGroups: "6-18 years, Adults",
    category: "outdoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    name: "Basketball",
    slug: "basketball",
    icon: "🏀",
    description: "Develop your basketball skills in our indoor courts with professional coaching staff.",
    fullDescription: "Experience basketball training like never before. Our program focuses on skill development, teamwork, and competitive play in a supportive environment.",
    coaches: ["Coach Johnson", "Coach Davis"],
    schedule: "Tue, Thu, Sat: 5:30 PM - 7:30 PM",
    ageGroups: "8-18 years, Adults",
    category: "indoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    name: "Tennis",
    slug: "tennis",
    icon: "🎾",
    description: "Perfect your tennis technique on our premium courts with personalized instruction.",
    fullDescription: "Our tennis program provides individualized coaching to help players of all levels improve their game. Modern courts and professional equipment included.",
    coaches: ["Coach Williams", "Coach Brown"],
    schedule: "Daily: 7:00 AM - 9:00 PM",
    ageGroups: "6+ years",
    category: "outdoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    name: "Swimming",
    slug: "swimming",
    icon: "🏊",
    description: "Dive into our aquatic programs with Olympic-standard pools and certified instructors.",
    fullDescription: "Learn to swim or improve your technique in our state-of-the-art aquatic facility. Programs available for beginners to competitive swimmers.",
    coaches: ["Coach Anderson", "Coach Wilson"],
    schedule: "Daily: 6:00 AM - 10:00 PM",
    ageGroups: "All ages",
    category: "indoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 5,
    name: "Badminton",
    slug: "badminton",
    icon: "🏸",
    description: "Master the art of badminton with expert coaching and competitive opportunities.",
    fullDescription: "Our badminton program offers training for recreational and competitive players. Learn proper techniques and strategies in our dedicated courts.",
    coaches: ["Coach Lee", "Coach Patel"],
    schedule: "Mon, Wed, Fri: 7:00 PM - 9:00 PM",
    ageGroups: "10+ years",
    category: "indoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 6,
    name: "Athletics",
    slug: "athletics",
    icon: "🏃",
    description: "Train like an athlete with our comprehensive track and field programs.",
    fullDescription: "Develop speed, strength, and endurance through our athletics program. Includes track events, field events, and general fitness training.",
    coaches: ["Coach Taylor", "Coach Miller"],
    schedule: "Tue, Thu, Sat: 6:00 AM - 8:00 AM",
    ageGroups: "12+ years",
    category: "outdoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 7,
    name: "Cricket",
    slug: "cricket",
    icon: "🏏",
    description: "Experience cricket excellence with professional coaching and modern facilities.",
    fullDescription: "Our cricket program covers all aspects of the game from batting and bowling to fielding. Suitable for beginners and experienced players.",
    coaches: ["Coach Sharma", "Coach Clarke"],
    schedule: "Wed, Sat, Sun: 4:00 PM - 7:00 PM",
    ageGroups: "8+ years",
    category: "outdoor",
    image: "/api/placeholder/400/300"
  },
  {
    id: 8,
    name: "Volleyball",
    slug: "volleyball",
    icon: "🏐",
    description: "Spike your way to success with our dynamic volleyball training programs.",
    fullDescription: "Join our volleyball program to learn teamwork, coordination, and competitive skills. Indoor and beach volleyball options available.",
    coaches: ["Coach Rodriguez", "Coach Kim"],
    schedule: "Mon, Thu, Sat: 7:00 PM - 9:00 PM",
    ageGroups: "12+ years",
    category: "indoor",
    image: "/api/placeholder/400/300"
  }
];

export const getSportBySlug = (slug) => {
  return sportsData.find(sport => sport.slug === slug);
};

export const getSportsByCategory = (category) => {
  if (category === 'all') return sportsData;
  return sportsData.filter(sport => sport.category === category);
};
