import DropdownMenu from './DropdownMenu'
import styles from '../App.module.css';

const Player = ({colors, playerNumber, onDelete, onChange}) => {

    return (
        <div className={styles.player}>
            <h1 style={{textAlign: 'center'}}>Player {playerNumber}</h1>
            <DropdownMenu key={playerNumber} playerKey={playerNumber} colors={colors} onDelete={onDelete} onChange={onChange}/>
        </div>
    )
}

export default Player
