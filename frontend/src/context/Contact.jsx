import React from 'react'
import { createContext,useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactContext = createContext(null);

export const useContact = () => useContext(ContactContext);

export const ContactProvider = (props) => {
        let [data,setData] = React.useState(null);
        const baseURL = import.meta.env.MODE === "development" ? 'http://localhost:3000' :'/';
        axios.defaults.baseURL = baseURL;
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.defaults.withCredentials = true;

        const sendData = async(formData) => {
           console.log("formData",formData);
           const to = 'whatsapp:+918764064696'; // Replace with the recipient's WhatsApp number
           await axios.post('/send-message', {formData,to},) // Adjust the URL as needed
            .then(response => {
            toast.success('Message sent successfully!');
            console.log('Response:', response.data);
            })
            .catch(error => {
            toast.error('Failed to send message. Please try again later.');
            console.error('Error:', error);
            });
        
    }
  return (
    <ContactContext.Provider value={{data,setData,sendData}}>
      {props.children}
    </ContactContext.Provider>
  )
}

