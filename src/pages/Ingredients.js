import React, { useEffect, useState } from 'react';
import { getIngredients, postIngredient } from "../requests/Ingredients";
import IngredientBar from "../components/IngredientBar";
import AddButton from "../components/AddButton";

const Ingredients = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [ingredientName, setIngredientName] = useState("");

    useEffect(() => {
        getIngredients(setIngredientList);
    },[]);

    const handleAdd = (e) => {
        e.preventDefault();
        postIngredient(ingredientName);
    }

    return (
        <div className="flex flex-col min-h-0 ps-[10%] space-y-5">
            <h1 className="font-bold text-2xl pt-5">Ingredients</h1>
            <div className="flex flex-col right-1/4 space-y-3 h-3/6 grow-0 w-4/5 overflow-y-auto">
                {ingredientList.map((ingredient, index) => {
                    return (
                        <IngredientBar ingredient={ingredient} key={index}/>
                    );
                })}
            </div>
            <h1 className="font-bold text-2xl pt-5">Ingredient name</h1>
            <form className="flex flex-row space-x-3" onSubmit={handleAdd}>
                <input type="text"
                       required
                       value={ingredientName}
                       placeholder="E.g. Chicken"
                       onChange={(e) => setIngredientName(e.target.value)}
                       className="simple-border w-96 h-12 ps-2 rounded-lg font-medium placeholder:text-gray-700"/>
                <AddButton></AddButton>
            </form>
        </div>

    );
}

export default Ingredients;