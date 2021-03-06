import React from 'react'
import styles from '../App.module.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const DropdownMenu = ({colors, onDelete, onChange, playerKey, onClick, clickValue, updatePlayer}) => {

    const doAll = (text, playerKey) => {
        onDelete(text);
        onChange(text, playerKey);
        onClick(text, playerKey);
        updatePlayer(text, playerKey);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick2 = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    

     const StyledMenu = withStyles({
        paper: {
          border: '1px solid #d3d4d5',
        },
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          {...props}
        />
      ));
      
      const StyledMenuItem = withStyles((theme) => ({
        root: {
          '&:focus': {
            backgroundColor: theme.palette.success.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.white,
            },
          },
        },
      }))(MenuItem);

    return (
        <Container className={styles.dropdownmenu}>
            <Grid
            justify="center"
            >
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleClick2}
                    style={{backgroundColor: "#212121", color:'white', justify:"center", }}
                >
                {clickValue}
                </Button>
                <StyledMenu
                    class="customized-menu"
                    id={playerKey}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    justify="center"
                >
                    {colors.map((color) => ( 
                        <StyledMenuItem onClick={handleClose}>
                            <ListItemText><div key={color.id} style={{textTransform: 'capitalize'}} onClick={() => {doAll(color.text, playerKey)}} >{color.text}</div></ListItemText>
                        </StyledMenuItem>
                    ))}
                </StyledMenu>
            </Grid>
        </Container>
    )
}

export default DropdownMenu
