// components/EventProps.jsx
import React from "react";

export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    };

    const handleHover = () => {
        alert(`Hey, thanks for hovering!`);
    };

    return (
        <>
            <WelcomeUser
                onButtonClick={() => HandleWelcomeUser("Vinod")}
                onMouseEnter={handleHover}
            />
        </>
    );
};

const WelcomeUser = (props) => {
    const { onButtonClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log("Hey user, welcome");
        onClick(); // call the function
    };

    return (
        <>
            <button onClick={onButtonClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    ); 
};
 