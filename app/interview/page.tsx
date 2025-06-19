'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Camera, CameraOff, Mic, MicOff, RotateCcw, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function InterviewPage() {
  const searchParams = useSearchParams();
  const position = searchParams.get('position') || 'Software Engineer';
  const duration = parseInt(searchParams.get('duration') || '3');
  
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isInterviewComplete, setIsInterviewComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample questions based on position
  const questions = [
    `Tell me about yourself and why you're interested in the ${position} role.`,
    `What experience do you have that makes you a good fit for this ${position} position?`,
    `Describe a challenging project you've worked on and how you overcame obstacles.`,
    `Where do you see yourself in 5 years in your ${position} career?`,
    `Do you have any questions about our company or the ${position} role?`
  ];

  useEffect(() => {
    // Simulate loading time for Tavus video generation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsInterviewComplete(true);
      setIsRecording(false);
    }
    return () => clearTimeout(timer);
  }, [isRecording, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startInterview = () => {
    setIsRecording(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartInterview = () => {
    setIsRecording(false);
    setTimeLeft(duration * 60);
    setCurrentQuestion(0);
    setIsInterviewComplete(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Generating Your AI Interviewer</h2>
          <p className="text-gray-600">Please wait while we prepare your personalized interview experience...</p>
        </motion.div>
      </div>
    );
  }

  if (isInterviewComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 gradient-text">Interview Complete!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Great job completing your {position} interview practice session.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Position:</span>
                  <div className="font-medium">{position}</div>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <div className="font-medium">{duration} minutes</div>
                </div>
                <div>
                  <span className="text-gray-500">Questions:</span>
                  <div className="font-medium">{questions.length} answered</div>
                </div>
                <div>
                  <span className="text-gray-500">Status:</span>
                  <div className="font-medium text-green-600">Completed</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartInterview}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Practice Again
              </button>
              <Link href="/form" className="btn-primary inline-flex items-center gap-2">
                Try Different Position
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/form" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Form
          </Link>
          
          <div className="text-center">
            <h1 className="text-xl font-semibold text-gray-800">{position} Interview</h1>
            <p className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-mono font-bold text-gray-800">{formatTime(timeLeft)}</div>
              <div className="text-xs text-gray-500">Time Remaining</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interview Area */}
      <div className="flex-1 grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* AI Interviewer Video */}
        <div className="bg-gray-800 flex items-center justify-center p-8">
          <div className="w-full max-w-md aspect-video bg-gray-700 rounded-2xl overflow-hidden relative">
            {/* Placeholder for Tavus AI Video */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                </div>
                <p className="text-lg font-medium">AI Interviewer</p>
                <p className="text-sm opacity-75">Tavus Generated</p>
              </div>
            </div>
            
            {/* Recording indicator */}
            {isRecording && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                LIVE
              </div>
            )}
          </div>
        </div>

        {/* User Video and Controls */}
        <div className="bg-white flex flex-col">
          {/* User Video */}
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="w-full max-w-md aspect-video bg-gray-100 rounded-2xl overflow-hidden relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
              />
              {!isCameraOn && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <CameraOff className="w-12 h-12 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Question Display */}
          <div className="p-8 bg-gray-50">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Current Question:</h3>
              <p className="text-gray-700 leading-relaxed">{questions[currentQuestion]}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="p-8 bg-white border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsCameraOn(!isCameraOn)}
                  className={`p-3 rounded-full transition-colors ${
                    isCameraOn ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {isCameraOn ? <Camera className="w-6 h-6" /> : <CameraOff className="w-6 h-6" />}
                </button>
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`p-3 rounded-full transition-colors ${
                    isMicOn ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                {!isRecording ? (
                  <button
                    onClick={startInterview}
                    className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                  >
                    Start Interview
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestion >= questions.length - 1}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                  >
                    {currentQuestion >= questions.length - 1 ? 'Final Question' : 'Next Question'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}