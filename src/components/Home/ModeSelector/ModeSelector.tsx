import { Grid } from '@mui/material';
import { GameMode } from '../../../types/GameMode';
import ModeSelect from './ModeSelect';

const ModeSelector = ({ modes }: { modes: GameMode[] }) => {
    return (
        <Grid container justifyContent="center">
            {modes.map((e, i) => (
                <Grid item key={i} xs={12}>
                    <ModeSelect {...e} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ModeSelector;
