import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import useStyles from '../../styles/Horarios.module';

const defaultHours = [
    { day: 'Lunes', hora: '10:30 - 23:00' },
    { day: 'Martes', hora: 'Cerrado' },
    { day: 'Miércoles', hora: '18:00 - 23:00' },
    { day: 'Jueves', hora: '10:30 - 23:00' },
    { day: 'Viernes', hora: '10:30 - 23:00' },
    { day: 'Sábado', hora: '10:30 - 23:00' },
    { day: 'Domingo', hora: '10:30 - 23:00' }
]

const Horarios = () => {
    const classes = useStyles();
    return (
        <Box className={classes.horas_div} id='horarios'>
            <Grid container justifyContent='center'>
                <Typography variant='h3' component='div' color={'var(--contrast-text)'}>Horarios</Typography>
            </Grid>
            <Grid container justifyContent={'center'}>
                <Grid item xs={6}>
                    <Typography variant='h5' component='div' color={'var(--contrast-text)'}>Horario de local</Typography>
                    <Grid container>
                        {
                            defaultHours.map((day) => (
                                <Fragment>
                                    <Grid item xs={6}>
                                        <Typography variant='body2' color={'var(--contrast-text)'}>{day.day}</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant='body2' color={'var(--contrast-text)'}>{day.hora} </Typography>
                                    </Grid>
                                </Fragment>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h5' component='div' color='var(--contrast-text)'> Horario de cocina</Typography>
                    <Grid container>
                        {
                            defaultHours.map((day) => (
                                <Fragment>
                                    <Grid item xs={6}>
                                        <Typography variant='body2' color={'var(--contrast-text)'}>{day.day}</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant='body2' color={'var(--contrast-text)'}>{day.hora} </Typography>
                                    </Grid>
                                </Fragment>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
};

export default Horarios;