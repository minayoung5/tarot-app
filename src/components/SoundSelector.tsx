import { useState, useEffect, useRef } from 'react';

interface SoundOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const soundOptions: SoundOption[] = [
  {
    id: 'rain',
    name: 'Rain',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 19v2M12 19v2M16 19v2" strokeLinecap="round" />
        <path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.1-.2 2.1-.6 3.1-.8-.4-1.8-.6-2.9-.6-3.9 0-7 2.7-7 6 0 .6.1 1.2.2 1.7" strokeLinecap="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/05/13/audio_257112ce99.mp3',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'thunder',
    name: 'Thunder',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/10/30/audio_a51dfd5a9e.mp3',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'crickets',
    name: 'Crickets',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'wind',
    name: 'Wind',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73467.mp3',
    color: 'from-slate-400 to-gray-500'
  },
  {
    id: 'fire',
    name: 'Fire',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c-4.97 0-9-2.69-9-6 0-2.5 1.5-4.5 3-6 0 2 2 3 2 5 0-3 2-4 2-6 1.5 1.5 2 4 2 6 2-1 4-3 4-6 2 2.5 3 4.5 3 7 0 3.31-4.03 6-9 6z" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2021/08/09/audio_a1a0b3a1b5.mp3',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'night',
    name: 'Night',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b6db3.mp3',
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'ocean',
    name: 'Ocean',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/06/07/audio_b9f4a0dec8.mp3',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'forest',
    name: 'Forest',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L7 10h2l-3 6h3l-4 6h14l-4-6h3l-3-6h2L12 2z" strokeLinejoin="round" />
      </svg>
    ),
    url: 'https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3',
    color: 'from-green-600 to-emerald-700'
  }
];

export function SoundSelector() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [showPanel, setShowPanel] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (previousAudioRef.current) {
        previousAudioRef.current.pause();
        previousAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleSoundSelect = (sound: SoundOption) => {
    if (selectedSound === sound.id) {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(console.error);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = sound.url;
        audioRef.current.load();
        if (isPlaying) {
          audioRef.current.play().catch(console.error);
        }
      }
      setSelectedSound(sound.id);
      if (!isPlaying) {
        setIsPlaying(true);
        setTimeout(() => {
          audioRef.current?.play().catch(console.error);
        }, 100);
      }
    }
    setShowPanel(false);
  };

  const togglePlay = () => {
    if (!selectedSound) return;
    
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(console.error);
    }
  };

  const currentSound = soundOptions.find(s => s.id === selectedSound);

  return (
    <>
      <button
        onClick={() => setShowPanel(!showPanel)}
        className={`fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br ${
          currentSound?.color || 'from-purple-600 to-indigo-700'
        } shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center text-white ${
          isPlaying ? 'animate-pulse' : ''
        } backdrop-blur-sm border border-white/20`}
        style={{
          boxShadow: isPlaying ? '0 0 30px rgba(139, 92, 246, 0.6)' : '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>
        )}
      </button>

      {showPanel && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setShowPanel(false)}
          />
          <div className="fixed bottom-28 left-8 z-50 w-96 bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="p-5 border-b border-white/10">
              <h3 className="text-lg font-semibold text-slate-200 flex items-center gap-3 tracking-wide">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                <span>AMBIENCE</span>
              </h3>
              <p className="text-slate-400 text-xs mt-2">Select your atmosphere</p>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {soundOptions.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => handleSoundSelect(sound)}
                  className={`relative p-5 rounded-2xl transition-all duration-500 ${
                    selectedSound === sound.id
                      ? `bg-gradient-to-br ${sound.color} shadow-2xl scale-105`
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className="mb-3 flex justify-center text-white">{sound.icon}</div>
                    <p className={`text-xs font-semibold tracking-wide ${
                      selectedSound === sound.id ? 'text-white' : 'text-slate-300'
                    }`}>
                      {sound.name}
                    </p>
                  </div>
                  {selectedSound === sound.id && isPlaying && (
                    <div className="absolute top-3 right-3 flex gap-0.5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-white rounded-full animate-pulse"
                          style={{
                            height: `${10 + Math.random() * 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {selectedSound && (
              <div className="p-6 border-t border-white/10">
                <div className="flex items-center gap-5">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-2xl"
                  >
                    {isPlaying ? (
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 ml-0.5" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1">
                    <label className="text-slate-400 text-sm mb-2 block tracking-wide">VOLUME</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, rgba(139, 92, 246, ${volume}) 0%, rgba(139, 92, 246, ${volume}) ${volume * 100}%, rgba(255, 255, 255, 0.1) ${volume * 100}%, rgba(255, 255, 255, 0.1) 100%)`
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
