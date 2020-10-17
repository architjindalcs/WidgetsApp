import React, {useState} from "react"

const Accordion=(props)=>
{
    const items=props.items;
    const [activeIndex,setActiveIndex] =useState(null) 
    //Note: useState(null) initializes the activeIndex with value null, and setActiveIndex is used to set this
    //value. Also for the multiple attributes diff useStates have to be used....

    const onTitleClick=(index)=>
    {
        setActiveIndex(index)
        //after this the complete function Accordion will re-render itself, but for this case...the useState()
        //initialization will not be done once again...
    }
    const renderedItems=items.map((item,index)=>
    {
        const active=(index===activeIndex ? "active" : "")
        return (
            <React.Fragment key={item.title}>
              <div className={`title ${active}`} onClick={()=>{
                  onTitleClick(index)
              }}>
                <i className="dropdown icon"></i>
                {item.title}
              </div>
              <div className={`content ${active}`}>
                <p>{item.content}</p>
              </div>
            </React.Fragment>
          );
    })
    return <div className="ui styled accordion">
        {renderedItems}
        </div>;
}

export default Accordion