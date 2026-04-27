import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import 'animate.css';
import { miniGames, referenceData, differenceData } from './data';

function Header({ score, streak, totalCleared, rank, badges }) {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center p-4 md:px-8 mx-0 md:mx-8 mt-4 glassmorphism animate__animated animate__fadeInDown">
      <div className="flex items-center gap-3 text-2xl font-extrabold mb-4 md:mb-0 font-outfit">
        <i className="fa-solid fa-shield-halved text-amazon-orange"></i>
        <span>Credential Intel</span>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="bg-black/30 px-4 py-2 rounded-full border border-glass-border flex items-center gap-2 font-semibold text-sm" title="Current Rank">
          <i className="fa-solid fa-medal text-amazon-orange"></i>
          <span>{rank}</span>
        </div>
        <div className="bg-black/30 px-4 py-2 rounded-full border border-glass-border flex items-center gap-2 font-semibold text-sm" title="Earned Badges">
          <i className="fa-solid fa-award text-amazon-orange"></i>
          <span>{badges.length}</span>
        </div>
        <div className="bg-black/30 px-4 py-2 rounded-full border border-glass-border flex items-center gap-2 font-semibold text-sm" title="Total Score">
          <i className="fa-solid fa-star text-amazon-orange"></i>
          <span>{score}</span>
        </div>
        <div className="bg-black/30 px-4 py-2 rounded-full border border-glass-border flex items-center gap-2 font-semibold text-sm" title="Current Streak">
          <i className="fa-solid fa-fire text-amazon-orange"></i>
          <span>{streak}</span>
        </div>
        <div className="bg-black/30 px-4 py-2 rounded-full border border-glass-border flex items-center gap-2 font-semibold text-sm" title="Operations Cleared">
          <i className="fa-solid fa-check-double text-amazon-orange"></i>
          <span>{totalCleared} / {miniGames.length}</span>
        </div>
      </div>
    </header>
  );
}

