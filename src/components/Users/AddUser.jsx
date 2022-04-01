import Card from '../ui/Card';
import styles from './AddUser.module.css';

export default function AddUser(props) {

   const onFormSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <Card className={styles.input}>
         <form onSubmit={onFormSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age (years)</label>
            <input type="number" id="age" />
            <button type="submit">Submit</button>
         </form>
      </Card>
   );
}