import { Typography } from '@material-ui/core'
import React from 'react'
import { Form, Input, MainContainer } from '..'

const Step1 = () => {
    return (
        <MainContainer>
            <Typography component="h2" vatiant="h5">
                Шаг 1
            </Typography>
            <Form>
            <Input/>
            </Form>
        </MainContainer>
    )
}

export default Step1
