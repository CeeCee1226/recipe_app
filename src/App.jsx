import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import FoodItem from './components/FoodItem/FoodItem'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <FoodItem/>
      <FoodDisplay/>
    </div>
  )
}

export default App
