// NORMALLY
function DoSomething () {
    return false;
}

// NEW WAY - Arrow Function
const DoThing = () => {

}

// To export it
// export const... instead of export default ...

// Applying in React
const MyComponent = () => {
    return <div></div>
}

// ANONYMOUS FUNCTIONS - Function does not have a name
<button
    onClick={() => {
        console.log("Hello There!")
    }}
></button>