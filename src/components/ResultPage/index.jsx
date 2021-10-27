import React, { useContext } from 'react'
import { Paper, Typography, TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core'
import { useStyles } from './ResultPageStyles'

import { MainContainer } from '../index'
import { DataContext } from '../../DataContex'
import Swal from 'sweetalert2'
import Confetti from "react-confetti";
import PrimaryButton from '../PrimaryButton'
import { Link } from 'react-router-dom'


const ResultPage = () => {
    const { data } = useContext(DataContext)
    const styles = useStyles()

    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files')

    // const onSubmit = async () => {
    //     const formData = new FormData()
    //     if (data.files) {
    //         data.files.forEach((file) => {
    //             formData.append("files", file, file.name)
    //         })
    //     }
    //     entries.forEach((entry) => {
    //         formData.append(entry[0], entry[1])
    //     })


    //     const res = await fetch("http://localhost:4000/", {
    //         method: "POST",
    //         body: formData,
    //     });

    //     if (res.status === 200) {
    //         Swal.fire("Great job!", "You've passed the challenge!", "success");
    //         setSuccess(true);
    //     }
    // }
    // if (success) {
    //     return <Confetti />;
    // }

    const onSubmit = () => {
        return <Confetti />;
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                📋 Form Values
            </Typography>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Тип</TableCell>
                            <TableCell align="right">Значение</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map(entry => (
                            <TableRow key={entry[0]}>
                                <TableCell component="th" scope="row">
                                    {entry[0]}
                                </TableCell>
                                <TableCell align="right">{entry[1].toString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
            <Link to="/">Start over</Link>
        </MainContainer>

    )
}

export default ResultPage
