import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
      <div className = "about">
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
      </div>
      
      <Link to = '/'>Back to Home</Link>
    </Card>
    
   
   
  )
}

export default AboutPage
