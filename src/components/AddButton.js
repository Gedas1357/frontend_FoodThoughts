import plusIcon from '../assets/plusIcon.svg';

const AddButton = () => {

    return (
        <button className="w-12 h-12 simple-border rounded-full complete-center">
            <img src={plusIcon} alt="Add ingredient" className="h-4/5 w-4/5"/>
        </button>
    );
}

export default AddButton;