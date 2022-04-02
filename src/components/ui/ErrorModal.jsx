import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props) {
   return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
}

function ModalOverlay(props) {
   return (
      <Card className={styles.modal}>
         <header className={styles.header}>
            <h2>{props.title}</h2>
         </header>
         <div className={styles.content}>
            <p>{props.message}</p>
         </div>
         <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
         </footer>
      </Card>
   );
}

export default function ErrorModal(props) {
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
         )}
         {ReactDOM.createPortal(
            <ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message} />,
            document.getElementById('overlay-root')
         )}
      </>
   )
} 