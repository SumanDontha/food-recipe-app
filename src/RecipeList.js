import React from 'react'
import './RecipeList.css'

const RecipeList = ({recipe}) => {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (<div className="recipeList">
            <img className="recipeList__img" src={recipe["recipe"]["image"]} />
            <p className="recipeList__name">{recipe["recipe"]["label"]}</p>
        </div>)
    )
}

export default RecipeList
