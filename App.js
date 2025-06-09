// const heading = React.createElement("h1", {id: "heading"}, "Hello from React");
// console.log(heading);

const parent = React.createElement("div", {id:"parent"},

    [React.createElement("div", {id: "child"}, 
        React.createElement("h1", {}, "This is nested heading")
    ),React.createElement("div", {id: "child2"}, 
        React.createElement("h1", {}, "This is nested heading")
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);