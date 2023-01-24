import {Component} from "react";
import {nanoid} from "nanoid";
import styles from "./phonebook.module.scss"

class Phonebook extends Component {
  state ={
    items:[
      {
        id: nanoid(),
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: nanoid(),
        name: 'Hermione Kline',
        number: '498-45-90',
      },
      {
        id: nanoid(),
        name: 'Eden Clements',
        number: '467-17-79',
      },
      {
        id: nanoid(),
        name: 'Annie Copeland',
        number: '445-67-12',
      }
    ]
  }
  render() {
    const {items} = this.state;
    const contacts = items.map(({id,name,number})=> <li key={id}>{name}: {number} <button type='button'>Delete</button></li>)
    return(
      <div>
        <h2>Phonebook</h2>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <form>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input placeholder='name'/>
              </div>
              <div className={styles.formGroup}>
                <label>Number</label>
                <input
                  type='tel'
                  placeholder='number'
                  title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
                  pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
                  required/>
              </div>
              <button type='submit'>Add contact</button>
            </form>
          </div>
          <div className={styles.block}>
            <h2>Contact</h2>
            <div className={styles.formGroup}>
              <label>Find contacts by name</label>
              <input placeholder='name'/>
            </div>
            <ol>
              {contacts}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default Phonebook
