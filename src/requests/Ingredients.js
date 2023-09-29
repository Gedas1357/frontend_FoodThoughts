import axios from "axios";

export const getIngredients = (setIngredients) => {
    const response = axios.get('http://127.0.0.1:8000/ingredients')
        .then(response => {
            setIngredients(response.data);
        })
}
