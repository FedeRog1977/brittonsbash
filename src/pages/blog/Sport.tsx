import '../../App.css';
import SportResultTile from '../../components/blog/sport/SportResultTile';
import Background from '../../elements/Background';

function Sport() {
    return (
        <div>
            <Background content='Sport' className='background-text-sport' />
            <SportResultTile />
        </div>
    );
}

export default Sport;