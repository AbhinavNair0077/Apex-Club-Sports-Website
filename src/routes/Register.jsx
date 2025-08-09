import { motion } from 'framer-motion';
import RegistrationForm from '../components/RegistrationForm';
import Section from '../components/Section';

const Register = () => {
  const benefits = [
    "Access to all sports facilities",
    "Professional coaching sessions",
    "Flexible training schedules",
    "Community events and competitions",
    "Health and fitness assessments",
    "Equipment and gear discounts"
  ];

  const membershipPlans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      features: [
        "Access to all facilities",
        "Basic equipment usage",
        "Group training sessions",
        "Locker room access"
      ]
    },
    {
      name: "Premium",
      price: "$99",
      period: "per month",
      features: [
        "Everything in Basic",
        "Personal coaching sessions",
        "Nutrition consultations",
        "Priority booking",
        "Guest passes (2 per month)"
      ]
    },
    {
      name: "Elite",
      price: "$199",
      period: "per month",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Competition team access",
        "Recovery and wellness services",
        "Unlimited guest passes"
      ]
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
            Join Our Club
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Take the first step towards athletic excellence. Join our community 
            of passionate athletes and start your journey to greatness today.
          </p>
        </motion.div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gradient-to-b from-transparent to-dark-900/30">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            Membership Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to excel in your chosen sport
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3 glass rounded-xl p-4"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
              <span className="text-gray-300">{benefit}</span>
            </motion.div>
          ))}
        </div>

        {/* Membership Plans */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold gradient-text mb-6"
          >
            Choose Your Plan
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-strong rounded-2xl p-8 relative ${
                index === 1 ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 cursor-hover ${
                  index === 1 
                    ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:shadow-glow' 
                    : 'glass text-white hover:bg-glass-300'
                }`}>
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Registration Form */}
      <Section>
        <RegistrationForm />
      </Section>

      {/* Testimonial */}
      <Section className="bg-gradient-to-b from-dark-900/30 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass-strong rounded-2xl p-12"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed">
              "Joining Apex Sports Club was the best decision I made for my athletic career. 
              The facilities are world-class and the coaching staff is exceptional."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="/api/placeholder/80/80"
                alt="Alex Johnson"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-white text-lg">Alex Johnson</div>
                <div className="text-primary-400">Professional Athlete</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Register;
