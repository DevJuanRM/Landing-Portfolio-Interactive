import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Inicia al 30%
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Sincroniza el volumen y el mute con el elemento de audio real
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Determina qué icono de volumen mostrar según el nivel
  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group font-sans">
      <audio ref={audioRef} src="/mi-cancion.mp3" loop />
      
      {/* Contenedor principal que se expande mágicamente al hacer hover */}
      <div className="flex items-center bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-full shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-[56px] group-hover:w-[300px] h-[56px]">
        
        {/* Botón Principal: Play / Pause */}
        <button 
          onClick={togglePlay}
          className="w-[56px] h-[56px] shrink-0 flex items-center justify-center bg-transparent text-zinc-900 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors z-10"
        >
          {isPlaying ? (
            <Pause size={22} className="fill-current" />
          ) : (
            <Play size={22} className="fill-current ml-1" /> // ml-1 centra visualmente el triángulo
          )}
        </button>

        {/* Contenido oculto que aparece al expandir la píldora */}
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-5 w-full min-w-max">
          
          {/* Ecualizador animado e Info */}
          <div className="flex flex-col justify-center w-24 shrink-0">
            <div className="flex items-end gap-[2px] h-3 mb-1">
              {[1, 2, 3, 4].map((bar) => (
                <div 
                  key={bar}
                  className={`w-[3px] bg-green-500 rounded-t-sm transition-all duration-300 ease-in-out ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{ 
                    height: isPlaying ? `${Math.floor(Math.random() * 8 + 4)}px` : '3px',
                    animationDelay: `${bar * 0.15}s`,
                    animationDuration: '0.8s'
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-gray-400 truncate w-full uppercase tracking-widest">
              {isPlaying ? 'Reproduciendo' : 'Pausado'}
            </span>
          </div>

          {/* Línea divisoria vertical */}
          <div className="w-[1px] h-6 bg-zinc-300 dark:bg-white/10 shrink-0" />

          {/* Controles de Volumen */}
          <div className="flex items-center gap-2 w-full">
            <button 
              onClick={toggleMute} 
              className="text-zinc-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors shrink-0"
            >
              <VolumeIcon size={18} />
            </button>
            
            {/* Slider Pro customizado */}
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                setIsMuted(false); // Si mueve la barra, quitamos el mute
              }}
              className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full appearance-none cursor-pointer outline-none overflow-hidden
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 
                         [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:shadow-[-100vw_0_0_100vw_#22c55e]"
            />
          </div>

        </div>
      </div>
    </div>
  );
}