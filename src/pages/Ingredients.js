import React, { useEffect, useState } from 'react';
import { getIngredients } from "../requests/Ingredients";
import IngredientBar from "../components/IngredientBar";

const Ingredients = () => {
    const [ingredientList, setIngredientList] = useState([]);

    useEffect(() => {
        getIngredients(setIngredientList);
    },[]);

    return (
        <div className="flex flex-col right-1/4 space-y-3 max-h-4/5 w-full overflow-y-auto pt-5">
            {ingredientList.map((ingredient, index) => {
                return (
                    <IngredientBar ingredient={ingredient} key={index}/>
                );
            })}

        </div>

    );
}

export default Ingredients;