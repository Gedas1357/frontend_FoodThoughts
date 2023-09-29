

const IngredientBar = ({ingredient}) => {
    const { id, name} = ingredient;

    return (
    <div className="flex shrink-0 h-12 w-9/12 ms-[10%] simple-border rounded-lg items-center ps-2 font-medium">
        {name}
    </div>
    );
}

export default IngredientBar;