

const ContactList=({items,removeContact})=>{
  const contacts = items.map(({id,name,number})=> <li key={id}>{name}: {number} <button onClick={()=>removeContact(id)} type='button'>Delete</button></li>)
  return(
    <ol>
      {contacts}
    </ol>
  )
}
export default ContactList;
