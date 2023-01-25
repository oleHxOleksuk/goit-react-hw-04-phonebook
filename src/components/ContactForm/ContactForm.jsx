import {Component} from "react";
import styles from "../Phonebook/phonebook.module.scss";
class ContactForm extends Component {
  state ={
    name:'',
    number:'',
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const {onSubmit}=this.props;
    onSubmit({...this.state});
    this.reset();
  }
  reset(){
    this.setState({
      title:'',
      number:'',
    })
  }
  handleChange =({target})=>{
    const {name, value}=target;
    this.setState({
      [name]:value
    })
  }
  render(){
    const {handleChange,handleSubmit} = this;
    const {name, number} = this.state;
    return (
      <form onSubmit={handleSubmit}>
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
    )
  }
}
export default ContactForm
