import React from 'react'
import "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) => {
  return(
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
      <h1>Where is the bottom Bun?!</h1>
    </div>
  )
}

export default burger;
