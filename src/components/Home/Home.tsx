import { Stack, Typography } from '@mui/material';
import gameModes from '../../data/modes';
import ModeSelector from './ModeSelector';

const Home = () => {
    return (
        <Stack alignItems="center" spacing={5} sx={{ mt: 1 }}>
            <Typography variant="h3" textAlign="center">
                Cool Words
            </Typography>
            <ModeSelector modes={Object.values(gameModes)} />
        </Stack>
    );
};

export default Home;
