import React from 'react';
import RecipieList from './RecipieList';
import '../css/app.css'

function App() {
  return(
    <RecipieList recipes={ sampleRecipies }/>
  )
}

const sampleRecipies = [
  {
    id:1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:  "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken ",
    ingredients:[
      {
        id:1,
        name:'Chicken',
        amount:'2 pounds'
      },
      {
        id:2,
        name:'Salt',
        amount:'1 Tbs'
      }
    ]
  },
  {
    id:2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions:  "1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork ",
    ingredients:[
      {
        id:1,
        name:'Pork',
        amount:'3 pounds'
      },
      {
        id:2,
        name:'Paprika',
        amount:'2 Tbs'
      }
    ]
  }
]

export default App;
 