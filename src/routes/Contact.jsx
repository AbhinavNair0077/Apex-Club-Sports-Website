import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: [
        "123 Sports Avenue",
        "Athletic City, AC 12345",
        "United States"
      ]
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "Emergency: +1 (555) 911-1234"
      ]
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: [
        "info@apexsportsclub.com",
        "support@apexsportsclub.com",
        "coaching@apexsportsclub.com"
      ]
    },
    {
      icon: FiClock,
      title: "Operating Hours",
      details: [
        "Monday - Friday: 5:00 AM - 11:00 PM",
        "Saturday: 6:00 AM - 10:00 PM",
        "Sunday: 7:00 AM - 9:00 PM"
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
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to start your sports journey? Get in touch with our team and 
            discover how we can help you achieve your athletic goals.
          </p>
        </motion.div>
      </Section>

      {/* Contact Information */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full mb-4">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Form and Map */}
      <Section className="bg-gradient-to-b from-dark-900/30 to-transparent">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-2xl p-8 h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                <p className="text-gray-400">
                  Find us easily with our interactive location map
                </p>
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-strong rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">
                Need Immediate Assistance?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-white font-medium">Quick Support</p>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-400" />
                  <div>
                    <p className="text-white font-medium">Instant Email</p>
                    <p className="text-gray-400 text-sm">info@apexsportsclub.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-glass-border">
                <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href={`#${social.toLowerCase()}`}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-glass-300 transition-colors duration-200 cursor-hover"
                    >
                      <span className="text-primary-400 text-sm font-medium">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold gradient-text mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Quick answers to common questions
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: "What are your membership options?",
              answer: "We offer flexible membership plans including monthly, quarterly, and annual options. Each membership includes access to all facilities and basic coaching sessions."
            },
            {
              question: "Do you offer beginner-friendly programs?",
              answer: "Absolutely! We have programs designed for all skill levels, from complete beginners to professional athletes. Our coaches will help you find the right starting point."
            },
            {
              question: "What safety measures are in place?",
              answer: "Safety is our top priority. We maintain the highest safety standards with certified equipment, trained staff, and comprehensive emergency protocols."
            },
            {
              question: "Can I try a session before joining?",
              answer: "Yes! We offer trial sessions for new members. Contact us to schedule your complimentary trial and experience our facilities firsthand."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Contact;
