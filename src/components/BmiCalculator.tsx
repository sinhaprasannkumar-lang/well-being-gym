import { useState, useMemo } from 'react';
import { Calculator, Sparkles, Flame, HeartPulse } from 'lucide-react';
import { BmiResult } from '../types';

interface BmiCalculatorProps {
  onRequestCustomPlan: (bmiData: BmiResult) => void;
}

export default function BmiCalculator({ onRequestCustomPlan }: BmiCalculatorProps) {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(26);
  
  // Metric
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(72);

  // Imperial
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);
  const [weightLbs, setWeightLbs] = useState<number>(158);

  const bmiResult: BmiResult = useMemo(() => {
    let heightInMeters = 1.75;
    let weightInKg = 72;

    if (unitSystem === 'metric') {
      heightInMeters = heightCm / 100;
      weightInKg = weightKg;
    } else {
      const totalInches = heightFeet * 12 + heightInches;
      heightInMeters = totalInches * 0.0254;
      weightInKg = weightLbs * 0.453592;
    }

    if (heightInMeters <= 0 || weightInKg <= 0) {
      return {
        bmi: 0,
        category: 'Normal Weight',
        color: '#D4AF37',
        recommendation: 'Please enter valid height and weight values.',
        calorieTarget: '2,000 kcal/day'
      };
    }

    const bmiVal = Number((weightInKg / (heightInMeters * heightInMeters)).toFixed(1));

    // BMR Calculation (Mifflin-St Jeor)
    let bmr = 10 * weightInKg + 6.25 * (heightInMeters * 100) - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    const tdee = Math.round(bmr * 1.55); // Moderate activity multiplier

    let cat: 'Underweight' | 'Normal Weight' | 'Overweight' | 'Obese' = 'Normal Weight';
    let color = '#D4AF37'; 
    let rec = '';
    let calTarget = `${tdee} kcal/day`;

    if (bmiVal < 18.5) {
      cat = 'Underweight';
      color = '#60A5FA'; 
      rec = 'Focus on a nutrient-dense caloric surplus combined with progressive strength training at The Wellness Club Gym Xpress to build healthy lean muscle mass.';
      calTarget = `${tdee + 400} kcal/day (Muscle Gain Surplus)`;
    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) {
      cat = 'Normal Weight';
      color = '#D4AF37'; 
      rec = 'Excellent baseline! Maintain your physical momentum with a balanced regimen of hypertrophy lifting, cardio conditioning, and yoga sessions.';
      calTarget = `${tdee} kcal/day (Maintenance Target)`;
    } else if (bmiVal >= 25 && bmiVal <= 29.9) {
      cat = 'Overweight';
      color = '#F59E0B'; 
      rec = 'Incorporate a moderate 300–500 calorie deficit paired with HIIT cardio and weight training to strip body fat while preserving muscle.';
      calTarget = `${tdee - 400} kcal/day (Fat Loss Deficit)`;
    } else {
      cat = 'Obese';
      color = '#EF4444'; 
      rec = 'We recommend a personalized low-impact fitness routine guided directly by coach Prashant with structured posture and cardiovascular support.';
      calTarget = `${tdee - 600} kcal/day (Active Fat Loss Deficit)`;
    }

    return {
      bmi: bmiVal,
      category: cat,
      color,
      recommendation: rec,
      calorieTarget: calTarget
    };
  }, [unitSystem, gender, age, heightCm, weightKg, heightFeet, heightInches, weightLbs]);

  return (
    <section id="bmi" className="py-24 bg-[#0A0A0A] relative border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37]/10 px-4 py-1.5 border border-[#D4AF37]/30 inline-block">
            Smart Health Assessment
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Interactive{' '}
            <span className="text-[#D4AF37] italic font-serif">
              BMI & Health Calculator
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Calculate your Body Mass Index (BMI) and discover customized health & calorie recommendations designed for your transformation.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#D4AF37]/20 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Unit & Gender Toggles */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-6">
              
              {/* Unit System */}
              <div className="flex items-center bg-black p-1 border border-zinc-800 w-full sm:w-auto">
                <button
                  onClick={() => setUnitSystem('metric')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                    unitSystem === 'metric'
                      ? 'bg-[#D4AF37] text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  onClick={() => setUnitSystem('imperial')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                    unitSystem === 'imperial'
                      ? 'bg-[#D4AF37] text-black'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>

              {/* Gender */}
              <div className="flex items-center bg-black p-1 border border-zinc-800 w-full sm:w-auto">
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                    gender === 'male'
                      ? 'bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/40'
                      : 'text-zinc-400'
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 sm:flex-none px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all ${
                    gender === 'female'
                      ? 'bg-[#111111] text-[#D4AF37] border border-[#D4AF37]/40'
                      : 'text-zinc-400'
                  }`}
                >
                  Female
                </button>
              </div>

            </div>

            {/* Age Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Age (Years)</label>
                <span className="text-sm font-bold text-white">{age} Yrs</span>
              </div>
              <input
                type="range"
                min="12"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-[#D4AF37] bg-black h-2 cursor-pointer"
              />
            </div>

            {/* Height Sliders */}
            {unitSystem === 'metric' ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Height (cm)</label>
                  <span className="text-sm font-bold text-white">{heightCm} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-black h-2 cursor-pointer"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Feet</label>
                  <input
                    type="number"
                    min="3"
                    max="7"
                    value={heightFeet}
                    onChange={(e) => setHeightFeet(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-black border border-zinc-800 text-white font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Inches</label>
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={heightInches}
                    onChange={(e) => setHeightInches(Number(e.target.value))}
                    className="w-full px-4 py-2 bg-black border border-zinc-800 text-white font-bold text-sm"
                  />
                </div>
              </div>
            )}

            {/* Weight Sliders */}
            {unitSystem === 'metric' ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Weight (kg)</label>
                  <span className="text-sm font-bold text-white">{weightKg} kg</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-black h-2 cursor-pointer"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Weight (lbs)</label>
                  <span className="text-sm font-bold text-white">{weightLbs} lbs</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="350"
                  value={weightLbs}
                  onChange={(e) => setWeightLbs(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-black h-2 cursor-pointer"
                />
              </div>
            )}

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-[#111111] border-2 border-[#D4AF37] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" /> Result Summary
                </span>
                <span className="text-[9px] px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] font-bold uppercase border border-[#D4AF37]/30 tracking-widest">
                  Instant Assessment
                </span>
              </div>

              {/* Gauge Display */}
              <div className="text-center space-y-2 py-4 bg-black border border-zinc-900">
                <span className="text-xs text-zinc-400 font-light block">Your Calculated BMI</span>
                <div className="text-5xl font-serif font-bold text-[#D4AF37]">
                  {bmiResult.bmi}
                </div>
                <div
                  className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest text-black shadow-lg"
                  style={{ backgroundColor: bmiResult.color }}
                >
                  {bmiResult.category}
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <HeartPulse className="w-4 h-4 text-[#D4AF37]" />
                  <span>Coach Prashant's Recommendation</span>
                </div>
                <p className="text-zinc-300 text-xs leading-relaxed font-light bg-black p-3.5 border border-zinc-800">
                  {bmiResult.recommendation}
                </p>
              </div>

              {/* Daily Calorie Target */}
              <div className="p-3.5 bg-black border border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-light flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#D4AF37]" /> Daily Caloric Need:
                </span>
                <span className="font-bold text-white">{bmiResult.calorieTarget}</span>
              </div>
            </div>

            {/* Request Customized Plan CTA */}
            <button
              onClick={() => onRequestCustomPlan(bmiResult)}
              className="w-full py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b89628] transition-all flex items-center justify-center gap-2"
              id="bmi-request-plan-btn"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              Get Customized Blueprint →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
