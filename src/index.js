import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

// Default values for the form
const initialValues = { petName: '', petType: '' }

function SimpleForm() {

  // State so we can track the pet objects we've added to our array
  const [pets, setPets] = useState(petsList)

  // State so we can store form values from the input
  const [formValues, setFormValues] = useState(initialValues)

  return (
    <div className='container'>
      <h1>Pets Form</h1>

      {pets.map((pet, index) => {
        return <div key={index}>{pet.petName} is a {pet.petType}</div>
      })}
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)
