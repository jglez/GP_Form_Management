import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

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

  // We can destructure any values we need from the synthetic event
  // We're going to pull the name and value from the evt.target object
  const change = evt => {
    const { name, value } = evt.target

    // We use setFormValues to update our state for our form and use special 
    // syntax to override the previous values of name and value of formValues
    // with our new values form the form input
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = evt => { }

  return (
    <div className='container'>
      <h1>Pets Form</h1>

      {/* Map over ours pets state and render a div for each pet object */}
      {pets.map((pet, index) => {
        return <div key={index}>{pet.petName} is a {pet.petType}</div>
      })}

      {/* We need to give our form an onSubmit function in order to be functional*/}
      <form onSubmit={submit}>
        <input
          // The prop name is to keep track of which input it is
          // It HAS to match with the properties pulled from formValues
          // (it's not just a label - has to correspond with the properties passed to the value prop)
          name='petName'
          type='text'

          // This sets what is typed inside this input to go into the 
          // petName property inside of formValues. It got the petName 
          // property from the useState hook being initialized to initialValues
          value={formValues.petName}

          // On input change, invoke the change function
          onChange={change}
        />

        <input
          name='petType'
          type='text'
          value={formValues.petType}
          onChange={change}
        />

        <button>Submit</button>

      </form>

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
