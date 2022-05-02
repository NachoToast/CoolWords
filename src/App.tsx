import React, { useEffect } from 'react';
import Home from './components/Home';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getGameMode, loadGameHistory } from './redux/slices/main';
import Game from './components/Game';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const gameMode = useSelector(getGameMode);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(loadGameHistory());
    }, [dispatch]);

    return (
        <div className="App">
            <Container maxWidth="lg">{gameMode !== null ? <Game /> : <Home />}</Container>
        </div>
    );
}

export default App;
