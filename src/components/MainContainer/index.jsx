import { Container } from '@material-ui/core'
import React from 'react'
import { useStyles } from './style'

const MainContainer = ({ children, ...props }) => {
    const styles = useStyles()

    return (
        <Container container="main"
            maxWidth="xs"
            className={styles.root}
            {...props} >
            {children}
        </Container>
    )
}

export default MainContainer
