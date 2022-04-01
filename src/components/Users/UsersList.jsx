import Card from '../ui/Card';
import styles from './AddUser.module.css';

export default function UsersList(props) {
   return (
      <Card className={styles.users}>
         <ul>
            {props.list.map(item => 
               <li>{item.name} ({item.age} years old)</li>   
            )}
         </ul>
      </Card>
   );
}