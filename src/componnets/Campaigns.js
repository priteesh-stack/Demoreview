import React, { useRef, useState, useCallback, useEffect } from 'react';
import videoFile from '../assets/images/videoplayback.mp4'
import imageFile from '../assets/images/dog.jpeg'

import videoFile2 from '../assets/images/videoplayback.mp4'
import imageFile2 from '../assets/images/dog.jpeg'

import videoFile3 from '../assets/images/videoplayback.mp4'
import imageFile3 from '../assets/images/dog.jpeg'

import videoFile4 from '../assets/images/videoplayback.mp4'
import imageFile4 from '../assets/images/dog.jpeg'

import videoFile5 from '../assets/images/videoplayback.mp4'
import imageFile5 from '../assets/images/dog.jpeg'


const Campaigns = () => {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);


  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const containerRef5 = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const [currentSlide5, setCurrentSlide5] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [currentTime2, setCurrentTime2] = useState(0);
  const [currentTime3, setCurrentTime3] = useState(0);
  const [currentTime4, setCurrentTime4] = useState(0);
  const [currentTime5, setCurrentTime5] = useState(0);

  const [duration, setDuration] = useState(0);
  const [duration2, setDuration2] = useState(0);
  const [duration3, setDuration3] = useState(0);
  const [duration4, setDuration4] = useState(0);
  const [duration5, setDuration5] = useState(0);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreen2, setIsFullscreen2] = useState(false);
  const [isFullscreen3, setIsFullscreen3] = useState(false);
  const [isFullscreen4, setIsFullscreen4] = useState(false);
  const [isFullscreen5, setIsFullscreen5] = useState(false);


  const slides = [
    { type: 'video', src: videoFile },
    { type: 'image', src: imageFile }
  ];

  const slides2 = [
    { type: 'video', src: videoFile2 },
    { type: 'image', src: imageFile2 }
  ];

  const slides3 = [
    { type: 'video', src: videoFile3 },
    { type: 'image', src: imageFile3 }
  ];

  const slides4 = [
    { type: 'video', src: videoFile4 },
    { type: 'image', src: imageFile4 }
  ];

  const slides5 = [
    { type: 'video', src: videoFile5 },
    { type: 'image', src: imageFile5 }
  ];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };



  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(error => {
        console.error("Playback failed:", error);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);


  const togglePlayPause2 = useCallback(() => {
    const video = videoRef2.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying2(true)).catch(error => {
        console.error("Playback failed:", error);
      });
    } else {
      video.pause();
      setIsPlaying2(false);
    }
  }, []);

  const togglePlayPause3 = useCallback(() => {
    const video = videoRef3.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying3(true)).catch(error => {
        console.error("Playback failed:", error);
      });
    } else {
      video.pause();
      setIsPlaying3(false);
    }
  }, []);


  const togglePlayPause4 = useCallback(() => {
    const video = videoRef4.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying4(true)).catch(error => {
        console.error("Playback failed:", error);
      });
    } else {
      video.pause();
      setIsPlaying4(false);
    }
  }, []);

  const togglePlayPause5 = useCallback(() => {
    const video = videoRef5.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying5(true)).catch(error => {
        console.error("Playback failed:", error);
      });
    } else {
      video.pause();
      setIsPlaying5(false);
    }
  }, []);



  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) { // Firefox
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) { // Chrome, Safari and Opera
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) { // IE/Edge
        container.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  }, []);



  const toggleFullscreen2 = useCallback(() => {
    const container = containerRef2.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      setIsFullscreen2(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen2(false);
    }
  }, []);


  const toggleFullscreen3 = useCallback(() => {
    const container = containerRef3.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      setIsFullscreen3(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen3(false);
    }
  }, []);


  const toggleFullscreen4 = useCallback(() => {
    const container = containerRef4.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      setIsFullscreen4(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen4(false);
    }
  }, []);


  const toggleFullscreen5 = useCallback(() => {
    const container = containerRef5.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      setIsFullscreen5(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen5(false);
    }
  }, []);




  const handleDoubleClick = useCallback((e) => {
    e.preventDefault();
    toggleFullscreen();
  }, [toggleFullscreen]);

  // ... (keep other functions like handlePrevSlide, handleNextSlide)

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides.length - 1));
  }, [slides.length]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide < slides.length - 1 ? prevSlide + 1 : 0));
  }, [slides.length]);




  const handleDoubleClick2 = useCallback((e) => {
    e.preventDefault();
    toggleFullscreen2();
  }, [toggleFullscreen2]);

  const handlePrevSlide2 = useCallback(() => {
    setCurrentSlide2((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides2.length - 1));
  }, [slides2.length]);

  const handleNextSlide2 = useCallback(() => {
    setCurrentSlide2((prevSlide) => (prevSlide < slides2.length - 1 ? prevSlide + 1 : 0));
  }, [slides2.length]);



  const handleDoubleClick3 = useCallback((e) => {
    e.preventDefault();
    toggleFullscreen3();
  }, [toggleFullscreen3]);

  const handlePrevSlide3 = useCallback(() => {
    setCurrentSlide3((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides3.length - 1));
  }, [slides3.length]);

  const handleNextSlide3 = useCallback(() => {
    setCurrentSlide3((prevSlide) => (prevSlide < slides3.length - 1 ? prevSlide + 1 : 0));
  }, [slides3.length]);


  const handleDoubleClick4 = useCallback((e) => {
    e.preventDefault();
    toggleFullscreen4();
  }, [toggleFullscreen4]);

  const handlePrevSlide4 = useCallback(() => {
    setCurrentSlide4((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides4.length - 1));
  }, [slides4.length]);

  const handleNextSlide4 = useCallback(() => {
    setCurrentSlide4((prevSlide) => (prevSlide < slides4.length - 1 ? prevSlide + 1 : 0));
  }, [slides4.length]);



  const handleDoubleClick5 = useCallback((e) => {
    e.preventDefault();
    toggleFullscreen5();
  }, [toggleFullscreen5]);

  const handlePrevSlide5 = useCallback(() => {
    setCurrentSlide5((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides5.length - 1));
  }, [slides5.length]);

  const handleNextSlide5 = useCallback(() => {
    setCurrentSlide5((prevSlide) => (prevSlide < slides5.length - 1 ? prevSlide + 1 : 0));
  }, [slides5.length]);



  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setIsPlaying(true));
    video.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setIsPlaying(true));
      video.removeEventListener('pause', () => setIsPlaying(false));
    };
  }, []);




  useEffect(() => {
    const video = videoRef2.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime2(video.currentTime);
      setDuration2(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setIsPlaying2(true));
    video.addEventListener('pause', () => setIsPlaying2(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setIsPlaying2(true));
      video.removeEventListener('pause', () => setIsPlaying2(false));
    };
  }, []);


  useEffect(() => {
    const video = videoRef3.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime3(video.currentTime);
      setDuration3(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setIsPlaying3(true));
    video.addEventListener('pause', () => setIsPlaying3(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setIsPlaying3(true));
      video.removeEventListener('pause', () => setIsPlaying3(false));
    };
  }, []);


  useEffect(() => {
    const video = videoRef4.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime4(video.currentTime);
      setDuration4(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setIsPlaying4(true));
    video.addEventListener('pause', () => setIsPlaying4(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setIsPlaying4(true));
      video.removeEventListener('pause', () => setIsPlaying4(false));
    };
  }, []);


  useEffect(() => {
    const video = videoRef5.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime5(video.currentTime);
      setDuration5(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('play', () => setIsPlaying5(true));
    video.addEventListener('pause', () => setIsPlaying5(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
      video.removeEventListener('play', () => setIsPlaying5(true));
      video.removeEventListener('pause', () => setIsPlaying5(false));
    };
  }, []);



  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <>

      <div className='main-vg'>
        <h1 clsName='main-h1'>Our Campaigns</h1>
      </div>


      <div className="flex bg-gray-100 main-vlg mt-16">
      <div className="m-auto w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media player section */}
          <div className="w-full md:w-1/2 bg-black relative" ref={containerRef}>
            <div className="aspect-w-16 aspect-h-9">
              {slides[currentSlide].type === 'video' ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause}
                  onDoubleClick={handleDoubleClick}
                >
                  <source src={slides[currentSlide].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={slides[currentSlide].src}
                  alt="Slide"
                  className="w-full h-full object-cover"
                  style={{ width: '400px', height: '250px' }}
                />
              )}
              </div>
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={handlePrevSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={handleNextSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* ... (keep the rest of the JSX, including navigation buttons and controls) */}
              {slides[currentSlide].type === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={togglePlayPause}>
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      {/* ... (keep other control buttons) */}
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Dulquer Salmaan X The Bowl Company</h2>
                <p className="mb-6 text-lg">
                  Dulquer Salmaan finds a hack to small breaks! Your breaks might be <br />small, but your meals don’t have to be. Enjoy small breaks with big <br />meals with The Bowl Company
                </p>
              </div>
              <div className="space-x-4 flex">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  ORDER NOW
                </button>
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  VIEW ON INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ========================================================== */}


      <div className="flex bg-gray-100 main-vlg mt-20">
      <div className="m-auto w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media player section */}
          <div className="w-full md:w-1/2 bg-black relative" ref={containerRef2}>
            <div className="aspect-w-16 aspect-h-9">
              {slides2[currentSlide2].type === 'video' ? (
                <video
                  ref={videoRef2}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause2}
                  onDoubleClick={handleDoubleClick2}
                >
                  <source src={slides2[currentSlide2].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
        src={slides2[currentSlide2].src}
        alt="Slide"
        className="w-full h-full object-cover"
        style={{ width: '400px', height: '200px' }}
      />
              )}
            </div>
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={handlePrevSlide2}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={handleNextSlide2}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Video controls */}
              {slides2[currentSlide2].type === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>{formatTime(currentTime2)} / {formatTime(duration2)}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={togglePlayPause2}>
                        {isPlaying2 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${(currentTime2 / duration2) * 100}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Another Campaign Title</h2>
                <p className="mb-6 text-lg">
                  Description of the second campaign. This could be about a different product or promotion.
                </p>
              </div>
              <div className="space-x-4 flex">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  ORDER NOW
                </button>
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  VIEW ON INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ================================================================ */}


      <div className="flex bg-gray-100 main-vlg mt-20">
      <div className="m-auto w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media player section */}
          <div className="w-full md:w-1/2 bg-black relative" ref={containerRef3}>
            <div className="aspect-w-16 aspect-h-9">
              {slides3[currentSlide3].type === 'video' ? (
                <video
                  ref={videoRef3}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause3}
                  onDoubleClick={handleDoubleClick3}
                >
                  <source src={slides3[currentSlide3].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
        src={slides3[currentSlide3].src}
        alt="Slide"
        className="w-full h-full object-cover"
        style={{ width: '400px', height: '200px' }}
      />
              )}
            </div>
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={handlePrevSlide3}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={handleNextSlide3}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Video controls */}
              {slides3[currentSlide3].type === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>{formatTime(currentTime3)} / {formatTime(duration3)}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={togglePlayPause3}>
                        {isPlaying3 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${(currentTime3 / duration3) * 100}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Another Campaign Title</h2>
                <p className="mb-6 text-lg">
                  Description of the second campaign. This could be about a different product or promotion.
                </p>
              </div>
              <div className="space-x-4 flex">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  ORDER NOW
                </button>
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  VIEW ON INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ==================================================================================================================== */}


      <div className="flex bg-gray-100 main-vlg mt-20">
      <div className="m-auto w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media player section */}
          <div className="w-full md:w-1/2 bg-black relative" ref={containerRef4}>
            <div className="aspect-w-16 aspect-h-9">
              {slides4[currentSlide4].type === 'video' ? (
                <video
                  ref={videoRef4}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause4}
                  onDoubleClick={handleDoubleClick4}
                >
                  <source src={slides4[currentSlide4].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
        src={slides4[currentSlide4].src}
        alt="Slide"
        className="w-full h-full object-cover"
        style={{ width: '400px', height: '200px' }}
      />
              )}
            </div>
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={handlePrevSlide4}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={handleNextSlide4}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Video controls */}
              {slides4[currentSlide4].type === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>{formatTime(currentTime4)} / {formatTime(duration4)}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={togglePlayPause4}>
                        {isPlaying4 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${(currentTime4 / duration4) * 100}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Another Campaign Title</h2>
                <p className="mb-6 text-lg">
                  Description of the second campaign. This could be about a different product or promotion.
                </p>
              </div>
              <div className="space-x-4 flex">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  ORDER NOW
                </button>
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  VIEW ON INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ================================================================ */}


      <div className="flex bg-gray-100 main-vlg mt-20">
      <div className="m-auto w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Media player section */}
          <div className="w-full md:w-1/2 bg-black relative" ref={containerRef5}>
            <div className="aspect-w-16 aspect-h-9">
              {slides5[currentSlide5].type === 'video' ? (
                <video
                  ref={videoRef5}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause5}
                  onDoubleClick={handleDoubleClick5}
                >
                  <source src={slides5[currentSlide5].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
        src={slides5[currentSlide5].src}
        alt="Slide"
        className="w-full h-full object-cover"
        style={{ width: '400px', height: '200px' }}
      />
              )}
            </div>
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white"
                onClick={handlePrevSlide5}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                onClick={handleNextSlide5}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Video controls */}
              {slides5[currentSlide5].type === 'video' && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>{formatTime(currentTime5)} / {formatTime(duration5)}</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={togglePlayPause5}>
                        {isPlaying5 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className="bg-white h-full" style={{ width: `${(currentTime5 / duration5) * 100}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Another Campaign Title</h2>
                <p className="mb-6 text-lg">
                  Description of the second campaign. This could be about a different product or promotion.
                </p>
              </div>
              <div className="space-x-4 flex">
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  ORDER NOW
                </button>
                <button className="flex-1 bg-black text-white py-3 px-6 rounded-full text-sm uppercase tracking-wider">
                  VIEW ON INSTAGRAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Campaigns