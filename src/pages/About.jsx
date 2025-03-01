import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const slideUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      duration: 0.8
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

export default function About() {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-neutral-50 to-orange-50 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-rose-100/80 via-amber-50/90 to-orange-100/80 py-24 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-serif text-rose-900 mb-4 drop-shadow-md"
            variants={slideUp}
          >
            Capturing Moments,
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-rose-800 mb-12 italic"
            variants={slideUp}
          >
            Crafting Memories
          </motion.h2>
          <div className="flex justify-center">
            <motion.img 
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&q=80" 
              alt="Team Photography"
              className="w-full max-w-3xl rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            />
          </div>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={slideUp}>
            <h2 className="text-4xl font-serif text-rose-900 mb-8">Our Story</h2>
            <p className="text-rose-800 mb-6 leading-relaxed">
              Life and Times Photography was born from a passion for capturing the beautiful, fleeting moments that make up our lives. Founded in 2015, our studio has grown from a one-person operation into a collective of talented photographers who share a vision for authentic storytelling through imagery.
            </p>
            <p className="text-rose-800 leading-relaxed">
              We believe that photography is more than just taking pictures – it's about preserving memories, emotions, and stories that can be revisited and cherished for generations to come. Our approach combines technical excellence with a keen artistic eye, ensuring that every image we create is both beautiful and meaningful.
            </p>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            variants={slideUp}
          >
            <img 
              src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?auto=format&fit=crop&q=80" 
              alt="Behind the scenes"
              className="w-full max-w-md rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Meet The Team Section */}
      <motion.section 
        className="bg-gradient-to-l from-orange-100/80 via-amber-50/90 to-rose-100/80 py-24 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-serif text-rose-900 mb-16"
            variants={slideUp}
          >
            Meet Our Creative Team
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Team Member 1 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white/60 to-rose-50/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:from-white/80 hover:to-rose-50/80 group"
              variants={slideUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" 
                alt="Sarah Johnson" 
                className="w-full md:w-64 h-80 object-cover object-center rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-serif text-rose-900 mb-2">Sarah Johnson</h3>
                <p className="text-amber-700 uppercase text-sm font-medium tracking-wider mb-4">Lead Photographer</p>
                <p className="text-rose-800 leading-relaxed">
                  With over 10 years of experience in portrait and wedding photography, Sarah brings a unique perspective to every shoot. Her calm demeanor and attention to detail ensure that clients feel comfortable and confident throughout the entire process.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white/60 to-orange-50/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:from-white/80 hover:to-orange-50/80 group"
              variants={slideUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" 
                alt="Michael Chen" 
                className="w-full md:w-64 h-80 object-cover object-center rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-serif text-rose-900 mb-2">Michael Chen</h3>
                <p className="text-amber-700 uppercase text-sm font-medium tracking-wider mb-4">Creative Director</p>
                <p className="text-rose-800 leading-relaxed">
                  Michael's background in fine arts and design brings a creative edge to our team. He specializes in conceptual photography and has an eye for composition that transforms ordinary scenes into extraordinary images.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8"
            variants={staggerContainer}
          >
            {/* Team Member 3 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white/60 to-amber-50/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:from-white/80 hover:to-amber-50/80 group"
              variants={slideUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80" 
                alt="Emily Rodriguez" 
                className="w-full md:w-64 h-80 object-cover object-center rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-serif text-rose-900 mb-2">Emily Rodriguez</h3>
                <p className="text-amber-700 uppercase text-sm font-medium tracking-wider mb-4">Destination Specialist</p>
                <p className="text-rose-800 leading-relaxed">
                  Emily has photographed in over 30 countries, capturing the essence of each location with authenticity and respect. Her travel experience makes her the perfect photographer for destination weddings and travel documentation.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div 
              className="flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white/60 to-orange-50/60 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 hover:from-white/80 hover:to-orange-50/80 group"
              variants={slideUp}
            >
              <img 
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80" 
                alt="James Wilson" 
                className="w-full md:w-64 h-80 object-cover object-center rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-2xl font-serif text-rose-900 mb-2">James Wilson</h3>
                <p className="text-amber-700 uppercase text-sm font-medium tracking-wider mb-4">Post-Production Artist</p>
                <p className="text-rose-800 leading-relaxed">
                  James ensures that every image meets our high standards through his skillful editing and retouching. With a background in digital art, he enhances the natural beauty of our photographs while maintaining their authenticity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-serif text-rose-900 mb-16"
            variants={slideUp}
          >
            Our Creative Approach
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            variants={staggerContainer}
          >
            <motion.div 
              className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideUp}
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-4">Authentic Moments</h3>
              <p className="text-rose-800 mb-6 leading-relaxed">
                We believe in capturing genuine emotions and interactions. Rather than overly posed or contrived setups, we focus on documenting the real moments that tell your unique story.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80" 
                alt="Authentic wedding moment" 
                className="w-full h-64 object-cover object-center rounded-2xl shadow-md"
              />
            </motion.div>
            <motion.div 
              className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideUp}
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-4">Attention to Detail</h3>
              <p className="text-rose-800 mb-6 leading-relaxed">
                The small details often tell the biggest stories. We pay close attention to the subtle elements that make each event or portrait session special and unique to you.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?auto=format&fit=crop&q=80" 
                alt="Photography details" 
                className="w-full h-64 object-cover object-center rounded-2xl shadow-md"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
            variants={staggerContainer}
          >
            <motion.div 
              className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideUp}
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-4">Creative Vision</h3>
              <p className="text-rose-800 mb-6 leading-relaxed">
                We approach each project with fresh eyes and creative energy. Our photographers are constantly evolving their craft, experimenting with new techniques and perspectives.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80" 
                alt="Creative photography" 
                className="w-full h-64 object-cover object-center rounded-2xl shadow-md"
              />
            </motion.div>
            <motion.div 
              className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={slideUp}
            >
              <h3 className="text-2xl font-serif text-rose-900 mb-4">Client Experience</h3>
              <p className="text-rose-800 mb-6 leading-relaxed">
                From your first inquiry to the delivery of your final images, we prioritize providing an exceptional, personalized experience that makes you feel valued and understood.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Client consultation" 
                className="w-full h-64 object-cover object-center rounded-2xl shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="bg-gradient-to-r from-rose-100/80 via-amber-50/90 to-orange-100/80 text-rose-900 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p 
            className="text-2xl font-serif italic mb-8 drop-shadow-md"
            variants={slideUp}
          >
            "Working with Life and Times Photography was the best decision we made for our wedding. Their ability to capture not just images, but emotions and moments, gave us memories we'll cherish forever."
          </motion.p>
          <motion.p 
            className="uppercase tracking-widest drop-shadow-md"
            variants={slideUp}
          >
            Emma & David, 2024
          </motion.p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-serif text-rose-900 mb-6"
            variants={slideUp}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            className="text-rose-800 mb-10 leading-relaxed"
            variants={slideUp}
          >
            We'd love to hear about your project and how we can help bring your vision to life. Contact us today to schedule a consultation.
          </motion.p>
          <motion.div variants={slideUp}>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-rose-600 to-orange-600 text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:shadow-xl transition-shadow duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
