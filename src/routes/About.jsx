import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTarget, FiHeart } from 'react-icons/fi';
import Section from '../components/Section';

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our facilities to our coaching programs."
    },
    {
      icon: FiUsers,
      title: "Community",
      description: "Building a strong, supportive community where athletes can grow and thrive together."
    },
    {
      icon: FiHeart,
      title: "Passion",
      description: "Our passion for sports drives us to provide the best experience for every member."
    },
    {
      icon: FiAward,
      title: "Achievement",
      description: "Celebrating every achievement, no matter how big or small, on the journey to success."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Head Coach - Tennis",
      image: "/api/placeholder/300/300",
      bio: "Former professional tennis player with 15+ years of coaching experience."
    },
    {
      name: "Mike Chen",
      role: "Swimming Director",
      image: "/api/placeholder/300/300",
      bio: "Olympic swimming coach specializing in competitive swimming programs."
    },
    {
      name: "Alex Rodriguez",
      role: "Football Coach",
      image: "/api/placeholder/300/300",
      bio: "Former professional footballer with expertise in youth development."
    },
    {
      name: "Lisa Williams",
      role: "Fitness Director",
      image: "/api/placeholder/300/300",
      bio: "Certified fitness trainer with specialization in sports conditioning."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Club Founded",
      description: "Apex Sports Club was established with a vision to promote sports excellence."
    },
    {
      year: "2015",
      title: "Facility Expansion",
      description: "Major expansion added swimming pool and indoor basketball courts."
    },
    {
      year: "2018",
      title: "1000+ Members",
      description: "Reached milestone of over 1000 active members across all sports."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched digital training programs and virtual coaching sessions."
    },
    {
      year: "2023",
      title: "Championship Success",
      description: "Our teams won multiple regional and national championships."
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to innovate and expand our world-class facilities."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <Section className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            About Apex Sports Club
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            For over a decade, we've been dedicated to fostering athletic excellence 
            and building a community where every athlete can reach their full potential.
          </p>
        </motion.div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gradient-to-b from-transparent to-dark-900/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To provide world-class sports facilities, expert coaching, and a supportive 
              community that empowers athletes of all levels to achieve their dreams. We 
              believe that sports have the power to transform lives, build character, and 
              create lasting friendships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the premier sports destination where champions are made and dreams 
              come true. We envision a future where every individual has access to 
              exceptional sports training, regardless of their background or skill level.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The principles that guide everything we do
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-gradient-to-b from-dark-900/30 to-transparent">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Expert coaches and staff dedicated to your success
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300"
            >
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-500/20 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Milestones that have shaped our story
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-blue-500 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full border-4 border-dark-950"></div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="glass rounded-xl p-6">
                    <div className="text-2xl font-bold text-primary-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
