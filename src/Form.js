import {useState} from "react"
import keys from "./keys"
import "./Form.css"

const Form = ({template, setMeme}) => {
    const [topText, setTopText] = useState(null)
    const [bottomText, setBottomText] = useState(null)

    const username = keys.username
    const password = keys.password
 
    return (
            
            <form onSubmit={
                    async (e) => {
                    e.preventDefault()
                    const response = await fetch(`https://api.imgflip.com/caption_image?template_id=${template.id}&text0=${topText}&text1=${bottomText}&username=${username}&password=${password}`)
                    const json = await response.json()
                    setMeme(json.data.url)
                }
             }>
                <input type="text" placeholder="Top Text" onChange={(e)=> setTopText(e.target.value)} />
                <input type="text" placeholder="Bottom Text" onChange={(e)=> setBottomText(e.target.value)} />
                <button type="submit">Generate Meme</button>
            </form>
    )
}

export default Form