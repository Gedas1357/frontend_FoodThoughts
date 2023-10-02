import trashIcon from '../assets/trashIcon.svg';
import { deleteIngredient } from "../requests/Ingredients";

const AddButton = ({ingredient}) => {
    const { id, name} = ingredient;

    async function handleDelete(e) {
        if (window.confirm("Are you sure you want to delete \"" + name + "\" from the ingredient list?")) {
            await deleteIngredient(id);
            window.location.reload();
        }
    }
    return (
        <button className="w-12 h-12 simple-border rounded-full complete-center" onClick={handleDelete}>
            <img src={trashIcon} alt="Delete ingredient" className="h-3/5 w-3/5"/>
        </button>
    );
}

export default AddButton;