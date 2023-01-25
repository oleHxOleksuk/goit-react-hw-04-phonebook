import {Component} from "react";
import {nanoid} from "nanoid";

import items from "../items";
import ContactList from "../ContactList/ContactList";
import ContactFilter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./phonebook.module.scss";

class Phonebook extends Component {
  state ={
    items:[...items],

    filter:'',
  }
  removeContact=(id)=>{
    this.setState(({items})=>{
      const newContacts = items.filter(item=>item.id !== id);
      return{items: newContacts}
      }
    )
  }
  addContact = ({name,number})=>{
      if (this.isDublicate(name)){
        return alert(`${name} is already in contacts`)
      }
      this.setState(prevState =>{
        const {items}=prevState
      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      return {items:[newContact,...items],name:'', number:''}
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
    if (!filter){
      return items;
    }
    const normalizedFilter = filter.toLowerCase()
    const result = items.filter(({name}) =>{
      return (name.toLowerCase().includes(normalizedFilter))
    })
    return result
  }
  render() {
    const{addContact,handleChange,removeContact}=this;
    const {number,name} = this.state;
    const items = this.getFilterContact()
    return(
      <div>
        <h1>Phonebook</h1>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <ContactForm onSubmit={addContact}/>
          </div>
          <div className={styles.block}>
            <h2>Contact</h2>
            <ContactFilter handleChange={handleChange}/>
            <ContactList removeContact={removeContact} items={items}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Phonebook
