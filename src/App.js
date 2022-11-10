import Container from './components/Container';
import { ModalProvider } from './context/ModalContext';
import { MenuProvider } from './context/MenuContext';
import styles from './css/App.module.css'

export default function App() {
    return (
        <MenuProvider>
        <ModalProvider>
            <div className={styles.body}>
                <Container />
            </div>
        </ModalProvider>
        </MenuProvider>
    );
}


