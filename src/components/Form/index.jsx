import React from 'react'
import { useStyles } from './formStyles'

const Form = ({ children, ...props }) => {
    const styles = useStyles()

    return (
        <form
            className={styles.root}
            noValidate {...props}>
            {children}
        </form>
    )
}

export default Form
