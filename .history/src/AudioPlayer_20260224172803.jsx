import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, Volume1, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Inicia al 30%
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Array de 12 colores suaves (pastel) para el ecualizador
  const softColors = [
    'bg-rose-300', 'bg-orange-300', 'bg-amber-300', 'bg-lime-300', 
    'bg-emerald-300', 'bg-teal-300', 'bg-cyan-300', 'bg-sky-300', 
    'bg-blue-300', 'bg-indigo-300', 'bg-violet-300', 'bg-purple-300'
  ];

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

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] group font-sans">
      <audio ref={audioRef} src="/mi-cancion.mp3" loop />
      
      {/* Aumenté un poco el ancho al expandir (w-[340px]) para que todo respire mejor */}
      <div className="flex items-center bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-full shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-[56px] group-hover:w-[340px] h-[56px]">
        
        {/* Botón Principal: Play / Pause */}
        <button 
          onClick={togglePlay}
          className="w-[56px] h-[56px] shrink-0 flex items-center justify-center bg-transparent text-zinc-900 dark:text-white hover:text-green-500 transition-colors z-10"
        >
          {isPlaying ? (
            <Pause size={22} className="fill-current" />
          ) : (
            <Play size={22} className="fill-current ml-1" />
          )}
        </button>

        {/* Contenido oculto */}
        <div className="flex items-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pr-6 w-full min-w-max">
          
          {/* Ecualizador animado e Info (Ahora ocupa exactamente el ancho de la palabra) */}
          <div className="flex flex-col justify-center w-[110px] shrink-0">
            {/* Las 12 barritas distribuidas equitativamente */}
            <div className="flex items-end justify-between w-full h-3 mb-1.5">
              {softColors.map((colorClass, idx) => (
                <div 
                  key={idx}
                  className={`w-[3px] ${colorClass} rounded-t-sm transition-all duration-300 ease-in-out ${isPlaying ? 'animate-pulse' : ''}`}
                  style={{ 
                    // Si está sonando, altura aleatoria. Si está en pausa, miden 3px
                    height: isPlaying ? `${Math.floor(Math.random() * 10 + 4)}px` : '3px',
                    animationDelay: `${idx * 0.1}s`,
                    animationDuration: '0.8s'
                  }}
                />
              ))}
            </div>
            {/* Texto debajo del ecualizador */}
            <span className="text-[9.5px] font-mono font-bold text-zinc-500 dark:text-gray-400 text-center w-full uppercase tracking-widest">
              {isPlaying ? 'Reproduciendo' : 'Pausado'}
            </span>
          </div>

          {/* Línea divisoria vertical */}
          <div className="w-[1px] h-6 bg-zinc-300 dark:bg-white/10 shrink-0" />

          {/* Controles de Volumen (¡NUEVO SISTEMA QUE NO SE SALE!) */}
          <div className="flex items-center gap-3 w-full">
            <button 
              onClick={toggleMute} 
              className="text-zinc-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors shrink-0"
            >
              <VolumeIcon size={18} />
            </button>
            
            {/* Contenedor relativo para la barra de volumen perfecta */}
            <div className="relative w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden flex items-center">
              {/* Esta es la barra verde visual que se llena */}
              <div 
                className="absolute top-0 left-0 h-full bg-green-500 pointer-events-none transition-all duration-100 ease-out"
                style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
              />
              {/* Este es el input real, totalmente invisible pero funcional por encima */}
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false); 
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer m-0"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}