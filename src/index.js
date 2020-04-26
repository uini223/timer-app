import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/components/App';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const wrapper = document.getElementById('container');
if (!!wrapper) {
  ReactDOM.render(<App />, wrapper);
}
