import Dropdown from 'react-bootstrap/Dropdown'
import {useState} from 'react'
import styles from '../App.module.css';

const DropdownMenu = ({colors, onDelete, onChange, playerKey}) => {

    const [value, setValue] = useState('Choose Colour');

    const handleClick = (text) => {
        setValue(text);
    }

    const doAll = (id, text, playerKey) => {
        onDelete(id);
        onChange(text, playerKey);
        handleClick(text);
     }

    return (
        <div className={styles.dropdownmenu}>
            <Dropdown>
                <Dropdown.Toggle style={dropdownitemstyle} variant="success" id="dropdown-basic">
                {value}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {colors.map((color) => ( 
                        <Dropdown.Item><div key={color.id} style={{textTransform: 'capitalize'}} onClick={() => {doAll(color.id, color.text, playerKey)}} >{color.text}</div></Dropdown.Item>
                    ))}
                </Dropdown.Menu>

            </Dropdown>
           
        </div>
    )
}

const dropdownitemstyle = {
    textTransform: 'capitalize'
}

export default DropdownMenu
