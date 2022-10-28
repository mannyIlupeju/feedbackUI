import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  //to set up real time validation and button component
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

 //pulling out the prop/function we need from FeedbackContext
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  //if feedbackEdit.edit is true, the form will put the item text, rating in the form section in the form field. 
  useEffect(()=> {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

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
        text,
        rating,
      }

    
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedBack)
      } else {
        addFeedback(newFeedBack)

      }
      setText('')
    }


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
