import axios from "axios";

export const getIngredients = (setIngredients) => {
    const response = axios.get('http://127.0.0.1:8000/ingredients')
        .then(response => {
            setIngredients(response.data);
        }).catch(function (error) {
            console.log(error);
        });
}

export const postIngredient = (name) => {
    axios.post('http://127.0.0.1:8000/ingredient/post/', {
        name: name,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
