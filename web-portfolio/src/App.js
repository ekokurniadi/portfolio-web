import './App.css';
import { useEffect } from 'react'
import { keepTheme } from './pages/theme';

function App() {
    useEffect(() => {
        keepTheme();
        
    });
    return ( <div> </div>);
    }

    export default App;