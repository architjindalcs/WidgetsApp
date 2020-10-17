import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Search.css"
const Search=()=>
{
    const [term,setTerm]=useState("")
    const [results,setResults]=useState([]);
    console.log("Results: ",results)
    useEffect(()=>   //in this func directly async, await cant be directly used, so better use another function
    {
     
        const searchWiki=async ()=>
        {
            const res=await axios.get("https://en.wikipedia.org/w/api.php",{
                params:
                {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            
            });
            setResults(res.data.query.search)
        }
        const timeoutID=setTimeout(()=>   //basically done to produce time delay generation in order to prevent very fast searching and over-burdening the API
        {
            if(term!=="")
            searchWiki()
        },500)
        return ()=>        //cleaning in useEffect(), like destuctor
        {
            clearTimeout(timeoutID)
        }
     
    },[term])
    const renderedResults=results.map((result)=>
    {
        return (<div className="col-lg-4 col-md-6 col-sm-12"  key={result.pageid}>
            <div class="card" style={{width: "22rem", marginTop: "20px"}}>
  <div class="card-body">
    <h5 class="card-title">{result.title}</h5>
    <p dangerouslySetInnerHTML={{__html: result.snippet}}></p>

    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} class="card-link">Read more...</a>
  </div>
</div>
        </div>)
    })
    if(renderedResults.length!==0)
    {
        return(<div>
            <div className="ui form" style={{marginTop: "20px",width: "80%",margin: "auto"}}>
            <div className="field">
                <label>Enter search term</label>
                <input className="input" value={term} onChange={(e)=>
                {
                    setTerm(e.target.value)
                }}/>
            </div>
            </div>
            <div className="row">
                {renderedResults}
            </div>
            </div>)
    }
       
    return(<>
        <div className="ui form" style={{marginTop: "20px",width: "80%",margin: "auto"}}>
        <div className="field">
            <label>Enter search term</label>
            <input className="input" value={term} onChange={(e)=>
            {
                setTerm(e.target.value)
            }}/>
        </div>
        </div>
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-6">
            <img src="https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif" style=
            {{
                height: "500px",
                width: "700px",
                marginLeft: "50px"
            }}/>

            </div>
         

            <div className="col-2">
                
                </div>
        </div>
        </>)
}

export default Search