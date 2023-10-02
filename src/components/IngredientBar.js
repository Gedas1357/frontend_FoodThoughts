

const IngredientBar = ({ingredient}) => {
    const {id, name} = ingredient;

    return (
    <div className="flex shrink-0 h-12 w-11/12 simple-border rounded-lg items-center ps-2 font-medium bg-gray-300">
        {name}
    </div>
    );
}

export default IngredientBar;