import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Clock, Thermometer, Bell, Sparkles, Coffee } from 'lucide-react';

export default function BrewingTimer({ onClose }) {
  const teaTypes = [
    { name: 'Dicta Premium Black Tea', temp: '95°C - 100°C', defaultTime: 240, tips: 'Steep for 3-4 minutes in boiling water. Add milk or lemon to taste.' },
    { name: 'Dicta Ceylon Green Tea', temp: '75°C - 80°C', defaultTime: 150, tips: 'Use water slightly below boiling point. Steep for 2.5 minutes for smooth non-bitter taste.' },
    { name: 'Dicta Mint Tea', temp: '90°C - 95°C', defaultTime: 180, tips: 'Steep for 3 minutes to extract cooling menthol aromatics.' },
    { name: 'Dicta Ceylon Cinnamon Tea', temp: '95°C - 100°C', defaultTime: 300, tips: 'Steep for 5 minutes to release natural cinnamon oils and warm spicy notes.' },
    { name: 'Dicta Ginger & Lemon Tea', temp: '95°C - 100°C', defaultTime: 240, tips: 'Steep 4 minutes. Add pure bee honey for throat soothing warmth.' },
    { name: 'Dicta Silver White Tea', temp: '70°C - 75°C', defaultTime: 300, tips: 'Steep delicately for 4-5 minutes in warm water. Enjoy pure without milk.' }
  ];

  const [selectedTea, setSelectedTea] = useState(teaTypes[0]);
  const [timeLeft, setTimeLeft] = useState(teaTypes[0].defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setFinished(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleSelectTea = (tea) => {
    setSelectedTea(tea);
    setTimeLeft(tea.defaultTime);
    setIsRunning(false);
    setFinished(false);
  };

  const toggleTimer = () => {
    if (finished) {
      setTimeLeft(selectedTea.defaultTime);
      setFinished(false);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(selectedTea.defaultTime);
    setFinished(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = ((selectedTea.defaultTime - timeLeft) / selectedTea.defaultTime) * 100;

  return (
    <div className="modal-overlay animate-fade-in">
      <div className="bg-[#071f13] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative border-2 border-amber-400/40 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-emerald-300 hover:text-white p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/40">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif text-white">Dicta Virtual Tea Brewing Timer</h3>
            <p className="text-xs text-emerald-200/80">Master the perfect Sri Lankan Ceylon tea steep duration</p>
          </div>
        </div>

        {/* Select Tea Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {teaTypes.map((t) => (
            <button
              key={t.name}
              onClick={() => handleSelectTea(t)}
              className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${selectedTea.name === t.name ? 'bg-amber-400 text-emerald-950 border-amber-300 shadow-md font-bold' : 'bg-emerald-950/60 text-emerald-200 border-emerald-800 hover:border-amber-400/50'}`}
            >
              <div className="truncate">{t.name.replace('Dicta ', '')}</div>
              <div className="text-[10px] opacity-80 mt-0.5">{Math.floor(t.defaultTime / 60)} min • {t.temp}</div>
            </button>
          ))}
        </div>

        {/* Timer Visual Display */}
        <div className="bg-emerald-950/90 rounded-2xl p-6 border border-emerald-800/80 text-center space-y-6 relative overflow-hidden">
          
          {/* Water Temperature & Tips */}
          <div className="flex justify-center items-center gap-4 text-xs text-amber-300 font-semibold">
            <span className="flex items-center gap-1"><Thermometer className="w-4 h-4 text-amber-400" /> Temp: {selectedTea.temp}</span>
            <span className="flex items-center gap-1"><Coffee className="w-4 h-4 text-amber-400" /> Ideal Steep</span>
          </div>

          {/* Time Dial */}
          <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="88"
                cy="88"
                r="78"
                stroke="currentColor"
                strokeWidth="8"
                className="text-emerald-900"
                fill="transparent"
              />
              <circle
                cx="88"
                cy="88"
                r="78"
                stroke="currentColor"
                strokeWidth="8"
                className="text-amber-400 transition-all duration-1000"
                strokeDasharray={490}
                strokeDashoffset={490 - (490 * progressPercent) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            
            <div className="absolute text-center">
              <div className="text-4xl font-bold font-serif tracking-wider text-amber-300">
                {formatTime(timeLeft)}
              </div>
              <div className="text-[11px] text-emerald-200 font-medium uppercase tracking-widest mt-1">
                {finished ? '🎉 Steep Complete!' : isRunning ? 'Steeping...' : 'Ready to Brew'}
              </div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleTimer}
              className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${isRunning ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'btn-gold'}`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isRunning ? 'Pause' : finished ? 'Brew Again' : 'Start Steep'}
            </button>

            <button
              onClick={resetTimer}
              className="p-3 rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-200 border border-emerald-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Tips Box */}
          <div className="bg-emerald-900/60 p-3 rounded-xl text-left border border-emerald-800 text-xs text-emerald-100/90 leading-relaxed flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Dicta Brew Master Note:</strong> {selectedTea.tips}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
