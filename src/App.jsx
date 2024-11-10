import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner'
import Recipi from './components/Recipi'
import Card from './components/Card'
import Want from './components/Want'
import { useState } from 'react'


function App() {
 const[addCook,setAddcook]=useState([]);

// function

 const handleCook= (info) =>{
      if(addCook.find(cook =>cook.recipe_id === info.recipe_id )){
        alert('Item is Already selected');}
        else{
      const newCook =[...addCook,info];
      setAddcook(newCook);
        }
 }

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Recipi></Recipi>

    <div className="flex justify-between mx-auto mt-10">
    <Card handleCook={handleCook}></Card>
    <Want addCook={addCook}></Want>
    </div>

    </>
  )
}

export default App
