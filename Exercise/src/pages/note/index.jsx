import { useState } from "react"

export default function Exercise(){
const [textInput, setTextInput] = useState ('')
const [error, setError] = useState ('')

const onSetTypes = (e) => {
      const inputText = e.target.value

      if(inputText.length <= 15){
        setTextInput(inputText)
      }else{
          setError('Maximum 15 character')
      }
}

  return(
    <div style={{marginLeft: '100px'}}>
      {textInput}
      <br />
      <textarea 
      placeholder="text"
      onChange={(e) => onSetTypes (e) } 
      
      />
      <br />
      {error}
    </div>
  )
}