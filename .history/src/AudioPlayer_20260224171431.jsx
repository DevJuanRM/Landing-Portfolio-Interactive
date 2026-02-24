import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; // Tus iconos actuales

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Opcional: Bajar el volumen por defecto para no asustar al usuario
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 30% de volumen
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Busca el archivo directo en la carpeta public */}
      <audio ref={audioRef} src="/mi-cancion.mp3" loop />
      
      <button 
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 dark:bg-white/10 backdrop-blur-md rounded-full border border-zinc-200 dark:border-white/20 text-white hover:bg-green-500 transition-colors duration-300"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
}