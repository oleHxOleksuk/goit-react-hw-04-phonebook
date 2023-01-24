import {Component} from "react";

import styles from "./phonebook.module.scss"
class Phonebook extends Component {
  render() {
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
            </form>
          </div>
          <div className={styles.block}></div>
        </div>
      </div>
    )
  }
}
export default Phonebook
