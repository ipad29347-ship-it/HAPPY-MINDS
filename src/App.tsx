/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import logoImage from './assets/logo.png';
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  Quote,
  ArrowRight,
  CalendarDays,
  Smile
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans text-stone-800 overflow-x-hidden selection:bg-rose-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Timings />
        <WhyChooseUs />
        <Testimonials />
        <LocalTrust />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-amber-50/90 backdrop-blur-md z-40 border-b-4 border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Happy Minds Logo" className="w-12 h-12 rounded-xl border-2 border-stone-800 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] object-cover bg-white" />
            <span className="font-extrabold text-2xl tracking-tight text-stone-800">Happy Minds</span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-bold">
            <a href="#services" className="text-stone-600 hover:text-rose-500 hover:-translate-y-1 transition-transform">Services</a>
            <a href="#why-us" className="text-stone-600 hover:text-rose-500 hover:-translate-y-1 transition-transform">Why Us</a>
            <a href="#testimonials" className="text-stone-600 hover:text-rose-500 hover:-translate-y-1 transition-transform">Testimonials</a>
            <a href="#blog" className="text-stone-600 hover:text-rose-500 hover:-translate-y-1 transition-transform">Blog</a>
            <a href="#contact" className="text-stone-600 hover:text-rose-500 hover:-translate-y-1 transition-transform">Contact</a>
          </div>
          <a 
            href="tel:912051990" 
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-black text-white bg-rose-500 rounded-full hover:bg-rose-400 transition-colors gap-2 border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="hidden sm:inline text-lg">912051990</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100 via-amber-50 to-amber-50"></div>
      
      {/* Decorative cartoony blobs */}
      <div className="absolute top-40 left-10 w-24 h-24 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-24 h-24 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-block mb-6 bg-yellow-300 px-6 py-2 rounded-full border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transform -rotate-3"
        >
          <span className="font-black text-stone-800 text-lg uppercase tracking-wider">Fun Learning Starts Here! 🚀</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-stone-800 max-w-4xl mx-auto leading-tight drop-shadow-sm"
        >
          Home Tuition for Class 1–5 in <span className="text-rose-500 relative inline-block">
            Lucknow
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-400" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/></svg>
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto font-medium"
        >
          Personalized classes, homework help, and strong foundational support in Math and English. Located in Himalaya Enclaves.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="tel:912051990"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-black text-white bg-rose-500 rounded-full hover:bg-rose-400 transition-all border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[4px] hover:translate-x-[4px] w-full sm:w-auto"
          >
            Claim 2 Days Free Trial!
          </a>
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-xl font-black text-stone-800 bg-white rounded-full hover:bg-amber-100 transition-all border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[4px] hover:translate-x-[4px] w-full sm:w-auto"
          >
            Learn More
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-lg font-bold text-stone-600 flex-wrap"
        >
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-stone-800 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] transform rotate-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <span>Personalized Attention</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-stone-800 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] transform -rotate-1">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <span>Experienced Tutor</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border-2 border-stone-800 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] transform rotate-1">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            <span>Safe Environment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Homework Support",
      description: "Daily assistance with school assignments to ensure concepts are understood and tasks are completed on time.",
      icon: <BookOpen className="w-8 h-8 text-stone-800" />,
      color: "bg-sky-300"
    },
    {
      title: "Math & English Focus",
      description: "Specialized attention to core subjects, building a strong foundation for future academic success.",
      icon: <Star className="w-8 h-8 text-stone-800" />,
      color: "bg-yellow-300"
    },
    {
      title: "Exam Preparation",
      description: "Structured revision plans and practice tests to help students perform their best during school exams.",
      icon: <GraduationCap className="w-8 h-8 text-stone-800" />,
      color: "bg-emerald-300"
    }
  ];

  return (
    <section id="services" className="py-20 bg-amber-100 border-y-4 border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-stone-800 sm:text-5xl drop-shadow-sm">Comprehensive Tuition for Class 1 to 5</h2>
          <p className="mt-6 text-xl text-stone-600 font-medium">We provide a holistic learning experience tailored to young minds, focusing on clarity and confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-2 transition-transform"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl border-4 border-stone-800 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transform -rotate-3`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-4">{service.title}</h3>
              <p className="text-stone-600 font-medium text-lg leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timings() {
  return (
    <section id="timings" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-rose-400 rounded-[3rem] overflow-hidden border-4 border-stone-800 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)]">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-4 right-4 text-rose-300 opacity-50">
                <Clock className="w-32 h-32" />
              </div>
              <h2 className="text-4xl font-black text-stone-900 mb-6 relative z-10">Flexible Timings for Busy Parents</h2>
              <p className="text-stone-900 font-medium text-xl mb-8 relative z-10">We understand that every family has a different schedule. Our classes are designed to fit seamlessly into your child's after-school routine.</p>
              
              <div className="flex items-center gap-6 bg-white p-6 rounded-3xl border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative z-10 transform rotate-1">
                <div className="bg-yellow-300 p-3 rounded-2xl border-2 border-stone-800">
                  <Clock className="w-10 h-10 text-stone-800" />
                </div>
                <div>
                  <p className="text-stone-500 font-bold uppercase tracking-wider mb-1">Daily Batches</p>
                  <p className="text-3xl font-black text-stone-800">4:00 PM – 7:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-rose-500 p-10 md:p-16 flex flex-col justify-center border-t-4 md:border-t-0 md:border-l-4 border-stone-800">
              <h3 className="text-3xl font-black text-stone-900 mb-8">Why this time works:</h3>
              <ul className="space-y-6">
                {[
                  "After school rest period is over",
                  "Optimal focus and energy levels",
                  "Leaves time for family dinner",
                  "Consistent daily routine"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl border-2 border-stone-800/20">
                    <div className="bg-emerald-400 rounded-full p-1 border-2 border-stone-800 shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-stone-800" />
                    </div>
                    <span className="text-stone-900 font-bold text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-amber-100 border-y-4 border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-stone-800 sm:text-5xl mb-6">Why Choose Happy Minds?</h2>
            <p className="text-xl text-stone-600 font-medium mb-10">Finding the right home tutor in Lucknow can be challenging. We make it simple by offering a nurturing environment where your child can thrive academically.</p>
            
            <div className="space-y-8">
              {[
                { title: "Individual Attention", desc: "Small batch sizes ensure your child's specific doubts are addressed.", color: "bg-sky-300" },
                { title: "Regular Updates", desc: "Weekly progress reports to keep parents informed about their child's growth.", color: "bg-yellow-300" },
                { title: "Interactive Learning", desc: "Moving beyond rote memorization to actual concept understanding.", color: "bg-rose-300" }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 bg-white p-6 rounded-3xl border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} border-4 border-stone-800 flex items-center justify-center shrink-0 transform -rotate-6`}>
                    <span className="font-black text-2xl text-stone-800">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-stone-800 mb-2">{feature.title}</h3>
                    <p className="text-stone-600 font-medium text-lg">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] bg-white overflow-hidden relative border-4 border-stone-800 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Happy student learning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-yellow-300 p-6 rounded-3xl border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] max-w-xs transform -rotate-3 z-10">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-rose-500 text-rose-500" />)}
              </div>
              <p className="text-lg font-bold text-stone-800 leading-snug">"My son's math scores improved significantly within just two months!"</p>
              <p className="text-sm font-black text-stone-600 mt-3 uppercase">— Priya S., Parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalTrust() {
  return (
    <section className="py-20 bg-stone-800 text-white overflow-hidden relative border-b-4 border-stone-900">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-rose-500 rounded-3xl border-4 border-stone-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8 transform rotate-3">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-black sm:text-5xl mb-6 text-yellow-300 drop-shadow-md">Home Tuition Available in Himalaya Enclaves, Lucknow</h2>
          <p className="text-2xl text-amber-50 mb-12 font-medium">We are your neighborhood education partner, providing a safe and easily accessible learning environment right in your community.</p>
          
          <div className="grid sm:grid-cols-3 gap-8 text-left">
            <div className="bg-stone-700 p-8 rounded-3xl border-4 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-black text-2xl mb-3 text-sky-300">Nearby Availability</h3>
              <p className="text-stone-200 text-lg font-medium">Located centrally in Himalaya Enclaves, saving commute time for kids.</p>
            </div>
            <div className="bg-stone-700 p-8 rounded-3xl border-4 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-black text-2xl mb-3 text-rose-300">Safe Environment</h3>
              <p className="text-stone-200 text-lg font-medium">A comfortable, distraction-free home setting optimized for focused learning.</p>
            </div>
            <div className="bg-stone-700 p-8 rounded-3xl border-4 border-stone-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
              <h3 className="font-black text-2xl mb-3 text-emerald-300">Easy Accessibility</h3>
              <p className="text-stone-200 text-lg font-medium">Convenient drop-off and pick-up for parents living in and around the area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The personalized attention my daughter received at Happy Minds completely transformed her approach to Math. Her grades went from C to A in just one term!",
      author: "Mrs. Sharma",
      role: "Parent of Class 4 Student",
      rating: 5,
      color: "bg-sky-100"
    },
    {
      quote: "Finding a reliable home tutor in Himalaya Enclaves was tough until we found Happy Minds. The flexible timings and dedicated homework support are exactly what we needed.",
      author: "R. Verma",
      role: "Parent of Class 2 Student",
      rating: 5,
      color: "bg-yellow-100"
    },
    {
      quote: "My son used to dread English grammar, but the interactive learning methods here made it his favorite subject. Highly recommend their class 1-5 tuition.",
      author: "Amit K.",
      role: "Parent of Class 5 Student",
      rating: 5,
      color: "bg-emerald-100"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-stone-800 sm:text-5xl">Hear From Our Parents</h2>
          <p className="mt-6 text-xl text-stone-600 font-medium">Discover how our personalized home tuition in Lucknow has positively impacted student grades and confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${testimonial.color} p-8 rounded-3xl border-4 border-stone-800 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] relative hover:-translate-y-2 transition-transform`}
            >
              <div className="bg-white w-14 h-14 rounded-full border-4 border-stone-800 flex items-center justify-center absolute -top-6 -right-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] transform rotate-12">
                <Quote className="w-6 h-6 text-stone-800" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-rose-500 text-rose-500" />
                ))}
              </div>
              <p className="text-stone-800 font-bold text-lg mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="bg-white p-4 rounded-2xl border-2 border-stone-800">
                <h4 className="font-black text-stone-900 text-xl">{testimonial.author}</h4>
                <p className="text-sm font-bold text-stone-500 uppercase mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    {
      title: "Tips for Studying Effectively at Home",
      excerpt: "Discover proven strategies to help your child maintain focus during their daily study sessions. Perfect for students taking tuition for class 1 to 5.",
      date: "Oct 12, 2023",
      readTime: "4 min read",
      color: "bg-rose-200"
    },
    {
      title: "Benefits of Personalized Home Tutoring",
      excerpt: "Why one-on-one attention matters. Learn how a dedicated home tutor in Himalaya Enclaves can significantly boost your child's academic confidence and grades.",
      date: "Nov 05, 2023",
      readTime: "5 min read",
      color: "bg-sky-200"
    },
    {
      title: "Exciting Updates from Happy Minds",
      excerpt: "We are thrilled to announce new interactive learning modules for our home tuition in Lucknow. Read more about our upcoming initiatives for young learners.",
      date: "Dec 18, 2023",
      readTime: "3 min read",
      color: "bg-yellow-200"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-amber-100 border-y-4 border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-stone-800 sm:text-5xl mb-6">Latest Insights & News</h2>
            <p className="text-xl text-stone-600 font-medium">Read our latest articles on education, study tips, and updates from Happy Minds Home Tuition.</p>
          </div>
          <a href="#blog" className="inline-flex items-center font-black text-xl text-rose-600 hover:text-rose-500 transition-colors gap-2 bg-white px-6 py-3 rounded-full border-4 border-stone-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[2px] hover:translate-x-[2px]">
            View All Posts <ArrowRight className="w-6 h-6" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group flex flex-col justify-between p-8 rounded-3xl bg-white border-4 border-stone-800 hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]"
            >
              <div>
                <div className={`inline-flex items-center gap-3 text-sm font-bold text-stone-800 mb-6 ${post.color} px-4 py-2 rounded-xl border-2 border-stone-800`}>
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-stone-800 mb-4 group-hover:text-rose-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 font-medium text-lg mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <a href="#blog" className="inline-flex items-center font-black text-lg text-stone-800 hover:text-rose-500 transition-colors gap-2 mt-auto">
                Read More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-rose-500 text-center px-4 border-b-4 border-stone-800 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full border-4 border-stone-800 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-sky-300 rounded-full border-4 border-stone-800 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-20 right-20 w-12 h-12 bg-emerald-300 rounded-full border-4 border-stone-800 animate-bounce" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-md">Give Your Child the Academic Edge!</h2>
        <p className="text-2xl text-rose-100 mb-12 font-bold">Experience our teaching methodology firsthand. No commitment required.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:912051990"
            className="inline-flex items-center justify-center px-8 py-5 text-xl font-black text-stone-800 bg-yellow-300 rounded-full hover:bg-yellow-200 transition-all border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[4px] hover:translate-x-[4px]"
          >
            <PhoneCall className="w-6 h-6 mr-3" />
            Call 912051990 Now
          </a>
          <div className="inline-flex items-center justify-center px-8 py-5 text-xl font-black text-white bg-sky-500 rounded-full border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transform rotate-2">
            Get 2 Days Free Trial
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("912051990");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black text-stone-800 mb-6">Get in Touch</h2>
            <p className="text-xl text-stone-600 font-medium mb-10">Ready to start? Have questions? Reach out to us directly via phone or visit us in Himalaya Enclaves.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 bg-white p-6 rounded-3xl border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]">
                <div className="w-16 h-16 bg-rose-300 border-4 border-stone-800 rounded-2xl flex items-center justify-center shrink-0 transform -rotate-6">
                  <PhoneCall className="w-8 h-8 text-stone-800" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-500 uppercase tracking-wider mb-2">Phone</h3>
                  <button onClick={handleCopyPhone} className="text-3xl font-black text-rose-500 hover:text-rose-600 transition-colors flex items-center gap-3 text-left">
                    912051990
                    {copied && <span className="text-sm font-black bg-emerald-300 text-stone-800 px-3 py-1 rounded-full border-2 border-stone-800">Copied!</span>}
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-6 bg-white p-6 rounded-3xl border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]">
                <div className="w-16 h-16 bg-sky-300 border-4 border-stone-800 rounded-2xl flex items-center justify-center shrink-0 transform rotate-3">
                  <MapPin className="w-8 h-8 text-stone-800" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-stone-500 uppercase tracking-wider mb-2">Location</h3>
                  <a 
                    href="https://maps.google.com/?q=Himalaya+Enclaves,+Lucknow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-stone-700 hover:text-sky-500 transition-colors block leading-snug"
                  >
                    Himalaya Enclaves, Lucknow<br/>Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-[3rem] border-4 border-stone-800 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)]">
            <h3 className="text-3xl font-black text-stone-800 mb-8 flex items-center gap-3">
              <Smile className="w-8 h-8 text-yellow-400" />
              Quick Inquiry
            </h3>
            <form 
              action={import.meta.env.VITE_FORMSPREE_URL || "#"} 
              method="POST" 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-stone-700 mb-2">Parent's Name</label>
                <input type="text" id="name" name="name" required className="w-full px-5 py-4 rounded-2xl border-4 border-stone-800 focus:ring-0 focus:border-rose-500 outline-none transition-all font-medium text-lg shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-stone-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-5 py-4 rounded-2xl border-4 border-stone-800 focus:ring-0 focus:border-rose-500 outline-none transition-all font-medium text-lg shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]" placeholder="912051990" />
                </div>
                <div>
                  <label htmlFor="class" className="block text-lg font-bold text-stone-700 mb-2">Child's Class</label>
                  <select id="class" name="class" className="w-full px-5 py-4 rounded-2xl border-4 border-stone-800 focus:ring-0 focus:border-rose-500 outline-none transition-all bg-white font-medium text-lg shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                    <option>Class 4</option>
                    <option>Class 5</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-5 bg-rose-500 text-white text-xl font-black rounded-2xl hover:bg-rose-400 transition-colors mt-4 border-4 border-stone-800 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[4px] hover:translate-x-[4px]">
                Request Callback 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t-8 border-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Happy Minds Logo" className="w-10 h-10 rounded-lg border-2 border-stone-950 object-cover bg-white" />
          <span className="font-black text-2xl text-white tracking-tight">Happy Minds</span>
        </div>
        <p className="text-lg font-medium text-center md:text-left">© {new Date().getFullYear()} Happy Minds Home Tuition. All rights reserved.</p>
        <div className="flex gap-8 text-lg font-bold">
          <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
