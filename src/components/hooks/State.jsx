// import "./EV.css";
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
  };

  const handleParentClick = () => {
    setTimeout(() => {
    console.log("Parent clicked");
    }, 2000);
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    setTimeout(() => {
    console.log("Child clicked");
    }, 4000);
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};