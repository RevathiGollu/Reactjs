import React, { useState } from 'react';
import Modal from './Modal';


function Dynamic() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formFields, setFormFields] = useState([{ name: '', age: '' }]);

  const handleAddField = () => {
    setFormFields([...formFields, { name: '', age: '' }]);
  };

  const handleChange = (index, event) => {
    const updatedFields = [...formFields];
    updatedFields[index][event.target.name] = event.target.value;
    setFormFields(updatedFields);
  };

  const handleSubmit = () => {
    console.log('Form Data:', formFields);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Dynamic Form Modal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      
      <Modal 
        title="Dynamic Form" 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        {formFields.map((field, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
        <button onClick={handleAddField}>Add Field</button>
        <button onClick={handleSubmit}>Submit</button>
      </Modal>
    </div>
  );
};

export default Dynamic;
