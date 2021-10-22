import { Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './headerStyles'

const Header = () => {
    const styles = useStyles()

    return (
      <Typography className={styles.root} component="h1" variant="h5">
        Многоступенчатая форма 
      </Typography>
    )
}

export default Header
