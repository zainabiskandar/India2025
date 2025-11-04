import React, { useState } from 'react';
import { NavBar } from './components/layout/NavBar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { DailyPostPage } from './pages/DailyPostPage';
// ARCHIVED: LearningsPage moved to "Post-Trip Learnings (Archive)" frame for future use
// import { LearningsPage } from './pages/LearningsPage';
import { JournalPage } from './pages/JournalPage';
import { AboutPage } from './pages/AboutPage';
import { PreTripPage } from './pages/PreTripPage';
import { IndiaInfoPage } from './pages/IndiaInfoPage';
import { PreludePage } from './pages/PreludePage';
import { GoodbyeSingaporePage } from './pages/GoodbyeSingaporePage';

type Page = 'home' | 'post' | 'journal' | 'about' | 'pretrip' | 'indiainfo' | 'prelude' | 'goodbye-sg';

interface AppState {
  currentPage: Page;
  currentDay?: number | string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'home'
  });

  // Narrowed page parameter to the Page union to avoid invalid page strings
  const handleNavigate = (page: Page, day?: number | string) => {
    setAppState({
      currentPage: page,
      currentDay: day
    });
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    const isHomePage = appState.currentPage === 'home';
    
    switch (appState.currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'post':
        return <DailyPostPage day={appState.currentDay || 1} onNavigate={handleNavigate} />;
      // ARCHIVED: Learnings page removed from active navigation
      // case 'learnings':
      //   return <LearningsPage onNavigate={handleNavigate} />;
      case 'journal':
        return <JournalPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'pretrip':
        return <PreTripPage onNavigate={handleNavigate} />;
      case 'indiainfo':
        return <IndiaInfoPage onNavigate={handleNavigate} />;
      case 'prelude':
        return <PreludePage onNavigate={handleNavigate} />;
      case 'goodbye-sg':
        return <GoodbyeSingaporePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-['Work_Sans',system-ui,sans-serif]">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar currentPage={appState.currentPage} onNavigate={handleNavigate} />
      <main id="main-content" className={`flex-1 ${appState.currentPage !== 'home' ? 'pt-20' : ''}`}>{renderCurrentPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}