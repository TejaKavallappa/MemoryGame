import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import App from './components/app.jsx';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  ReactDOM.render(<App />, document.getElementById('main'));
});
