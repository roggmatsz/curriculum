import { useState } from 'react';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import Button from '../ui/Button';
import styles from './AddUser.module.css';

export default function AddUser(props) {
   const [ enteredUsername, setEnteredUsername ] = useState('');
   const [ enteredAge, setEnteredAge ] = useState('');
   const [ error, setError ] = useState();

   const onFormSubmit = (event) => {
      event.preventDefault();

      if (enteredUsername.trim().length === 0 &&
          enteredAge.trim().length === 0) {
         setError({
            title: 'Invalid input',
            message: 'Enter a valid name or age.'
         });
         return;
      }
      if (+enteredAge < 1) {
         setError({
            title: 'Invalid age',
            message: 'Please enter a valid age.'
         });
         return;
      }

      props.onAddUser(enteredUsername, enteredAge);

      setEnteredUsername('');
      setEnteredAge('');
   };

   const onUsernameChange = (event) => {
      setEnteredUsername(event?.target?.value);
   }

   const onAgeChange = (event) => {
      setEnteredAge(event?.target?.value);
   }

   const errorHandler = () => {
      setError(null);
   }

   return (
      <div>
         { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
         <Card className={styles.input}>
            <form onSubmit={onFormSubmit}>
               <label htmlFor="username">Username</label>
               <input type="text" id="username" value={enteredUsername} onChange={onUsernameChange} />
               <label htmlFor="age">Age (years)</label>
               <input type="number" id="age" value={enteredAge} onChange={onAgeChange} />
               <Button type="submit">Submit</Button>
            </form>
         </Card>
      </div>
   );
}