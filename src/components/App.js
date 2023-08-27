
import React from "react";
import './../styles/App.css';
import Form from "./Form";

const fields = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' },
];

const App = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted with values:', formData);
    // Here you can perform any further actions with the form data, like sending it to an API
  };

  return (
    <div>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

