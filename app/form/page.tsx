'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Briefcase, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const jobPositions = [
  'Software Engineer',
  'Product Manager',
  'Data Scientist',
  'UX/UI Designer',
  'Marketing Manager',
  'Sales Representative',
  'Business Analyst',
  'Project Manager',
  'DevOps Engineer',
  'Customer Success Manager',
  'Other'
];

const interviewDurations = [
  { value: 1, label: '1 Minute', description: 'Quick practice session' },
  { value: 3, label: '3 Minutes', description: 'Standard practice' },
  { value: 5, label: '5 Minutes', description: 'Comprehensive session' }
];

export default function FormPage() {
  const [jobPosition, setJobPosition] = useState('');
  const [customPosition, setCustomPosition] = useState('');
  const [duration, setDuration] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobPosition || !duration) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const finalPosition = jobPosition === 'Other' ? customPosition : jobPosition;
    const params = new URLSearchParams({
      position: finalPosition,
      duration: duration.toString()
    });
    
    router.push(`/interview?${params.toString()}`);
  };

  const isFormValid = jobPosition && duration && (jobPosition !== 'Other' || customPosition.trim());

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Customize Your Interview
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about the position you're preparing for
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Job Position Selection */}
            <div>
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-800 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                What position are you interviewing for?
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {jobPositions.map((position) => (
                  <motion.button
                    key={position}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setJobPosition(position)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                      jobPosition === position
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {position}
                  </motion.button>
                ))}
              </div>

              {jobPosition === 'Other' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <input
                    type="text"
                    placeholder="Enter your job position"
                    value={customPosition}
                    onChange={(e) => setCustomPosition(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </motion.div>
              )}
            </div>

            {/* Duration Selection */}
            <div>
              <label className="flex items-center gap-3 text-xl font-semibold text-gray-800 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                How long would you like to practice?
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interviewDurations.map((option) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setDuration(option.value)}
                    className={`p-6 rounded-xl border-2 text-center transition-all duration-300 ${
                      duration === option.value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">{option.label}</div>
                    <div className="text-sm opacity-75">{option.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                  isFormValid && !isLoading
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Preparing Your Interview...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Start Interview Practice
                    <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">💡 Pro Tips for Your Practice Session</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Find a quiet space with good lighting</li>
            <li>• Look directly at the camera when speaking</li>
            <li>• Speak clearly and at a moderate pace</li>
            <li>• Have your resume and notes ready for reference</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}