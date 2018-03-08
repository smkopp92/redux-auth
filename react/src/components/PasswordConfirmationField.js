import React from 'react';

const PasswordConfirmationField = ({ input, label, placeholder, meta: { touched, error }, type, id }) => {
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
        {touched && error && <span style={{color: 'red'}}>{error}</span>}
      </div>
      <div>
        <input {...input} type={type} id={id} />
      </div>
    </div>
  );
}

export default PasswordConfirmationField;
