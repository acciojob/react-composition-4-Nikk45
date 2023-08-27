import React, { useState } from 'react';

const Form = ({ fields, onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
