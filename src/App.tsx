import { useEffect, useState, FC } from 'react';
import confetti from 'canvas-confetti';
import 'animate.css';
import './App.css';
import { miniGames, referenceData, differenceData } from './data';
import { 
  MiniGame, 
  CompletedGame, 
  FeedbackState, 
  Rank, 
  QuestionItem,
  PersistedState 
} from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { HUD } from './components/HUD';
import { StampBadge } from './components/StampBadge';
import { RankUpToast } from './components/RankUpToast';
import { AccordionGroup, AccordionItem } from './components/Accordion';
import { MissionBriefing } from './components/MissionBriefing';


interface HeroProps {
  onStart: () => void;
}

const Hero: FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="text-center py-16 px-4 max-w-3xl mx-auto animate__animated animate__zoomIn">
      <h1 className="text-5xl md:text-6xl mb-4 leading-tight font-outfit font-bold">
        Global Credential <span className="text-amazon-orange">Intelligence</span>
      </h1>
      <p className="text-xl text-gray-400 mb-10">
        Step into the operations center. Master education systems, conduct open-source verification, and climb the ranks.
      </p>
      <div>
        <button onClick={onStart} className="btn-primary animate__animated animate__pulse animate__infinite">
          <i className="fa-solid fa-play"></i> Initiate Training
        </button>
      </div>
    </section>
  );
}

interface LeaderboardModalProps {
  onClose: () => void;
  totalScore: number;
  username: string;
  setUsername: (name: string) => void;
}

