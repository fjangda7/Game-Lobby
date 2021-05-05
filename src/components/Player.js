import DropdownMenu from './DropdownMenu'
import Container from '@material-ui/core/Container';

const Player = ({colors, playerNumber, onDelete, onChange}) => {

    return (
        <Container style={{padding: 10,}}>
            <h2 style={{textAlign: 'center'}}>Player {playerNumber}</h2>
            <DropdownMenu key={playerNumber} playerKey={playerNumber} colors={colors} onDelete={onDelete} onChange={onChange}/>
        </Container>
    )
}

export default Player
