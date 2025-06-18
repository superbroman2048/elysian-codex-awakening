
import { useState } from 'react';
import { Settings, Volume2, VolumeX, Sun, Moon, Accessibility } from 'lucide-react';

export const ControlCog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    theme: 'dark',
    sound: false,
    motion: 'full',
    accessibility: false,
    contrast: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: key === 'theme' ? (prev[key] === 'dark' ? 'light' : 'dark') :
             key === 'motion' ? (prev[key] === 'full' ? 'reduced' : 'full') :
             !prev[key]
    }));
  };

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-lunar-teal/20 backdrop-blur-sm border border-lunar-teal/30 hover:bg-lunar-teal/30 transition-all duration-300 group"
      >
        <Settings className={`w-5 h-5 text-lunar-teal transition-transform duration-300 ${isOpen ? 'rotate-45' : 'group-hover:rotate-90'}`} />
      </button>

      {/* Settings Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-abyssal-blue/95 backdrop-blur-md border-l border-lunar-teal/20 z-40 transform transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <h3 className="font-exo text-xl text-parchment-white mb-6 tracking-mind elysian-text-glow">
            Control Cog
          </h3>
          
          <div className="space-y-6">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {settings.theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-lunar-teal" />
                ) : (
                  <Sun className="w-5 h-5 text-alchemic-gold" />
                )}
                <span className="font-sora text-parchment-white">Theme</span>
              </div>
              <button
                onClick={() => toggleSetting('theme')}
                className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  settings.theme === 'dark' ? 'bg-lunar-teal' : 'bg-alchemic-gold'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.theme === 'dark' ? 'translate-x-1' : 'translate-x-6'
                }`} />
              </button>
            </div>

            {/* Sound Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {settings.sound ? (
                  <Volume2 className="w-5 h-5 text-lunar-teal" />
                ) : (
                  <VolumeX className="w-5 h-5 text-parchment-white/50" />
                )}
                <span className="font-sora text-parchment-white">Sonic Experience</span>
              </div>
              <button
                onClick={() => toggleSetting('sound')}
                className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  settings.sound ? 'bg-lunar-teal' : 'bg-parchment-white/20'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.sound ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            {/* Motion Sensitivity */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${settings.motion === 'full' ? 'bg-lunar-teal animate-pulse' : 'bg-parchment-white/50'}`} />
                </div>
                <span className="font-sora text-parchment-white">Motion</span>
              </div>
              <button
                onClick={() => toggleSetting('motion')}
                className="text-sm font-sora text-lunar-teal hover:text-alchemic-gold transition-colors duration-300"
              >
                {settings.motion === 'full' ? 'Full' : 'Reduced'}
              </button>
            </div>

            {/* Accessibility */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Accessibility className="w-5 h-5 text-lunar-teal" />
                <span className="font-sora text-parchment-white">Accessibility Fonts</span>
              </div>
              <button
                onClick={() => toggleSetting('accessibility')}
                className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  settings.accessibility ? 'bg-lunar-teal' : 'bg-parchment-white/20'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.accessibility ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-parchment-white rounded" />
                <span className="font-sora text-parchment-white">High Contrast</span>
              </div>
              <button
                onClick={() => toggleSetting('contrast')}
                className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                  settings.contrast ? 'bg-lunar-teal' : 'bg-parchment-white/20'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  settings.contrast ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 p-4 rounded-lg bg-lunar-teal/10 border border-lunar-teal/20">
            <p className="text-xs font-sora text-parchment-white/70 text-center">
              Customize your journey through the Elysian Codex
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
