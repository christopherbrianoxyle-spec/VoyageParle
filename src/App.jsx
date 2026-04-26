import React, { useState } from 'react'
import TaskBar from './components/TaskBar'
import MainContent from './components/MainContent'
import CategoryPanel from './components/CategoryPanel'
import './App.css'

function App() {
  const [selectedLevel, setSelectedLevel] = useState('A1')
  const [language, setLanguage] = useState('fr')
  const [selectedCategory, setSelectedCategory] = useState('salutations')

  return (
    <div className="app-container">
      <TaskBar 
        selectedLevel={selectedLevel} 
        setSelectedLevel={setSelectedLevel}
        language={language}
        setLanguage={setLanguage}
      />
      <div className="main-layout">
        <MainContent 
          selectedLevel={selectedLevel}
          language={language}
          selectedCategory={selectedCategory}
        />
        <CategoryPanel 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  )
}

export default App
