import { MenuProvider } from './context/MenuContext';
import { ModalProvider } from './context/ModalContext';
import { OptionsProvider } from './context/OptionsContext';
import { lazy, Suspense } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import styles from './css/App.module.css'
const Container = lazy(() => import('./components//container/Container'));

export default function App() {
    return (
        <MenuProvider>
        <ModalProvider>
        <OptionsProvider>
            <Suspense fallback={<BarLoader color="#64EEBC" speedMultiplier={0.1}/>}>
                <div className={styles.body}>
                    <Container />
                </div>
            </Suspense>
        </OptionsProvider>
        </ModalProvider>
        </MenuProvider>
    );
}


