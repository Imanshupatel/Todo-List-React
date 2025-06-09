import "./EV.css";

export const EventHandling = () => {
  // Named function handler
  const handleButtonClick = (event) => {
    console.log(event);          // Full event object
    console.log(event.target);   // The clicked element
    console.log(event.type);     // Event type: "click"
    alert("Hey, I am an onClick event");
  };

  // Function to welcome a specific user
  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
      {/* Named function */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />

      {/* Using arrow function to pass event explicitly */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <br />

      {/* Inline arrow function */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />

      {/* Simple inline event */}
      <button onClick={() => alert("Hey, I am an inline event function")}>
        Inline Arrow Function
      </button>
      <br />

      {/* Passing arguments to handler */}
      <button onClick={() => handleWelcomeUser("Vinod")}>Click Me</button>
      <button onClick={() => handleWelcomeUser("Ram")}>Click Me</button>
    </>
  );
};
