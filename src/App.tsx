import React, { useEffect } from 'react';
import Home from './components/Home';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getInGame, loadBestScore } from './redux/slices/main';
import Game from './components/Game';

function App() {
    const dispatch = useDispatch();
    const inGame = useSelector(getInGame);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(loadBestScore());
    }, [dispatch]);

    return (
        <div className="App">
            <Container maxWidth="lg">{inGame ? <Game /> : <Home />}</Container>
        </div>
    );
}

export default App;
