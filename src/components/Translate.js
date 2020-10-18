import React, {useState ,useEffect} from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"
// const key="AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
const options=[
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "French",
        value: "fr"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label: "Italian",
        value: "it"
    }
    ,{
        label: "Japanese",
        value:"ja"
    }
]
const Translate=()=>
{
  
    const [langauge,setLanguage]=useState(options[0])
    const [text,setText]=useState("")
    return (<div className="row" style={{marginTop: "30px"}}>
        <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="ui form">
        <div className="field">
          
        <textarea placeholder="Enter some text here..." value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
        <Dropdown options={options} selected={langauge} setSelected={setLanguage}/>
        </div>

        <div className="col-lg-12 col-md-12 col-sm-12"  style={{height: "30px"}}></div>
        
       <div className="col-lg-8 col-md-12 col-sm-12" >
       <p className="display-4" style={{fontSize: "20px", borderLeft: "1px solid lightgray", paddingLeft: "10px"}}><Convert language={langauge} text={text} /></p>
       </div>
       <div className="col-lg-4 col-md-12 col-sm-12">
           <img src="https://assets.materialup.com/uploads/ee00e094-63a4-4e5e-953a-8c1fa1ebd60e/preview.gif" style={{height: "100%", width: "100%", marginTop: "50px"}} />
           </div> 
       
    </div>)
}

export default Translate