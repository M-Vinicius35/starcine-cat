import React, { useState, useEffect } from 'react';
import Header from './components/header';
import CategoryList from './components/categorylist';
import Footer from './components/Footer';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main>
        <CategoryList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