const LeaderboardModal: FC<LeaderboardModalProps> = ({ onClose, totalScore, username, setUsername }) => {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaders([
        { rank: 1, name: "OSINT_Master", score: 15 },
        { rank: 2, name: "AlphaTrainee", score: 12 },
        { rank: 3, name: "Analyst_Jane", score: 8 }
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || totalScore === 0) return;
    setSubmitting(true);
    try {
       // MOCK SUBMIT: Remove this once you deploy the Apps Script
       setTimeout(() => {
         setSubmitted(true);
         setSubmitting(false);
         setLeaders(prev => [...prev, { name: username, score: totalScore }].sort((a,b)=>b.score-a.score).map((item, idx) => ({...item, rank: idx + 1})));
       }, 1000);
    } catch (e) {
      console.error(e);
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate__animated animate__fadeIn">
      <div className="bg-glass-bg border border-glass-border p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
        <h2 className="text-3xl font-outfit mb-6 text-center text-amazon-orange"><i className="fa-solid fa-trophy"></i> Global Leaderboard</h2>
        
        <div className="mb-8">
          {loading ? (
            <div className="text-center text-gray-400 py-4"><i className="fa-solid fa-circle-notch fa-spin"></i> Retrieving classified Intel...</div>
          ) : (
            <div className="flex flex-col gap-2">
              {leaders.map((l, idx) => (
                <div key={idx} className="flex justify-between items-center bg-black/40 border border-white/10 p-3 rounded-lg">
                  <span className="font-semibold text-gray-300">
                    <span className="text-amazon-orange inline-block w-6">{idx + 1}.</span> {l.name}
                  </span>
                  <span className="font-bold text-white bg-amazon-orange/20 px-3 py-1 rounded text-sm">{l.score} pts</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {!submitted && totalScore > 0 ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t border-glass-border pt-6">
            <h3 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-1">Submit Your Score</h3>
            <input 
              type="text" 
              placeholder="Enter your Operative ID" 
              className="bg-black/50 border border-glass-border p-3 rounded-lg focus:outline-none focus:border-amazon-orange text-white"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? <i className="fa-solid fa-circle-notch fa-spin"></i> : <i className="fa-solid fa-upload"></i>} Upload Score ({totalScore})
            </button>
          </form>
        ) : submitted ? (
          <div className="text-center text-green-500 font-bold border-t border-glass-border pt-6">
            <i className="fa-solid fa-circle-check"></i> Score successfully transmitted.
          </div>
        ) : (
           <div className="text-center text-gray-400 text-sm border-t border-glass-border pt-6">
            Complete operations to earn a score and join the leaderboard.
          </div>
        )}
      </div>
    </div>
  );
}

const IntelVault: FC = () => {
  return (
    <aside className="flex flex-col gap-4 animate__animated animate__fadeInRight w-full lg:w-80">
      <div className="glassmorphism p-4 border-l-4 border-l-amazon-orange">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit uppercase tracking-wider">
          <i className="fa-solid fa-book-journal-whills"></i> Intel Vault
        </h2>
        <p className="text-[10px] text-gray-500 mb-6 uppercase font-mono bg-black/30 p-2 rounded">Authorized Access Only // OSINT Data</p>
        <div className="flex flex-col gap-6">
          {referenceData.map((item, idx) => {
            const flagCode = item.country === "United States" ? "us" : item.country === "Canada" ? "ca" : item.country === "India" ? "in" : "un";
            return (
              <article key={idx} className="relative bg-[#f4f1ea] text-black rounded-sm p-4 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")' }}></div>
                
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <h3 className="text-amazon-darker font-black font-mono text-base uppercase border-b-2 border-amazon-darker">
                    {item.country}
                  </h3>
                  <img 
                    src={`https://flagcdn.com/w40/${flagCode}.png`} 
                    alt={item.country} 
                    className="w-8 shadow-sm border border-black/20"
                  />
                </div>
                
                <p className="text-xs font-bold text-gray-700 mb-3 relative z-10 leading-relaxed uppercase">
                  {item.summary}
                </p>
                
                <ul className="list-none space-y-2 relative z-10">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-[11px] font-mono flex gap-2">
                      <span className="text-amazon-orange">▶</span> {point}
                    </li>
                  ))}
                </ul>

                {/* Confidential Stamp */}
                <div className="absolute -bottom-2 -right-2 opacity-20 pointer-events-none rotate-12">
                   <StampBadge text="INTERNAL" color="gray" className="scale-50" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="glassmorphism p-4 border-l-4 border-l-gray-500 mt-4">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit uppercase tracking-wider">
          <i className="fa-solid fa-code-compare"></i> Core Differences
        </h2>
        <div className="flex flex-col gap-4">
          {differenceData.map((item, idx) => (
            <article key={idx} className="bg-black/40 border border-white/5 rounded-lg p-4 text-xs">
              <h3 className="text-amazon-orange mb-2 font-outfit font-bold uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-mono">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

const IntelVaultAccordions: FC = () => {
  return (
    <aside className="flex flex-col gap-4 animate__animated animate__fadeInRight w-full lg:w-80">
      <div className="glassmorphism p-4 border-l-4 border-l-amazon-orange">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit uppercase tracking-wider">
          <i className="fa-solid fa-book-journal-whills"></i> Intel Vault
        </h2>
        <p className="text-[10px] text-gray-500 mb-6 uppercase font-mono bg-black/30 p-2 rounded">Authorized Access Only // OSINT Data</p>
        <AccordionGroup>
          {({ openIndex, toggleItem }) => (
            <>
              {referenceData.map((item, idx) => {
                const flagCode = item.country === "United States" ? "us" : item.country === "Canada" ? "ca" : item.country === "India" ? "in" : "un";
                return (
                  <AccordionItem
                    key={item.country}
                    title={item.country}
                    icon="fa-solid fa-file-lines"
                    rightElement={(
                      <img
                        src={`https://flagcdn.com/w40/${flagCode}.png`}
                        alt={item.country}
                        className="w-8 shadow-sm border border-black/20"
                      />
                    )}
                    isOpen={openIndex === idx}
                    onToggle={() => toggleItem(idx)}
                  >
                    <article className="relative bg-[#f4f1ea] text-black rounded-sm p-4 shadow-[2px_2px_10px_rgba(0,0,0,0.5)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")' }}></div>

                      <p className="text-xs font-bold text-gray-700 mb-3 relative z-10 leading-relaxed uppercase">
                        {item.summary}
                      </p>

                      <ul className="list-none space-y-2 relative z-10">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-[11px] font-mono flex gap-2">
                            <span className="text-amazon-orange">&gt;</span> {point}
                          </li>
                        ))}
                      </ul>

                      <div className="absolute -bottom-2 -right-2 opacity-20 pointer-events-none rotate-12">
                         <StampBadge text="INTERNAL" color="gray" className="scale-50" />
                      </div>
                    </article>
                  </AccordionItem>
                );
              })}
            </>
          )}
        </AccordionGroup>
      </div>
      <div className="glassmorphism p-4 border-l-4 border-l-gray-500 mt-4">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit uppercase tracking-wider">
          <i className="fa-solid fa-code-compare"></i> Core Differences
        </h2>
        <AccordionGroup>
          {({ openIndex, toggleItem }) => (
            <>
              {differenceData.map((item, idx) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  icon="fa-solid fa-code-branch"
                  isOpen={openIndex === idx}
                  onToggle={() => toggleItem(idx)}
                >
                  <p className="bg-black/40 border border-white/5 rounded-lg p-4 text-xs text-gray-400 leading-relaxed font-mono">
                    {item.body}
                  </p>
                </AccordionItem>
              ))}
            </>
          )}
        </AccordionGroup>
      </div>
    </aside>
  );
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const [briefingGameId, setBriefingGameId] = useState<string | null>(null);
  const [activeGameItems, setActiveGameItems] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  
  // Persisted state
  const [persistedState, setPersistedState] = useLocalStorage<PersistedState>('credential-intel-state', {
    completedGames: {},
    earnedBadges: [],
    username: ""
  });

  const { completedGames, earnedBadges, username } = persistedState;

  const setCompletedGames = (valOrFn: Record<string, CompletedGame> | ((prev: Record<string, CompletedGame>) => Record<string, CompletedGame>)) => {
    setPersistedState(prev => ({
      ...prev,
      completedGames: typeof valOrFn === 'function' ? valOrFn(prev.completedGames) : valOrFn
    }));
  };

  const setEarnedBadges = (valOrFn: string[] | ((prev: string[]) => string[])) => {
    setPersistedState(prev => ({
      ...prev,
      earnedBadges: typeof valOrFn === 'function' ? valOrFn(prev.earnedBadges) : valOrFn
    }));
  };

  const setUsername = (valOrFn: string | ((prev: string) => string)) => {
    setPersistedState(prev => ({
      ...prev,
      username: typeof valOrFn === 'function' ? valOrFn(prev.username) : valOrFn
    }));
  };

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [rankUpNotif, setRankUpNotif] = useState<Rank | null>(null);
  const [lastRank, setLastRank] = useState<Rank | null>(null);

  const activeGame = miniGames.find(g => g.id === activeGameId);
  const briefingGame = miniGames.find(g => g.id === briefingGameId);
  const PASSING_SCORE = 4;

  const resetQuestionState = (message: string | null = null) => {
    setSelectedOption(null);
    setAnswered(false);
    setFeedback(message ? { message, type: '' } : null);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FF9900', '#22C55E', '#FFFFFF', '#3B82F6']
    });
  };

  const startMiniGame = (id: string) => {
    const game = miniGames.find(g => g.id === id);
    if (!game) return;
    
    const shuffled = [...game.items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setActiveGameId(id);
    setBriefingGameId(null);
    setActiveGameItems(selected);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    resetQuestionState(game.emptyMessage);
  };

  const openBriefing = (id: string) => {
    if (completedGames[id]) {
      startMiniGame(id);
      return;
    }

    setBriefingGameId(id);
    setActiveGameId(null);
    setActiveGameItems([]);
    setCurrentIndex(-1);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    resetQuestionState();
  };

  const beginFromBriefing = () => {
    if (!briefingGameId) return;
    startMiniGame(briefingGameId);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setActiveGameId(null);
    setBriefingGameId(null);
    setCurrentIndex(-1);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    resetQuestionState();
  };

  const submitAnswer = () => {
    if (selectedOption === null || answered) return;

    const scenario = activeGameItems[currentIndex];
    const isCorrect = selectedOption === scenario.answer;
    
    setAnswered(true);

    if (isCorrect) {
      const newStreak = streak + 1;
      const newMultiplier = newStreak % 3 === 0 ? multiplier + 1 : multiplier;
      
      setStreak(newStreak);
      setMultiplier(newMultiplier);
      setScore(prev => prev + (1 * multiplier)); // Track 1.1 Fix: Ensure multiplier is applied
      
      // Earn special streak badge if streak hits 5
      if (newStreak === 5 && !earnedBadges.includes('streak-master')) {
        setEarnedBadges(prev => [...prev, 'streak-master']);
        triggerConfetti();
        setFeedback({ message: `Incredible! Streak Master badge unlocked! ${scenario.explanation}`, type: 'success' });
      } else if (newStreak % 3 === 0) {
        triggerConfetti();
        setFeedback({ message: `Excellent! Analyzing rapidly! ${scenario.explanation}`, type: 'success' });
      } else {
        setFeedback({ message: `Verified. ${scenario.explanation}`, type: 'success' });
      }
    } else {
      setStreak(0);
      setMultiplier(1);
      const correctTitle = scenario.options[scenario.answer].title;
      setFeedback({ message: `Signal Missed. ${scenario.explanation} Verified answer: ${correctTitle}`, type: 'error' });
    }
  };

  const handleNext = () => {
    if (currentIndex >= activeGameItems.length - 1) {
      const total = activeGameItems.length;
      const hasPassed = score >= PASSING_SCORE;
      
      if (hasPassed && activeGame) {
        setCompletedGames(prev => ({
          ...prev,
          [activeGame.id]: { score, total }
        }));
        
        let newBadges = [...earnedBadges];
        if (score === 5 && !newBadges.includes(`${activeGame.id}-flawless`)) {
           newBadges.push(`${activeGame.id}-flawless`);
        }
        setEarnedBadges(newBadges);
        
        setFeedback({ message: "Outstanding analysis. The command center is confident in your ability.", type: 'success' });
        triggerConfetti();
      } else {
        setFeedback({ message: `Operation Failed. You scored ${score}/${total}. You need at least ${PASSING_SCORE} to pass. Please retest.`, type: 'error' });
      }
      
      setCurrentIndex(currentIndex + 1); // move to completion state
    } else {
      if (activeGame) {
        resetQuestionState(activeGame.emptyMessage);
      } else {
        resetQuestionState();
      }
      setCurrentIndex(currentIndex + 1);
    }
  };

  const totalScore = Object.values(completedGames).reduce((acc, curr) => acc + curr.score, 0);
  const totalCleared = Object.keys(completedGames).length;
  
  let rank: Rank = "Trainee";
  if (totalScore >= 12) rank = "Master Screener";
  else if (totalScore >= 8) rank = "Lead Analyst";
  else if (totalScore >= 4) rank = "Specialist";

  useEffect(() => {
    if (lastRank && rank !== lastRank) {
      const ranks: Rank[] = ["Trainee", "Specialist", "Lead Analyst", "Master Screener"];
      if (ranks.indexOf(rank) > ranks.indexOf(lastRank)) {
        setRankUpNotif(rank);
      }
    }
    setLastRank(rank);
  }, [rank, lastRank]);

  const resetAllProgress = () => {
    if (window.confirm("Are you sure you want to wipe all classified progress? This cannot be undone.")) {
      setPersistedState({
        completedGames: {},
        earnedBadges: [],
        username: ""
      });
      handleReset();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="video-background"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-world-map-hologram-4392-large.mp4" type="video/mp4" />
      </video>
      <div className="scanline-overlay"></div>
      {showLeaderboard && <LeaderboardModal onClose={() => setShowLeaderboard(false)} totalScore={totalScore} username={username} setUsername={setUsername} />}
      {rankUpNotif && <RankUpToast rank={rankUpNotif} onClose={() => setRankUpNotif(null)} />}
      
      <HUD score={totalScore + score} streak={streak} totalCleared={totalCleared} rank={rank} badges={earnedBadges} />
      
      <main className="flex-1 p-4 md:p-8 max-w-[1600px] mx-auto w-full">
        {!started ? (
          <Hero onStart={handleStart} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_350px] gap-8 items-start">
            
            {/* Operations Panel */}
            <aside className="glassmorphism p-6 animate__animated animate__fadeInLeft w-full flex flex-col gap-6">
              <div className="border-b border-glass-border pb-4">
                <h2 className="text-xl flex items-center gap-2 font-outfit uppercase tracking-widest text-amazon-orange">
                  <i className="fa-solid fa-folder-closed"></i> Operations Map
                </h2>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter mt-1 font-mono">Security Clearance: Level 4 Required</p>
              </div>

              <div className="flex flex-col gap-6">
                {miniGames.map(game => {
                  const summary = completedGames[game.id];
                  const isActive = activeGameId === game.id || briefingGameId === game.id;
                  const isCleared = !!summary;
                  
                  return (
                    <article 
                      key={game.id} 
                      onClick={() => openBriefing(game.id)}
                      className={`
                        group relative cursor-pointer transition-all duration-300
                        bg-[#1e252b] border-2 rounded-r-lg rounded-bl-lg p-5
                        hover:translate-x-1
                        ${isActive ? 'border-amazon-orange glow-active' : isCleared ? 'border-green-900/30' : 'border-white/5'}
                      `}
                      style={{
                        boxShadow: isActive ? '0 0 20px rgba(255,153,0,0.1)' : 'none'
                      }}
                    >
                      {/* Folder Tab Effect */}
                      <div className={`
                        absolute -top-[10px] left-0 h-[10px] w-24 rounded-t-md transition-colors duration-300
                        ${isActive ? 'bg-amazon-orange' : isCleared ? 'bg-green-900/50' : 'bg-[#2a343d]'}
                      `}></div>

                      {/* Active Indicator Pulse */}
                      {isActive && (
                        <div className="absolute -left-1 top-4 bottom-4 w-1.5 bg-amazon-orange rounded-full animate-pulse shadow-[0_0_10px_#FF9900]"></div>
                      )}

                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                              File ID: {game.id.toUpperCase()}-00{miniGames.indexOf(game) + 1}
                            </span>
                            <h3 className="text-lg font-outfit font-bold text-white group-hover:text-amazon-orange transition-colors">
                              {game.title}
                            </h3>
                          </div>
                          
                          {/* Flags */}
                          <div className="flex -space-x-1">
                            {game.flags?.map(f => (
                              <img 
                                key={f} 
                                src={`https://flagcdn.com/w20/${f}.png`} 
                                alt={f} 
                                className="w-5 h-3.5 object-cover rounded-[1px] border border-black/50 shadow-sm"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2 italic">
                          "{game.description}"
                        </p>

                        <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/5">
                           <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">
                             {game.badge}
                           </span>
                           {isCleared && (
                             <span className="text-[10px] font-bold text-green-500/80 font-mono">
                               SCORE: {summary.score}/{summary.total}
                             </span>
                           )}
                        </div>
                      </div>

                      {/* Stamps */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                         {!isCleared && !isActive && <StampBadge text="PENDING" color="gray" className="scale-75" />}
                      </div>

                      {isCleared && !isActive && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-12">
                          <StampBadge text="CLEARED" color="green" className="scale-90" />
                        </div>
                      )}

                      {isActive && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none -rotate-6">
                          <StampBadge text="ACTIVE" color="orange" className="scale-90" />
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
              
              <div className="mt-8 flex flex-col gap-3">
                <button onClick={() => setShowLeaderboard(true)} className="btn-secondary w-full border-amazon-orange text-amazon-orange hover:bg-amazon-orange hover:text-black">
                  <i className="fa-solid fa-ranking-star"></i> Global Leaderboard
                </button>
                <button onClick={resetAllProgress} className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center justify-center gap-1 mt-4">
                  <i className="fa-solid fa-trash-can"></i> Reset All Progress
                </button>
              </div>
            </aside>

            {/* Case Panel */}
            <section className="glassmorphism p-6 md:p-10 min-h-[500px] flex flex-col animate__animated animate__fadeInUp w-full">
              {briefingGameId && briefingGame ? (
                <MissionBriefing
                  game={briefingGame}
                  onBegin={beginFromBriefing}
                  onBack={handleReset}
                />
              ) : !activeGameId ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-amazon-orange/10 rounded-full flex items-center justify-center mb-6 border border-amazon-orange">
                     <i className="fa-solid fa-satellite-dish text-4xl text-amazon-orange animate-pulse"></i>
                  </div>
                  <h3 className="text-3xl font-outfit mb-3">Awaiting Assignment...</h3>
                  <p className="text-gray-400 text-lg max-w-md">Select an operation from the map to begin analyzing cases and verifying intel.</p>
                </div>
              ) : currentIndex >= activeGameItems.length ? (
                // Completion State
                <div className="flex-1 flex flex-col animate__animated animate__fadeIn">
                  <div className="flex justify-between items-end mb-8 border-b border-glass-border pb-6">
                    <div className="flex flex-col gap-1">
                      <span className="bg-amazon-orange text-amazon-darker px-3 py-1 rounded text-[10px] font-black uppercase tracking-[0.2em] w-fit">Mission Debrief</span>
                      <h2 className="text-4xl font-outfit font-bold">{activeGame?.title}</h2>
                    </div>
                    <div className="text-right">
                       <p className="text-xs text-gray-500 uppercase font-mono">Terminal ID: {activeGame?.id.toUpperCase()}-ALPHA</p>
                       <p className="text-xs text-gray-500 uppercase font-mono">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="flex flex-col gap-6">
                      <div className="bg-black/40 border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-amazon-orange"></div>
                        <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">Operational Performance</h4>
                        
                        <div className="flex items-center gap-6">
                          <div className="relative">
                            <svg className="w-24 h-24 transform -rotate-90">
                              <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                              <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" 
                                strokeDasharray={2 * Math.PI * 40}
                                strokeDashoffset={2 * Math.PI * 40 * (1 - score / activeGameItems.length)}
                                className={`${score >= PASSING_SCORE ? 'text-green-500' : 'text-red-500'} transition-all duration-1000 ease-out`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-2xl font-bold font-outfit">{score}/{activeGameItems.length}</span>
                              <span className="text-[10px] uppercase opacity-50">Score</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${score >= PASSING_SCORE ? 'bg-green-500' : 'bg-red-500'}`}></div>
                              <span className="text-sm font-bold uppercase tracking-wider">{score >= PASSING_SCORE ? 'PASS' : 'FAIL'}</span>
                            </div>
                            <p className="text-xs text-gray-400">Accuracy: {Math.round((score / activeGameItems.length) * 100)}%</p>
                            <p className="text-xs text-gray-400">Target: {Math.round((PASSING_SCORE / activeGameItems.length) * 100)}%+</p>
                          </div>
                        </div>

                        {/* Stamp overlay */}
                        <div className="absolute -right-2 -bottom-2 rotate-[-15deg] group-hover:rotate-[-10deg] transition-transform duration-500">
                          <StampBadge 
                            text={score >= PASSING_SCORE ? "CLEARED" : "FAILED"} 
                            color={score >= PASSING_SCORE ? "green" : "red"} 
                            className="scale-125"
                          />
                        </div>
                      </div>

                      {score >= PASSING_SCORE && (
                        <div className="bg-amazon-orange/5 border border-amazon-orange/20 p-6 rounded-2xl animate__animated animate__fadeInUp">
                           <h4 className="text-sm uppercase tracking-widest text-amazon-orange font-bold mb-3">Intelligence Summary</h4>
                           <p className="text-gray-300 text-sm leading-relaxed italic">"{activeGame?.completionMessage}"</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-6">
                       <h4 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-2">Rewards & Recognition</h4>
                       
                       {score >= PASSING_SCORE ? (
                         <div className="flex flex-col gap-4">
                           {/* Badge Unlock */}
                           <div className="bg-glass-bg border border-white/10 p-4 rounded-xl flex items-center gap-4 animate__animated animate__zoomIn">
                             <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-xl shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                               <i className="fa-solid fa-certificate"></i>
                             </div>
                             <div>
                               <p className="text-xs text-gray-500 uppercase font-bold">Standard Achievement</p>
                               <p className="font-outfit font-bold">Operation Cleared</p>
                             </div>
                           </div>

                           {score === 5 && (
                             <div className="bg-amazon-orange/10 border border-amazon-orange/50 p-4 rounded-xl flex items-center gap-4 animate__animated animate__backInRight" style={{ animationDelay: '0.5s' }}>
                               <div className="w-12 h-12 bg-amazon-orange text-amazon-darker rounded-full flex items-center justify-center text-xl shadow-[0_0_20px_rgba(255,153,0,0.5)] glow-active">
                                 <i className="fa-solid fa-award"></i>
                               </div>
                               <div>
                                 <p className="text-xs text-amazon-orange uppercase font-bold">Elite Status</p>
                                 <p className="font-outfit font-bold">Flawless Execution</p>
                               </div>
                             </div>
                           )}

                           <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4 opacity-50 italic">
                             <div className="w-12 h-12 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center text-xl">
                               <i className="fa-solid fa-lock"></i>
                             </div>
                             <div>
                               <p className="text-xs text-gray-500 uppercase font-bold">Next Milestone</p>
                               <p className="font-outfit font-bold">Advanced Verification</p>
                             </div>
                           </div>
                         </div>
                       ) : (
                         <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4">
                            <i className="fa-solid fa-triangle-exclamation text-4xl text-red-500/50"></i>
                            <p className="text-gray-400 text-sm">Insufficient data accuracy. High-level clearance denied. Review Intel Vault data and initiate a new analysis session.</p>
                         </div>
                       )}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto pt-8 border-t border-glass-border">
                    {score >= PASSING_SCORE ? (
                      <button onClick={handleReset} className="btn-secondary w-full text-lg py-4 group">
                        <i className="fa-solid fa-map group-hover:translate-x-1 transition-transform"></i> Return to Map Explorer
                      </button>
                    ) : (
                      <button onClick={() => openBriefing(activeGame?.id || '')} className="btn-primary w-full text-lg py-4 group">
                        <i className="fa-solid fa-rotate-right group-hover:rotate-180 transition-transform duration-700"></i> Initiate Operational Retest
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                // Active Question State
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-end mb-8">
                    <div className="flex gap-2">
                      <span className="bg-amazon-orange text-amazon-darker px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{activeGame?.badge}</span>
                      <span className="border border-glass-border text-gray-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{activeGameItems[currentIndex].category}</span>
                    </div>
                    <div className="text-right min-w-[150px]">
                      <span className="text-sm text-gray-400 mb-1 block">Progression: {Math.round(((currentIndex + (answered ? 1 : 0)) / activeGameItems.length) * 100)}%</span>
                      <div className="h-1.5 bg-glass-border rounded-full overflow-hidden">
                        <div className="h-full bg-amazon-orange transition-all duration-400" style={{ width: `${Math.round(((currentIndex + (answered ? 1 : 0)) / activeGameItems.length) * 100)}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-outfit mb-3 leading-snug">{activeGameItems[currentIndex].question}</h3>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">{activeGameItems[currentIndex].context}</p>

                  <div className="flex flex-col gap-4 mb-8">
                    {activeGameItems[currentIndex].options.map((option, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrectAnswer = activeGameItems[currentIndex].answer === idx;
                      
                      let cardClass = "bg-glass-bg border border-glass-border rounded-xl p-5 cursor-pointer flex items-center gap-4 transition-all duration-200 hover:bg-glass-hover hover:border-white/30";
                      if (isSelected && !answered) cardClass = "bg-amazon-orange/5 border border-amazon-orange rounded-xl p-5 cursor-pointer flex items-center gap-4 transition-all duration-200";
                      if (answered && isCorrectAnswer) cardClass = "bg-green-500/10 border border-green-500 rounded-xl p-5 flex items-center gap-4 transition-all duration-200";
                      if (answered && isSelected && !isCorrectAnswer) cardClass = "bg-red-500/10 border border-red-500 rounded-xl p-5 flex items-center gap-4 transition-all duration-200 animate__animated animate__headShake";

                      return (
                        <label key={idx} className={`${cardClass} animate__animated animate__fadeInUp`} style={{ animationDelay: `${idx * 0.1}s` }}>
                          <input 
                            type="radio" 
                            name="option" 
                            value={idx} 
                            checked={isSelected}
                            onChange={() => !answered && setSelectedOption(idx)}
                            className="accent-amazon-orange w-5 h-5 cursor-pointer"
                            disabled={answered}
                          />
                          <div className="flex flex-col">
                            <strong className="font-outfit text-lg mb-1">{option.title}</strong>
                            <span className="text-sm text-gray-400">{option.detail}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <button onClick={submitAnswer} disabled={selectedOption === null || answered} className="btn-primary">
                      <i className="fa-solid fa-lock"></i> Lock Decision
                    </button>
                    <button onClick={handleNext} disabled={!answered} className="btn-secondary">
                      <i className="fa-solid fa-forward-step"></i> {currentIndex >= activeGameItems.length - 1 ? 'Finish Operation' : 'Next Case'}
                    </button>
                  </div>

                  {feedback && (
                    <div className={`mt-6 p-5 rounded-xl font-medium leading-relaxed bg-glass-bg border border-glass-border animate__animated animate__fadeIn ${feedback.type === 'success' ? 'border-l-4 border-l-green-500 bg-green-500/10' : feedback.type === 'error' ? 'border-l-4 border-l-red-500 bg-red-500/10' : ''}`}>
                      {feedback.type === 'success' ? <i className="fa-solid fa-circle-check mr-2"></i> : feedback.type === 'error' ? <i className="fa-solid fa-circle-exclamation mr-2"></i> : ''}
                      {feedback.message}
                    </div>
                  )}
                </div>
              )}
            </section>

            {/* Intel Panel */}
            <IntelVaultAccordions />

          </div>
        )}
      </main>
    </div>
  );
}
