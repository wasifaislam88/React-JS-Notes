// export const divide = (first, second) => {
//     return first / second
// }
// export const subtract = (first, second) => {
//     return first - second
// }
// export const multiply = (first, second) => {
//     return first * second
// }
// OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR.OR


// Stick to the uncommented version with a single export { ... } at the end for better readability, maintainability, and scalability.
// Best Practice given bellow




const divide = (first, second) => {
    return first / second
}

const subtract = (first, second) => {
    return first - second
}

const multiply = (first, second) => {
    return first * second
}


export { divide, subtract, multiply }


// export { ... } is a named export, so you can export multiple items simultaneously.
// Items must be imported using the same names.

// Comparison with export default:->
// Named exports let you export multiple items from a file, while export default allows you to export only one default item.


