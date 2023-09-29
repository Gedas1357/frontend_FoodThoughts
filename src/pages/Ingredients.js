import React, { useEffect, useState } from 'react';
import { getIngredients } from "../requests/Ingredients";

const Ingredients = () => {
    const [ingredientList, setIngredientList] = useState([]);

    useEffect(() => {
        getIngredients(setIngredientList);
    },[]);

    return (
        <div>
            {ingredientList.map((ingredient, index) => {
                return (
                    <div key={index}>
                        <h2>{ingredient.name}</h2>
                    </div>
                );
            })}

        </div>

    );
}

export default Ingredients;