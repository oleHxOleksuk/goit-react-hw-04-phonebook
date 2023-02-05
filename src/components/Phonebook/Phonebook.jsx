import { useState } from 'react';
import { nanoid } from 'nanoid';

import styles from './phonebook.module.scss'

import ContactList from '../ContactList/ContactList';
import ContactFilter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';

const Phonebook = () => {
  const [phonebooks, setPhonebooks] = useState([]);
  const [filter, setFilter] = useState("");

  const isDublicate = (name) => {
    const normalized = name.toLowerCase();
    const people = phonebooks.find(({ name }) => {
      return name.toLowerCase() === normalized;
    })
    return Boolean(people);
  };

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    setPhonebooks(prevPhonebooks => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      return [newContact, ...prevPhonebooks];
    })
    return true;
  };

  const removeContact = (id) => {
    setPhonebooks( prevPhonebooks  => prevPhonebooks.filter(item => item.id !== id));
  };

  const handleFilter = ({ target }) => setFilter(target.value );

  const getFilterContact = () => {
    if (!filter) {
      return phonebooks;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = phonebooks.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  }

  const filterContact = getFilterContact();

  return (
    <div>
      <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contact</h2>
        <ContactFilter handleChange={handleFilter} />
        <ContactList removeContact={removeContact} items={filterContact} />
      </div>
    </div>
  );

}

export default Phonebook;
/*
class Phonebook extends Component {
  state = {
    items: [...items],
    filter: '',
  };

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('my-contacts'));
    if (items?.length) {
      this.setState({ items });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.state;
    if (prevState.items.length !== items.length) {
      localStorage.setItem('my-contacts', JSON.stringify(items));
    }
  }

  removeContact = id => {
    this.setState(({ items }) => {
      const newContacts = items.filter(item => item.id !== id);
      return { items: newContacts };
    });
  };

  addContact = ({ name, number }) => {
    if (this.isDublicate(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    this.setState(prevState => {
      const { items } = prevState;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { items: [newContact, ...items] };
    });
    return true;
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  isDublicate(name) {
    const normalized = name.toLowerCase();
    const { items } = this.state;
    const people = items.find(({ name }) => {
      return name.toLowerCase() === normalized;
    });
    return Boolean(people);
  }

  getFilterContact() {
    const { filter, items } = this.state;
    if (!filter) {
      return items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  }

  render() {
    const { addContact, handleFilter, removeContact } = this;

    const items = this.getFilterContact();
    return (
      <div>
        <div className={styles.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contact</h2>
        <ContactFilter handleChange={handleFilter} />
        <ContactList removeContact={removeContact} items={items} />
        </div>
      </div>
    );
  }
}
export default Phonebook;
*/
