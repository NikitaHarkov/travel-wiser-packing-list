import React, { useState } from 'react';
import './Modal.css';
import { usePackingListContext } from '../../context/packingListContext';
const Modal = () => {
  const {
    isShowModal,
    closeModal,
    createPackingList,
  } = usePackingListContext();
  const [form, setForm] = useState({
    name: '',
    template: '',
  });
  const { name, template } = form;

  const submitHandler = e => {
    e.preventDefault();
    createPackingList(form);
  };

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={`${
        isShowModal ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <form onSubmit={submitHandler}>
        <div className='modal-container'>
          <h2>Create new packing list</h2>
          <input
            className='input'
            type='text'
            name='name'
            value={name}
            onChange={changeHandler}
            placeholder='Name'
            required
          />
          <select
            name='template'
            id='template'
            onChange={changeHandler}
            value={template}
          >
            <option value='This is first template'>
              This is first template
            </option>
            <option value='Adams template'>Adams template</option>
            <option value='Socks and essentials'>Socks and essentials</option>
          </select>
          <button className='button-primary pink' type='submit'>
            Create new
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
