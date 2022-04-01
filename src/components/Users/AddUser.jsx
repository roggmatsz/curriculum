import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import styles from './AddUser.module.css';

export default function AddUser(props) {
   const [ enteredUsername, setEnteredUsername ] = useState('');
   const [ enteredAge, setEnteredAge ] = useState('');

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (enteredUsername.trim().length === 0) {
         return;
      }
      if (+enteredAge < 1) {
         return;
      }

      console.log(enteredAge, enteredUsername);

      setEnteredUsername('');
      setEnteredAge('');
   };

   const onUsernameChange = (event) => {
      setEnteredUsername(event?.target?.value);
   }

   const onAgeChange = (event) => {
      setEnteredAge(event?.target?.value);
   }

   return (
      <Card className={styles.input}>
         <form onSubmit={onFormSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={onUsernameChange} />
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" value={enteredAge} onChange={onAgeChange} />
            <Button type="submit">Submit</Button>
         </form>
      </Card>
   );
}