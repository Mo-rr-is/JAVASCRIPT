
// // Pascal Casing
// function Message() {
//     // JSX: JavaScript XML
//     return <h1>Hello World</h1>
// }

const Message = () => {
    const name = "Morris";
    if (name)
        return <h1>Hello {name}</h1>
    return <h1>Hello World</h1>
}

export default Message;