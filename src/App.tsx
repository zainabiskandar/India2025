import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { DailyPostPage } from './pages/DailyPostPage';
// ARCHIVED: LearningsPage moved to "Post-Trip Learnings (Archive)" frame for future use
// import { LearningsPage } from './pages/LearningsPage';
import { PlacesPage } from './pages/PlacesPage';
import { AboutPage } from './pages/AboutPage';
import { HandoffPage } from './pages/HandoffPage';
import { PreTripPage } from './pages/PreTripPage';
import { IndiaInfoPage } from './pages/IndiaInfoPage';

type Page = 'home' | 'post' | 'places' | 'about' | 'handoff' | 'pretrip' | 'indiainfo';

interface AppState {
  currentPage: Page;
  currentDay?: number;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'home'
  });

  const handleNavigate = (page: string, day?: number) => {
    setAppState({
      currentPage: page as Page,
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
      case 'places':
        return <PlacesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'handoff':
        return <HandoffPage onNavigate={handleNavigate} />;
      case 'pretrip':
        return <PreTripPage onNavigate={handleNavigate} />;
      case 'indiainfo':
        return <IndiaInfoPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-['Work_Sans',system-ui,sans-serif]">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar currentPage={appState.currentPage} onNavigate={handleNavigate} />
      <main id="main-content" className={`flex-1 ${appState.currentPage !== 'home' ? 'pt-20' : ''}`}>
        {renderCurrentPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}