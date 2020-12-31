import React, {useState, useEffect} from "react"
import Form from "./Form"
import './App.css';



function App() {
  const [templates, setTemplates] = useState([])
  const [template, setTemplate] = useState(null)
  const [meme, setMeme] = useState(null)

  useEffect(async () => {
    const data = await fetch("https://api.imgflip.com/get_memes")
    const response = await data.json()
    setTemplates(response.data.memes)
  }, [])
     
  if(meme) {
    return <div className="container">
        <img src={meme} alt="some meme" className="meme" /> 
    </div>
  }

  const clickHandler = (template) => {
    setTemplate(template)
  }

  return (
    <div className="App">
      
     {
      template &&
        <div className="templateGenerator">
          <img src={template.url} className="template" alt={template.name}/>
          <Form className="form" template={template} setMeme={setMeme}/>
      </div>
      }
      {
        !template && templates.map((template)=> (
            <img key={template.id} src={template.url} className="templates" onClick={
              () => {
                clickHandler(template)
              }
            } />
        ))
      }
    </div>
  );
}

export default App;
