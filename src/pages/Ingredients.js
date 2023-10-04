import React, { useEffect, useState } from 'react';
import { getIngredients, postIngredient, deleteIngredient } from "../requests/Ingredients";
import IngredientBar from "../components/IngredientBar";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";
import sortAsc from '../assets/sortAsc.svg';
import sortDesc from '../assets/sortDesc.svg';


const Ingredients = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [ingredientName, setIngredientName] = useState("");
    const [isSortingAscending, setIsSortingAscending] = useState(true);

    const Try = true;
    useEffect(() => {
        getIngredients(setIngredientList);
    },[]);

     async function handleAdd(e) {
        await postIngredient(ingredientName);
    }

    const toggleSortingOrder = () => {
        setIsSortingAscending((prevState) => !prevState);
    };

    async function handleDelete(ingredient) {
        if (window.confirm("Are you sure you want to delete \"" + ingredient.name + "\" from the ingredient list?")) {
            await deleteIngredient(ingredient.id);
            window.location.reload();
        }
    }

    return (
        <div className="flex flex-col min-h-0 ps-[10%] space-y-5">
            <div className="flex flex-row mt-5 space-x-3">
                <h1 className="font-bold text-2xl ">Ingredients</h1>
                <button onClick={toggleSortingOrder}>
                    {isSortingAscending ?
                        <img src={sortAsc} alt="Ascending" className="h-full w-full"/> :
                        <img src={sortDesc} alt="Descending" className="h-full w-full"/>}
                </button>
            </div>
            <div className="flex flex-col right-1/4 space-y-3 h-3/6 grow-0 w-4/5 overflow-y-auto">
                {ingredientList
                    .sort((a, b) => {
                        if (isSortingAscending)
                            return a.name.localeCompare(b.name);
                        else
                            return b.name.localeCompare(a.name);
                    })
                    .map((ingredient, index) => {
                        return (
                            <div className="flex flex-row space-x-3" key={index}>
                                <IngredientBar ingredient={ingredient}/>
                                <DeleteButton object={ingredient} clickEvent={handleDelete}/>
                            </div>
                        );
                    })
                }
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