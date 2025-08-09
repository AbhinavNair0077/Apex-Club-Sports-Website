import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiYoutube, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' },
    ],
    'Sports': [
      { name: 'Football', path: '/#sports' },
      { name: 'Basketball', path: '/#sports' },
      { name: 'Tennis', path: '/#sports' },
      { name: 'Swimming', path: '/#sports' },
    ],
    'Support': [
      { name: 'Help Center', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Membership', path: '/register' },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: '#', name: 'Facebook' },
    { icon: FiTwitter, href: '#', name: 'Twitter' },
    { icon: FiInstagram, href: '#', name: 'Instagram' },
    { icon: FiYoutube, href: '#', name: 'YouTube' },
  ];

  const contactInfo = [
    { icon: FiMapPin, text: '123 Sports Avenue, Athletic City, AC 12345' },
    { icon: FiPhone, text: '+1 (555) 123-4567' },
    { icon: FiMail, text: 'info@apexsportsclub.com' },
  ];

  return (
    <footer className="relative bg-dark-900/50 backdrop-blur-xl border-t border-glass-border">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand and Contact */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/" className="inline-block mb-6">
                  <span className="text-2xl font-bold gradient-text">
                    Apex Sports Club
                  </span>
                </Link>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Elevate your game with world-class facilities, expert coaching, 
                  and a community that shares your passion for sports excellence.
                </p>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-white font-semibold mb-6">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-hover"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Social Links and Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-glass-border"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-1">
                <span className="text-gray-400 mr-4">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 text-gray-400 hover:text-white hover:bg-glass-200 rounded-lg transition-all duration-300 cursor-hover"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-glass flex-1 sm:w-64"
                />
                <button className="btn-primary px-6 py-3 whitespace-nowrap cursor-hover">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-glass-border text-center"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Apex Sports Club. All rights reserved. Built with ❤️ for sports enthusiasts.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
