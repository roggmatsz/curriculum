import Card from '../ui/Card';
import Button from '../ui/Button';
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
            <Button type="submit">Submit</Button>
         </form>
      </Card>
   );
}