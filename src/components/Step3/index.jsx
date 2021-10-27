import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { Form, MainContainer } from '..'
import { DataContext } from '../../DataContex'
import { FileInput} from '../index' 

const Step3 = () => {
    const history = useHistory()
    const { data, setValues } = useContext(DataContext)
    const { handleSubmit, control } = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const onSubmit = (data) => {
        history.push('/result')
        setValues(data)
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                🦄 Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* <FileInput name="files" control={control} /> */}
            </Form>
        </MainContainer>
    )
}

export default Step3
