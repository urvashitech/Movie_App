
import './App.css'
import MovieCard from './component/MovieCard'
import NavBar from './component/NavBar'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <NavBar/>
  
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/favorites' element = {<Favorites/>}/>

    </Routes>
    
    </>
  )
}

export default App
