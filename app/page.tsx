'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Target,
    title: 'Targeted Practice',
    description: 'Practice for specific job positions with tailored questions and scenarios'
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    description: 'Choose from 1, 3, or 5-minute sessions that fit your schedule'
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get real-time feedback on your responses and communication skills'
  },
  {
    icon: Users,
    title: 'Realistic Experience',
    description: 'AI-powered interviews that simulate real hiring scenarios'
  }
];

const features = [
  'Practice common interview questions',
  'Improve your communication skills',
  'Build confidence before real interviews',
  'Get personalized feedback',
  'Track your progress over time',
  'Available 24/7 for practice'
];

export default function OnboardingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Master Your Next
                <span className="gradient-text block">Interview</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Practice with AI-powered interactive interviews. Build confidence, 
                improve your skills, and land your dream job.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/form" className="btn-primary inline-flex items-center gap-2">
                Start Practicing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary">
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose AI Interview Practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your interview skills with cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive platform provides all the tools and practice you need 
                to excel in any interview situation.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Join thousands of professionals who have improved their interview 
                    skills and landed their dream jobs.
                  </p>
                  <Link href="/form" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300">
                    Begin Your Practice
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Dream Job Awaits
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let interview anxiety hold you back. Start practicing today 
              and transform your career prospects.
            </p>
            <Link href="/form" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}