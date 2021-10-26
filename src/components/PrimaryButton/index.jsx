import { Button } from '@material-ui/core'
import React from 'react'
import { useStyles } from './PrimaryButtonStyle'

const PrimaryButton = ({ children, ...props }) => {
    const styles = useStyles()

    return (
        <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.root}
                {...props}>
                {children}
            </Button>
        </div>
    )
}

export default PrimaryButton
