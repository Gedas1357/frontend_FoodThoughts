import React from 'react';
import SearchButton from "../components/SearchButton";
import {useState} from 'react';

function Home(props) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (<div className="flex flex-col h-screen w-screen items-center">
        <div className="flex complete-center text-6xl h-1/6 w-8/12">
            <h1>What do you want to eat?</h1>
        </div>
        <div className="flex flex-row items-center justify-evenly h-1/6 w-8/12">
            <SearchButton text="Idk. What are the options?"/>
            <SearchButton text="Idk. You choose"/>
            <button className="fixed top-16 right-2 h-20 w-28 hover:simple-border hover:bg-green-600 font-bold"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>{isHovering && "Pizza"}</button>
        </div>
        </div>
    );
}

export default Home;