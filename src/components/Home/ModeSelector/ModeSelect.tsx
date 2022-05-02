import { ListItemButton, Box, Typography, Collapse, Grid, Divider, Tooltip, Paper } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { GameMode } from '../../../types/GameMode';
import moment from 'moment';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { getGameHistory, setGameMode } from '../../../redux/slices/main';
import allWords from '../../../data/words';
import { BestScore } from '../../../types/GameHistory';
import ScoreHelpers from '../../../helpers/ScoreHelpers';

const ModeSelect = (gameMode: GameMode & { hideDivider?: boolean }) => {
    const { name, description, subModes, nameColor, hideDivider } = gameMode;
    const gameHistory = useSelector(getGameHistory);

    const poolSize = useMemo<number>(() => {
        if (subModes !== undefined) return 0;
        return gameMode.pool?.length ?? allWords.length;
    }, [gameMode, subModes]);

    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const currentBest = useMemo<BestScore | undefined>(() => {
        if (subModes !== undefined) return undefined;
        return ScoreHelpers.getScore(gameHistory, gameMode.saveLocation);
    }, [gameHistory, gameMode, subModes]);

    const handleClick = useCallback(() => {
        if (subModes) {
            setIsExpanded(!isExpanded);
        } else {
            dispatch(setGameMode(gameMode));
        }
    }, [dispatch, gameMode, isExpanded, subModes]);

    const title = useMemo<JSX.Element | string>(() => {
        if (!currentBest) return '';
        return (
            <Paper sx={{ p: 1, m: 1 }} variant="outlined" square>
                <Typography textAlign="center">
                    Current Best: {currentBest.got} / {currentBest.outOf} (
                    {Math.floor((100 * currentBest.got) / currentBest.outOf)}%)
                    <br />
                    <span style={{ color: 'gray' }}>(Achieved {moment(currentBest.at).fromNow()})</span>
                </Typography>
            </Paper>
        );
    }, [currentBest]);

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <Tooltip
                    enterDelay={0}
                    placement="top"
                    TransitionProps={{ timeout: 0 }}
                    components={{ Tooltip: Paper }}
                    title={title}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography color={nameColor || undefined}>{name}</Typography>
                        <Typography color="gray">{description}</Typography>
                        {!subModes ? (
                            <Typography color="gray">
                                Pool: {poolSize} word{poolSize !== 1 ? 's' : ''}
                            </Typography>
                        ) : (
                            <Typography color="gray">{subModes.length} Categories</Typography>
                        )}
                    </Box>
                </Tooltip>
                {!!subModes && (isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>
            {!!subModes && (
                <>
                    <Collapse in={isExpanded}>
                        <Grid container spacing={1} justifyContent="space-evenly">
                            {subModes.map((e, i) => (
                                <Grid item key={i}>
                                    <ModeSelect key={i} {...e} hideDivider />
                                </Grid>
                            ))}
                        </Grid>
                    </Collapse>
                </>
            )}
            {!hideDivider && <Divider flexItem />}
        </>
    );
};

export default ModeSelect;
