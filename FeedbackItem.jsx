import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from 'react'

const FeedbackItem = ( { item } ) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card reverse={false}>
      <div className = "num-display">{item.rating}</div>

      {/* delete button */}
      <button onClick={()=>deleteFeedback(item.id)} 
      className = "close">
        <FaTimes color = "purple"/>
      </button>

      {/* edit button */}
      <button onClick = {()=> editFeedback(item)}className= "edit">
        <FaEdit color='purple'/>
      </button>


      <div className = "text-display"> {item.text}</div>
    </Card>
  )
}

export default FeedbackItem
