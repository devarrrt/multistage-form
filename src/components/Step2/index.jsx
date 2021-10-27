import React, { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';
import { Typography, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import { DataContext } from '../../DataContex';
import { Form, MainContainer, PrimaryButton } from '..';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
})

const Step2 = () => {
    const { setValues } = useContext(DataContext)
    const history = useHistory()
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        history.push('/step3')
        setValues(data)
    }


    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if (!phoneNumber) {
            return value
        }
        return (
            phoneNumber.formatInternational()
        );
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🦄 Step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    margin="normal"
                    variant="outlined"
                    type="text"
                    label="Email"
                    name="email"
                    fullWidth
                    {...register('email')}
                />
                <TextField
                    margin="normal"
                    variant="outlined"
                    type="tel"
                    label="Phone"
                    name="phoneNumber"
                    fullWidth
                    onChange={(event) => event.target.value = normalizePhoneNumber(event.target.value)}
                />

                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step2

//34