import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  //to set up real time validation and button component
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  //validation to make sure text is more than 10 characters, function handles any changes in the input text
  const handleTextChange = (e) => {
    if(text === ""){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length >= 10) {
      const newFeedBack = {
        text: text,
        rating: rating,
      }
      handleAdd(newFeedBack)
    }
    setText('')

  }


  return (
    <Card>
      <form onSubmit = {handleSubmit}>
        <h2> How would you rate your service with us</h2>
        <RatingSelect select={(rating)=>setRating(rating)}/>
        <div className = "input-group">
          <input 
            onChange = {handleTextChange}
            type="text"
            placeholder= "Add review"
            value = {text}
        />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className = "message">{message}</div>}

      </form>
      </Card>
  )
}

export default FeedbackForm
