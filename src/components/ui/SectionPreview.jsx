import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SectionPreview = ({ section, index }) => {
  const navigate = useNavigate();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: {
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
          staggerChildren: 0.1
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row items-center gap-8 py-16 px-6 md:px-12 border-b border-luxury-gold/10 dark:border-luxury-gold-dark/10 last:border-0"
    >
      <motion.div 
        className={`w-full md:w-1/2 perspective-1000 ${isEven ? 'md:order-1' : 'md:order-2'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.7, delay: 0.2 }
        }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.03,
            rotateY: isEven ? 5 : -5,
            transition: { duration: 0.4 }
          }}
          className="relative overflow-hidden rounded-lg shadow-lg transform-gpu"
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-[400px] object-cover"
          />
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          >
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-wider">Explore</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className={`w-full md:w-1/2 ${isEven ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'}`}>
        <motion.h3
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, delay: 0.3 }
          }}
          viewport={{ once: true }}
          className="text-3xl font-light mb-4 text-luxury-brown dark:text-luxury-cream"
        >
          {section.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, delay: 0.4 }
          }}
          viewport={{ once: true }}
          className="text-lg mb-6 text-luxury-brown-light dark:text-luxury-cream-dark leading-relaxed"
        >
          {section.description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: 0.5 }
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          onClick={() => navigate(section.href)}
          className="relative px-8 py-3 overflow-hidden rounded-lg
            bg-luxury-gold/10 dark:bg-luxury-gold-dark/10
            text-luxury-brown dark:text-luxury-gold-light
            hover:bg-luxury-gold/20 dark:hover:bg-luxury-gold-dark/20
            transition-all duration-300"
        >
          <motion.span 
            className="relative z-10 font-light inline-block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Discover More
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SectionPreview;