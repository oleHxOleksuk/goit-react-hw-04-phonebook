import styles from './filter.module.scss'

const ContactFilter =({handleChange}) =>{
  return(
    <div className={styles.formGroup}>
      <label>Find contacts by name</label>
      <input name='filter' onChange={handleChange} placeholder='name'/>
    </div>
  )
}
export default ContactFilter;
