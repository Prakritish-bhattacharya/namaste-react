import React from "react";
import ReactDOM from "react-dom/client";

// React Element using React.createElement
const heading = React.createElement("h1", 
    {id: "heading"} , 
    "Namaste React"
);
/*=============================
  JSX Element Renderiong
  =============================*/
// create a Htmlelement using JSX
const jsxHeading = <h1 className = "heading">Namaste React using JSX</h1>
const loremText = (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis illum iure error maiores laudantium? Quibusdam dignissimos nobis doloribus veniam unde culpa ipsa aliquid, quo deserunt quasi harum officiis ea nesciunt.
    Pariatur beatae mollitia, ullam dolorum sed et repellat ea consequatur perferendis, exercitationem quam ipsa, dignissimos ab. Facere quae minus reiciendis delectus laboriosam incidunt porro minima optio, impedit atque eligendi rerum?
    Ducimus ea expedita placeat reiciendis sint ipsam quaerat, doloribus deserunt laudantium numquam error molestiae veniam quibusdam minima sed sunt consectetur omnis, mollitia quidem accusantium autem iure. Quo enim sed minima.</p>
)

/*=============================
  React Functional Component
  =============================*/
const HeadingComponent = () =>(
     <h1>Namaste React Functional Component</h1>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
root.render(loremText);
root.render(<HeadingComponent/>)