import React,{useState} from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import Route from "./components/Route"
import Header from "./components/Header"
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
const options=[
    {
        label: "The color Red",
        value: "red"
    },
    {
        label: "The color green",
        value: "green"
    },
    {
        label: "A shade of blue",
        value: "blue"
    }
]

const App=()=>
{
    const [selected,setSelected]=useState(options[0])
    return (
        <div className="container">
            <Header/>
        <Route path="/" >
            <Search />
            </Route> 
        <Route path="/translate">
            <Translate />
        </Route>
        </div>
    )
}
export default App