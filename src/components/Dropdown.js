import React,{useState,useEffect} from "react"

const Dropdown=({options,selected,setSelected})=>
{
    const [open,setOpen]=useState(false)
    useEffect(()=>
    {   document.body.addEventListener('click',()=>
    {
      
    })   
    },[])
    const renderedOptions=options.filter((option)=>{
        if(option==selected) return false
        return true
    }).map((option)=>
    {
        return (<div className="item" key={option.value} onClick={()=>
        {
            setSelected(option)
        }}>
            {option.label}
        </div>)
    })

  return (
    <div className="ui form">
      <div className="field">
        <p className="label">Select a choice</p>
        <div className={`ui selection dropdown ${open? 'visible active' : ''}`} onClick={()=>
        {
            setOpen(!open)
        }}>
          <i className="dropdown icon"></i>
          <div className="text" >{selected.label}</div>
          <div className={`menu ${open? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown