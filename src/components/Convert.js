import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated,setTranslated]=useState("")
  useEffect(() => {
      console.log("Query",text)
      const doTrans=async ()=>
      {
          const res=await axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
              params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
              },
            }
          );
          setTranslated(res.data.data.translations[0].translatedText)
        
      }
      const timeoutID=setTimeout(()=>   //basically done to produce time delay generation in order to prevent very fast searching and over-burdening the API
      {
          if(text!=="")
          doTrans()
      },500)
      return ()=>        //cleaning in useEffect(), like destuctor
      {
          clearTimeout(timeoutID)
      }
  }, [language, text]);

  return (<>
    {translated}
  </>);
};

export default Convert;
