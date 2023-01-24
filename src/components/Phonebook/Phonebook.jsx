import {Component} from "react";
import {nanoid} from "nanoid";
import styles from "./phonebook.module.scss";

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
      },
    ],
    name:'',
    number:'',
    filter:'',
  }
  removeContact(id){
    this.setState(({items})=>{
      const newContacts = items.filter(item=>item.id !== id);
      return{items: newContacts}
      }
    )
  }
  addContact = (e)=>{
    e.preventDefault();
    this.setState(prevState=>{
      const {name,number,items}=prevState;
      if (this.isDublicate(name)){
        return alert(`${name} is already in contacts`)
      }
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      return {items:[newContact,...items],name:'', number:''}
    })
  }
  handleChange =({target})=>{
    const {name, value}=target;
    this.setState({
      [name]:value
    })
  }
  isDublicate(name){
    const normalized = name.toLowerCase();
    const {items} = this.state;
    const people = items.find(({name})=>{
      return(name.toLowerCase() === normalized)
    })
    return Boolean(people)
  }
  getFilterContact(){
    const {filter,items} = this.state
    const normalizedFilter = filter.toLowerCase()
    const result = items.filter(({name}) =>{
      return (name.toLowerCase().includes(normalizedFilter))
    })
    return result
  }
  render() {
    const{addContact,handleChange}=this;
    const {number,name} = this.state;
    const items = this.getFilterContact()
    const contacts = items.map(({id,name,number})=> <li key={id}>{name}: {number} <button onClick={()=>this.removeContact(id)} type='button'>Delete</button></li>)
    return(
      <div>
        <h2>Phonebook</h2>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <form onSubmit={addContact}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input value={name} name='name' onChange={handleChange} placeholder='name' required/>
              </div>
              <div className={styles.formGroup}>
                <label>Number</label>
                <input
                  value={number}
                  name='number'
                  onChange={handleChange}
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
              <input name='filter' onChange={handleChange} placeholder='name'/>
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
