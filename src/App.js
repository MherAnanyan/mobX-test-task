import React, { useContext, useState } from 'react';
import { StoreContext } from './index';
import Modal from './modal/Modal';
import './App.scss';

function App(props) {
  const store = useContext(StoreContext);
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
  });
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setError({ ...error, [name]: false });
    store.update(value, name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (store.firstName && store.lastName) {
      setShow(true);
    } else {
      setError({
        firstName: !store.firstName,
        lastName: !store.lastName,
      });
    }
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="form-container">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className={`input-name ${error.firstName && 'error'}`}
              value={store.firstName}
              onChange={onChange}
            />
            {error.firstName && (
              <div className="error-text">Field is Required</div>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={`input-name ${error.lastName && 'error'}`}
              value={store.lastName}
              onChange={onChange}
            />
            {error.lastName && (
              <div className="error-text">Field is Required</div>
            )}
          </div>

          <button className="form-button" type="submit">
            Submit Data
          </button>
        </div>
      </form>
      <Modal
        title="My Modal"
        onClose={() => setShow(false)}
        show={show}
      >
        {store.firstName + ' ' + store.lastName}
      </Modal>
    </div>
  );
}

export default App;
