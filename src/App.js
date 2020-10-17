import React from "react"
import Accordion from "./components/Accordion"
const items=[
    {
        title: "What is React?",
        content: "It is a frontend framework developed by Facebook."
    },
    {
        title: "Why React?",
        content: "It is the most famous front end library among Engineers"
    },
    {
        title: "How do you use React",
        content: "We use it to create components and combine them"
    }
]
const App=()=>
{
    return (<div><Accordion items={items} /></div>)
}
export default App