import { TextField } from '@material-ui/core'
import React, { forwardRef } from 'react'

const Input = forwardRef(({ props, ref }) => {

    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={ref}
            {...props}
        />
    )
})

export default Input
