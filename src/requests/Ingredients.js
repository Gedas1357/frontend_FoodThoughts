import axios from "axios";

export async function getIngredients(setIngredients) {
    try {
        const response = await axios.get('http://127.0.0.1:8000/ingredients')
        setIngredients(response.data);
    } catch (error) {
        console.log("ERROR: " + error)
    }
}

export async function postIngredient(name){
    try {
        const response = await axios.post('http://127.0.0.1:8000/ingredient/post/', { name: name })
    } catch (error) {
        console.log("ERROR: " + error)
    }
}

export async function deleteIngredient(id){
    try {
        const response = await axios.delete('http://127.0.0.1:8000/ingredient/delete/', {
            data: {
                id: id
            }
        })
    } catch (error) {
        console.log("ERROR: " + error)
    }
}
