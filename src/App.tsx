/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Star, 
  CheckCircle2, 
  GraduationCap, 
  MessageCircle,
  X,
  Send,
  Loader2,
  Quote,
  ArrowRight,
  CalendarDays
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
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
      
      {/* Floating Action Button for Chat */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition-colors z-50 flex items-center justify-center"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* AI Chatbot Modal */}
      {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">Happy Minds</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</a>
            <a href="#blog" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Blog</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          <a 
            href="tel:912051990" 
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="hidden sm:inline">912051990</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto"
        >
          Home Tuition for Class 1–5 in <span className="text-indigo-600">Lucknow</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Personalized classes, homework help, and strong foundational support in Math and English. Located in Himalaya Enclaves.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="tel:912051990"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 w-full sm:w-auto"
          >
            Claim 2 Days Free Trial
          </a>
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all w-full sm:w-auto"
          >
            Learn More
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm font-medium text-slate-500 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Personalized Attention</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span>Experienced Tutor</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
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
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Math & English Focus",
      description: "Specialized attention to core subjects, building a strong foundation for future academic success.",
      icon: <Star className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Exam Preparation",
      description: "Structured revision plans and practice tests to help students perform their best during school exams.",
      icon: <GraduationCap className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Comprehensive Tuition for Class 1 to 5</h2>
          <p className="mt-4 text-lg text-slate-600">We provide a holistic learning experience tailored to young minds, focusing on clarity and confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timings() {
  return (
    <section id="timings" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Flexible Timings for Busy Parents</h2>
              <p className="text-indigo-100 text-lg mb-8">We understand that every family has a different schedule. Our classes are designed to fit seamlessly into your child's after-school routine.</p>
              
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-indigo-200" />
                <div>
                  <p className="text-sm text-indigo-200 font-medium uppercase tracking-wider">Daily Batches</p>
                  <p className="text-2xl font-bold text-white">4:00 PM – 7:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-700 p-10 md:p-16 flex flex-col justify-center border-t md:border-t-0 md:border-l border-indigo-500/30">
              <h3 className="text-xl font-bold text-white mb-6">Why this time works:</h3>
              <ul className="space-y-4">
                {[
                  "After school rest period is over",
                  "Optimal focus and energy levels",
                  "Leaves time for family dinner",
                  "Consistent daily routine"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <span className="text-indigo-50">{item}</span>
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
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">Why Choose Happy Minds?</h2>
            <p className="text-lg text-slate-600 mb-8">Finding the right home tutor in Lucknow can be challenging. We make it simple by offering a nurturing environment where your child can thrive academically.</p>
            
            <div className="space-y-6">
              {[
                { title: "Individual Attention", desc: "Small batch sizes ensure your child's specific doubts are addressed." },
                { title: "Regular Updates", desc: "Weekly progress reports to keep parents informed about their child's growth." },
                { title: "Interactive Learning", desc: "Moving beyond rote memorization to actual concept understanding." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-indigo-600">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                alt="Happy student learning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-sm font-medium text-slate-900">"My son's math scores improved significantly within just two months!"</p>
              <p className="text-xs text-slate-500 mt-2">— Priya S., Parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalTrust() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">Home Tuition Available in Himalaya Enclaves, Lucknow</h2>
          <p className="text-xl text-slate-300 mb-12">We are your neighborhood education partner, providing a safe and easily accessible learning environment right in your community.</p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-300">Nearby Availability</h3>
              <p className="text-slate-400 text-sm">Located centrally in Himalaya Enclaves, saving commute time for kids.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-300">Safe Environment</h3>
              <p className="text-slate-400 text-sm">A comfortable, distraction-free home setting optimized for focused learning.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-indigo-300">Easy Accessibility</h3>
              <p className="text-slate-400 text-sm">Convenient drop-off and pick-up for parents living in and around the area.</p>
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
      rating: 5
    },
    {
      quote: "Finding a reliable home tutor in Himalaya Enclaves was tough until we found Happy Minds. The flexible timings and dedicated homework support are exactly what we needed.",
      author: "R. Verma",
      role: "Parent of Class 2 Student",
      rating: 5
    },
    {
      quote: "My son used to dread English grammar, but the interactive learning methods here made it his favorite subject. Highly recommend their class 1-5 tuition.",
      author: "Amit K.",
      role: "Parent of Class 5 Student",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Hear From Our Parents</h2>
          <p className="mt-4 text-lg text-slate-600">Discover how our personalized home tuition in Lucknow has positively impacted student grades and confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="w-10 h-10 text-indigo-100 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
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
      readTime: "4 min read"
    },
    {
      title: "Benefits of Personalized Home Tutoring",
      excerpt: "Why one-on-one attention matters. Learn how a dedicated home tutor in Himalaya Enclaves can significantly boost your child's academic confidence and grades.",
      date: "Nov 05, 2023",
      readTime: "5 min read"
    },
    {
      title: "Exciting Updates from Happy Minds",
      excerpt: "We are thrilled to announce new interactive learning modules for our home tuition in Lucknow. Read more about our upcoming initiatives for young learners.",
      date: "Dec 18, 2023",
      readTime: "3 min read"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Latest Insights & News</h2>
            <p className="text-lg text-slate-600">Read our latest articles on education, study tips, and updates from Happy Minds Home Tuition.</p>
          </div>
          <a href="#blog" className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-700 transition-colors gap-2">
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <a href="#blog" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700 transition-colors gap-1.5 mt-auto">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    <section className="py-24 bg-indigo-600 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Give Your Child the Academic Edge</h2>
        <p className="text-xl text-indigo-100 mb-10">Experience our teaching methodology firsthand. No commitment required.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:912051990"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white rounded-full hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <PhoneCall className="w-5 h-5 mr-2" />
            Call 912051990 Now
          </a>
          <div className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-800 rounded-full border border-indigo-500">
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
    <section id="contact" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-slate-600 mb-8">Ready to start? Have questions? Reach out to us directly via phone or visit us in Himalaya Enclaves.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                  <PhoneCall className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Phone</h3>
                  <button onClick={handleCopyPhone} className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-3 text-left">
                    912051990
                    {copied && <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Copied!</span>}
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Location</h3>
                  <a 
                    href="https://maps.google.com/?q=Himalaya+Enclaves,+Lucknow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-slate-600 hover:text-indigo-600 transition-colors block"
                  >
                    Himalaya Enclaves, Lucknow<br/>Uttar Pradesh, India
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Inquiry</h3>
            <form 
              action={import.meta.env.VITE_FORMSPREE_URL || "#"} 
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Parent's Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all" placeholder="912051990" />
                </div>
                <div>
                  <label htmlFor="class" className="block text-sm font-medium text-slate-700 mb-1">Child's Class</label>
                  <select id="class" name="class" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-all bg-white">
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                    <option>Class 4</option>
                    <option>Class 5</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors mt-4">
                Request Callback
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
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-indigo-500" />
          <span className="font-bold text-lg text-white tracking-tight">Happy Minds</span>
        </div>
        <p className="text-sm text-center md:text-left">© {new Date().getFullYear()} Happy Minds Home Tuition. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: 'Hi! I am the Happy Minds Assistant. I can help you with information about our classes, timings, or find directions to Himalaya Enclaves using Google Maps. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: "You are a helpful assistant for 'Happy Minds Home Tuition' located in 'Himalaya Enclaves, Lucknow'. They offer tuition for classes 1-5, timings 4 PM - 7 PM, contact 912051990, 2 days free trial. Be concise and friendly." },
        ...messages.map(m => ({ role: m.role, content: m.text })),
        { role: "user", content: userMsg }
      ];

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-free", // Free model on OpenRouter
          messages: apiMessages
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const responseText = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that.";

      setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please call us at 912051990." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 flex flex-col" style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}>
      {/* Header */}
      <div className="bg-indigo-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold">Happy Minds Assistant</span>
        </div>
        <button onClick={onClose} className="text-indigo-100 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'}`}>
              <div className="prose prose-sm prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:font-bold">
                <ReactMarkdown>
                  {msg.text}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
              <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className="p-3 bg-white border-t border-slate-200">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2"
        >
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about classes, location..."
            className="flex-1 px-4 py-2 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 rounded-full text-sm outline-none transition-all"
          />
          <button 
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
