import React, { useEffect, useRef } from 'react';

const ScrollVideo = ({ videoSrc, className }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Calculate video duration once metadata is loaded
    video.addEventListener('loadedmetadata', () => {
      const handleScroll = () => {
        // Get scroll position relative to the container
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);
        
        // Set video currentTime based on scroll position
        if (video.duration) {
          video.currentTime = scrollPercentage * video.duration;
        }
      };

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
      
      // Initial call to set video position
      handleScroll();

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        playsInline
        muted
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-brown-dark/50 via-luxury-brown-dark/30 to-luxury-brown-dark/50" />
    </div>
  );
};

export default ScrollVideo;