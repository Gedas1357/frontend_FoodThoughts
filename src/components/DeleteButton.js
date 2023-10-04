import trashIcon from '../assets/trashIcon.svg';
import { deleteIngredient } from "../requests/Ingredients";

const DeleteButton = ({ object, clickEvent }) => {
    async function handleDelete() {
        clickEvent(object);
    }

    return (
        <button className="w-12 h-12 simple-border rounded-full complete-center" onClick={handleDelete}>
            <img src={trashIcon} alt="Delete ingredient" className="h-3/5 w-3/5"/>
        </button>
    );
}

export default DeleteButton;