function Hero({ onStart }) {
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

function LeaderboardModal({ onClose, totalScore, username, setUsername }) {
  const [leaders, setLeaders] = useState([]);
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

  const handleSubmit = async (e) => {
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
       
       /* REAL SUBMIT LOGIC:
       await fetch(SCRIPT_URL, {
         method: "POST",
         mode: "no-cors",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: username, score: totalScore })
       });
       setSubmitted(true);
       setSubmitting(false);
       fetchLeaders();
       */
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

function IntelVault() {
  return (
    <aside className="flex flex-col gap-4 animate__animated animate__fadeInRight w-full lg:w-80">
      <div className="glassmorphism p-4">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit">
          <i className="fa-solid fa-book-journal-whills"></i> Intel Vault
        </h2>
        <p className="text-sm text-gray-400 mb-4">World Briefings for quick reference.</p>
        <div className="flex flex-col gap-4">
          {referenceData.map((item, idx) => (
            <article key={idx} className="bg-black/20 border border-glass-border rounded-lg p-4 text-sm">
              <h3 className="text-amazon-orange mb-2 font-outfit text-base">{item.country}</h3>
              <p className="text-gray-400 mb-2">{item.summary}</p>
              <ul className="list-disc pl-5 text-gray-300">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="mb-1">{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="glassmorphism p-4">
        <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit">
          <i className="fa-solid fa-code-compare"></i> Core Differences
        </h2>
        <div className="flex flex-col gap-4">
          {differenceData.map((item, idx) => (
            <article key={idx} className="bg-black/20 border border-glass-border rounded-lg p-4 text-sm">
              <h3 className="text-amazon-orange mb-2 font-outfit text-base">{item.title}</h3>
              <p className="text-gray-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [activeGameId, setActiveGameId] = useState(null);
  const [activeGameItems, setActiveGameItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [completedGames, setCompletedGames] = useState({});
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null);
  
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [username, setUsername] = useState("");

  const activeGame = miniGames.find(g => g.id === activeGameId);
  const PASSING_SCORE = 4;

  const resetQuestionState = (message = null) => {
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

  const startMiniGame = (id) => {
    const game = miniGames.find(g => g.id === id);
    if (!game) return;
    
    const shuffled = [...game.items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    setActiveGameId(id);
    setActiveGameItems(selected);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    resetQuestionState(game.emptyMessage);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleReset = () => {
    setActiveGameId(null);
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
      setScore(prev => prev + 1);
      
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
      
      if (hasPassed) {
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
      resetQuestionState(activeGame.emptyMessage);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const totalScore = Object.values(completedGames).reduce((acc, curr) => acc + curr.score, 0);
  const totalCleared = Object.keys(completedGames).length;
  
  let rank = "Trainee";
  if (totalScore >= 12) rank = "Master Screener";
  else if (totalScore >= 8) rank = "Lead Analyst";
  else if (totalScore >= 4) rank = "Specialist";

  return (
    <div className="flex flex-col min-h-screen">
      {showLeaderboard && <LeaderboardModal onClose={() => setShowLeaderboard(false)} totalScore={totalScore} username={username} setUsername={setUsername} />}
      
      <Header score={totalScore} streak={streak} totalCleared={totalCleared} rank={rank} badges={earnedBadges} />
      
      <main className="flex-1 p-4 md:p-8 max-w-[1600px] mx-auto w-full">
        {!started ? (
          <Hero onStart={handleStart} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_350px] gap-8 items-start">
            
            {/* Operations Panel */}
            <aside className="glassmorphism p-6 animate__animated animate__fadeInLeft w-full">
              <h2 className="text-xl mb-6 pb-3 flex items-center gap-2 border-b border-glass-border font-outfit">
                <i className="fa-solid fa-map-location-dot"></i> Operations Map
              </h2>
              <div className="flex flex-col gap-4">
                {miniGames.map(game => {
                  const summary = completedGames[game.id];
                  const isActive = activeGameId === game.id;
                  const isCleared = !!summary;
                  
                  return (
                    <article 
                      key={game.id} 
                      onClick={() => startMiniGame(game.id)}
                      className={`bg-glass-bg border rounded-xl p-5 cursor-pointer transition-all duration-300 relative overflow-hidden group hover:translate-x-1 ${isActive ? 'border-amazon-orange bg-amazon-orange/10' : isCleared ? 'border-green-500/50 bg-green-500/5' : 'border-glass-border hover:border-amazon-orange hover:bg-glass-hover'}`}
                    >
                      {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amazon-orange"></div>}
                      {isCleared && !isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>}
                      
                      <div className="flex justify-between text-xs mb-2 text-gray-400">
                        <span className="font-semibold uppercase tracking-wider"><i className="fa-solid fa-folder-open"></i> {game.badge}</span>
                        {isCleared ? (
                          <span className="text-green-400 font-bold"><i className="fa-solid fa-check"></i> {summary.score}/{summary.total}</span>
                        ) : (
                          <span>Pending</span>
                        )}
                      </div>
                      <h3 className="text-lg font-outfit mb-1">{game.title}</h3>
                      <p className="text-xs text-gray-400">{game.description}</p>
                    </article>
                  );
                })}
              </div>
              
              <div className="mt-8 flex flex-col gap-3">
                <button onClick={() => setShowLeaderboard(true)} className="btn-secondary w-full border-amazon-orange text-amazon-orange hover:bg-amazon-orange hover:text-black">
                  <i className="fa-solid fa-ranking-star"></i> Global Leaderboard
                </button>
              </div>
            </aside>

            {/* Case Panel */}
            <section className="glassmorphism p-6 md:p-10 min-h-[500px] flex flex-col animate__animated animate__fadeInUp w-full">
              {!activeGameId ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-amazon-orange/10 rounded-full flex items-center justify-center mb-6 border border-amazon-orange">
                     <i className="fa-solid fa-satellite-dish text-4xl text-amazon-orange animate-pulse"></i>
                  </div>
                  <h3 className="text-3xl font-outfit mb-3">Awaiting Assignment...</h3>
                  <p className="text-gray-400 text-lg max-w-md">Select an operation from the map to begin analyzing cases and verifying intel.</p>
                </div>
              ) : currentIndex >= activeGameItems.length ? (
                // Completion State
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-end mb-8">
                    <div className="flex gap-2">
                      <span className="bg-amazon-orange text-amazon-darker px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Operation Status</span>
                      <span className="border border-glass-border text-gray-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{activeGame.title}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-outfit mb-3">
                    {score >= PASSING_SCORE ? `${activeGame.badge} successfully executed.` : `${activeGame.badge} Failed.`}
                  </h3>
                  <p className="text-lg text-gray-400 mb-8">
                    Final operational score: <span className="font-bold text-white">{score}</span> out of {activeGameItems.length}. You need {PASSING_SCORE} to pass.
                  </p>
                  
                  {score >= PASSING_SCORE ? (
                     <div className="bg-green-500/10 border border-green-500 rounded-xl p-6 flex flex-col gap-4 animate__animated animate__zoomIn mb-6">
                       <strong className="text-xl font-outfit"><i className="fa-solid fa-star text-green-500"></i> Mission Accomplished</strong>
                       <span className="text-gray-300">{activeGame.completionMessage}</span>
                       {score === 5 && (
                         <div className="mt-2 inline-flex items-center gap-2 text-amazon-orange font-bold bg-amazon-orange/10 px-4 py-2 rounded-lg border border-amazon-orange w-fit">
                           <i className="fa-solid fa-award text-2xl"></i> Flawless Execution Badge Earned!
                         </div>
                       )}
                     </div>
                  ) : (
                     <div className="bg-red-500/10 border border-red-500 rounded-xl p-6 flex flex-col gap-4 animate__animated animate__shakeX mb-6">
                       <strong className="text-xl font-outfit"><i className="fa-solid fa-triangle-exclamation text-red-500"></i> Retest Required</strong>
                       <span className="text-gray-300">Your score was insufficient. The command center requires a retest with a new set of variables to ensure accuracy.</span>
                     </div>
                  )}

                  <div className="flex gap-4 mt-auto">
                    {score >= PASSING_SCORE ? (
                      <button onClick={handleReset} className="btn-secondary w-full text-lg py-4">
                        <i className="fa-solid fa-map"></i> Return to Map
                      </button>
                    ) : (
                      <button onClick={() => startMiniGame(activeGame.id)} className="btn-primary w-full text-lg py-4">
                        <i className="fa-solid fa-rotate-right"></i> Initiate Retest
                      </button>
                    )}
                  </div>
                  
                </div>
              ) : (
                // Active Question State
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-end mb-8">
                    <div className="flex gap-2">
                      <span className="bg-amazon-orange text-amazon-darker px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">{activeGame.badge}</span>
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
            <IntelVault />

          </div>
        )}
      </main>
    </div>
  );
}
