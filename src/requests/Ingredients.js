import axios from "axios";

export const getIngredients = (setIngredients) => {
    const response = axios.get('http://127.0.0.1:8000/ingredients')
        .then(response => {
            //setIngredients();
            setIngredients(response.data);
            //console.log(response.data.type);
            //console.log(response);
            //console.log(response.data[0]);
            //console.log(Object.values(response.data))
            //setIngredients(response.data[0].type);
            //setIngredients(Object.values(response.data).name);
        })
    //console.log(response.data);
}
