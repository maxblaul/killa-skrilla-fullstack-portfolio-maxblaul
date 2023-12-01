import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { validateEmail } from '../../../utils/helpers';

// import 'dotenv/config';

function Contact() {
  // const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage(`A valid email is required.`);
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.trim()) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  if (state.succeeded) {
    return (
      <div>
        <p>Thank you for your message, I will get back to you ASAP!</p>
        <button className="button is-medium is-primary is-half m-6" onClick={() => window.open("/#contact")}>
          Back to About
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
// import { useState } from 'react';
// import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

// function TextInput({ label, placeholder, type, validation }) {
//   const [inputValue, setInputValue] = useState('');
//   const [inputOk, setInputOk] = useState(false);
//   const [blur, setBlur] = useState(false);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     setInputOk(validation(value));
//   };

//   const handleInputBlur = () => {
//     setBlur(true);
//   };

//   return (
//     <FormGroup className="text-start">
//       <Label for={`contact${label}`}>
//         {label}
//       </Label>
//       <Input
//         className={`${blur && (inputOk ? 'is-valid' : 'is-invalid')}`}
//         id={`contact${label}`}
//         name={`contact${label}`}
//         placeholder={placeholder}
//         value={inputValue}
//         type={type}
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//       />
//       <FormFeedback>
//         {blur && !inputOk && `Uh oh! You left this field blank. Please fill it in.`}
//         {blur && inputOk && type === 'email' && 'Please type a valid email address.'}
//       </FormFeedback>
//     </FormGroup>
//   );
// }

// // Usage
// export function ContactForm() {
//   return (
//     <div>
//       <TextInput label="Name" placeholder="Name" type="text" validation={(value) => value.length > 0} />
//       <TextInput
//         label="Message"
//         placeholder="Message for Max"
//         type="textarea"
//         validation={(value) => value.length > 0}
//       />
//       <TextInput
//         label="Email"
//         placeholder="email@example.com"
//         type="email"
//         validation={(value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)}
//       />
//     </div>
//   );
// }
