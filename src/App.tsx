import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'

function App() {
  return (
      <div id="portfolio">
        <Sidebar />
        <div id='main-content-container'>
        <h1 id='main-title'>Carlos Leal</h1>
        <MainContent />
        </div>
      </div>    
  )
}

export default App
