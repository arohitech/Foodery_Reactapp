import React from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploremenu/exploremenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import { useState } from 'react'


const Home = () => {
    const [category, setCategory] = useState("all");
  return (
    <div className='home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home

