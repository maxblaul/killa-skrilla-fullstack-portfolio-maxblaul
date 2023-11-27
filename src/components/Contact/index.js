import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '../utils/helpers';

require('dotenv').config()

function Contact() {
    const [ state,  handleSubmit ] = useForm(process.env.REACT_APP_FORM_ID);

    const [ formState, setFormState] = useState({ name: ' ', email: ' ', message: ' '});
    
}