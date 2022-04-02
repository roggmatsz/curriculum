import { useState, useRef } from 'react';
import Card from '../ui/Card';
import ErrorModal from '../ui/ErrorModal';
import Button from '../ui/Button';
import styles from './AddUser.module.css';

export default function AddUser(props) {
   const nameInputRef = useRef();
   const ageInputRef = useRef();

   const [ error, setError ] = useState();

   const onFormSubmit = (event) => {
      event.preventDefault();

      const enteredUsername = nameInputRef.current.value;
      const enteredAge = ageInputRef.current.value;

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

      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
   };

   const errorHandler = () => {
      setError(null);
   }

   return (
      <div>
         { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
         <Card className={styles.input}>
            <form onSubmit={onFormSubmit}>
               <label htmlFor="username">Username</label>
               <input ref={nameInputRef} type="text" id="username" />
               <label htmlFor="age">Age (years)</label>
               <input ref={ageInputRef} type="number" id="age" />
               <Button type="submit">Submit</Button>
            </form>
         </Card>
      </div>
   );
}