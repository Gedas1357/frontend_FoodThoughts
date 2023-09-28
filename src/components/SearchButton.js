import React from 'react';

function SearchButton(props) {
    let {text: text} = props;

    return (
        <button className="flex w-4/12 h-3/5 complete-center simple-border hover:bg-red-400 font-bold">{text}</button>
    );
}

export default SearchButton;