import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [nameVisible, setNameVisible] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(0);

  useEffect(() => {
    // Show content after initial delay
    const showTimer = setTimeout(() => setShowContent(true), 1500);

    // Loading text messages
    const loadingMessages = [
      'Initializing...',
      'Loading assets...',
      'Preparing portfolio...',
      'Setting up 3D models...',
      'Configuring animations...',
      'Almost ready...',
      'Welcome!'
    ];

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length - 1) {
        setLoadingText(loadingMessages[messageIndex]);
        messageIndex++;
      }
    }, 2500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setLoadingText('Welcome!');
          setTimeout(() => {
            onLoadingComplete();
          }, 2000);
          return 100;
        }
        return prev + Math.random() * 4 + 2;
      });
    }, 400);

    return () => {
      clearTimeout(showTimer);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onLoadingComplete]);

  useEffect(() => {
    if (showContent) {
      // Show name after content appears
      const nameTimer = setTimeout(() => setNameVisible(true), 1000);
      
      // Animate letters one by one
      const letterInterval = setInterval(() => {
        setLettersVisible(prev => {
          if (prev >= 26) { // "Gopi Vardhan Vallabhaneni" has 23 characters
            clearInterval(letterInterval);
            return 26;
          }
          return prev + 1;
        });
      }, 300);

      return () => {
        clearTimeout(nameTimer);
        clearInterval(letterInterval);
      };
    }
  }, [showContent]);

  const fullName = "Gopi Vardhan Vallabhaneni";
  const visibleName = fullName.slice(0, lettersVisible);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center">
        {/* Name Animation */}
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-widest leading-tight">
              {visibleName.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    index < lettersVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    color: letter === ' ' ? 'transparent' : 'white'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          
          <div className="loading-fade-in-up" style={{ animationDelay: '2s' }}>
            <p className="text-lg md:text-xl text-gray-400 mb-16 tracking-wide font-light">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>
        </div>

        {/* Minimalist Progress Bar */}
        <div className={`w-80 md:w-96 mx-auto transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative">
            {/* Background bar */}
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              {/* Progress bar */}
              <div 
                className="h-full bg-white rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/50 blur-sm"></div>
              </div>
            </div>
            
            {/* Progress percentage */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <span className="text-sm text-gray-500 font-light">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Minimal loading indicators */}
        <div className={`flex justify-center space-x-2 mt-8 transition-all duration-1000 delay-800 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '800ms' }}></div>
        </div>

        {/* Loading text */}
        <div className={`mt-6 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm font-light">
            {loadingText}
          </p>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-gray-800 rounded-full animate-spin" style={{ animationDuration: '60s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 border border-gray-800 rounded-full animate-spin" style={{ animationDuration: '50s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-8 h-8 border-l border-t border-gray-700"></div>
      <div className="absolute top-12 right-12 w-8 h-8 border-r border-t border-gray-700"></div>
      <div className="absolute bottom-12 left-12 w-8 h-8 border-l border-b border-gray-700"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border-r border-b border-gray-700"></div>
    </div>
  );
};

export default LoadingScreen; 