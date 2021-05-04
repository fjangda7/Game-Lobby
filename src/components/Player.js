import DropdownMenu from './DropdownMenu'
import Container from '@material-ui/core/Container';

const Player = ({colors, playerNumber, onDelete, onChange}) => {

    return (
        <Container style={{padding: 10,}}>
            <h1 style={{textAlign: 'center'}}>Player {playerNumber}</h1>
            <DropdownMenu key={playerNumber} playerKey={playerNumber} colors={colors} onDelete={onDelete} onChange={onChange}/>
        </Container>
    )
}

export default Player
