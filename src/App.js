import { Component } from 'react';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
