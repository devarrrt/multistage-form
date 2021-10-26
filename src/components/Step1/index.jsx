import { Typography, TextField } from '@material-ui/core'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Form, MainContainer, PrimaryButton } from '..'
import { DataContext } from '../../DataContex';

const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, "First name should not contain numbers").required("First name is a required field"),
    lastName: yup.string().matches(/^([^0-9]*)$/, "Last name should not contain numbers").required("Last name is a required field"),
})

const Step1 = () => {
    const { setValues } = useContext(DataContext)
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })
    const history = useHistory()

    const onSubmit = (data) => {
        history.push('/step2')
        setValues(data)
    }

    return (
        <MainContainer>
            <Typography component="h2" vatiant="h5">
                🦄 Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    margin="normal"
                    variant="outlined"
                    type="text"
                    label="First Name"
                    name="firstName"
                    fullWidth
                    {...register('firstName')}
                />
                <TextField
                    margin="normal"
                    variant="outlined"
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    {...register('lastName')}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step1