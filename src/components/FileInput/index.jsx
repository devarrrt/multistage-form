import { ListItemIcon, ListItemText } from '@material-ui/core'
import { CloudUpload, InsertDriveFile } from '@material-ui/icons'
import { List, ListItem, Paper } from 'material-ui'
import React from 'react'
import Dropzone from 'react-dropzone'
import { Controller } from 'react-hook-form'
import { useStyles } from './FIleInputStyle'

const FileInput = ({ control, name }) => {
const { styles } = useStyles()

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => (
             <>
                 
             </>   
            )
            }
        />
    )
}

export default FileInput
