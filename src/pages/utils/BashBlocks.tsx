import '../../App.css';
import Typography from '../../bashBlocks/elements/Typography';
import Background from '../../elements/page/Background';

function BashBlocks() {
    return (
        <div>
            <Background />
            <Typography type='title' fontFamily='serif' content='Typography title' textAlign='left' />
            <Typography type='title2' fontFamily='serif' content='Typography title2' textAlign='left' />
            <Typography type='h1' fontFamily='serif' content='Typography h1' textAlign='left' />
            <Typography type='h2' fontFamily='serif' content='Typography h2' textAlign='left' />
            <Typography type='h3' fontFamily='serif' content='Typography h3' textAlign='left' />
            <Typography type='body' fontFamily='serif' content='Typography body' textAlign='justify' inline />{' '}
            <Typography type='body' fontFamily='serif' content='Typography body bold-faced ' textAlign='justify' boldFace inline />{' '}
            <Typography type='body' fontFamily='serif' content='Typography body italicized' textAlign='justify' italicize inline />{' '}
            <Typography type='body' fontFamily='serif' content='Typography body bold-faced and italicized (bold-oblique)' textAlign='justify' boldFace italicize inline />
            <Typography type='caption' fontFamily='serif' content='Typography caption' textAlign='left' />
            <Typography type='footnote' fontFamily='serif' content='Typography footnote' textAlign='left' />
            <hr />
            <Typography type='title' fontFamily='sans-serif' content='Typography title' textAlign='left' />
            <Typography type='title2' fontFamily='sans-serif' content='Typography title2' textAlign='left' />
            <Typography type='h1' fontFamily='sans-serif' content='Typography h1' textAlign='left' />
            <Typography type='h2' fontFamily='sans-serif' content='Typography h2' textAlign='left' />
            <Typography type='h3' fontFamily='sans-serif' content='Typography h3' textAlign='left' />
            <Typography type='body' fontFamily='sans-serif' content='Typography body' textAlign='justify' inline />{' '}
            <Typography type='body' fontFamily='sans-serif' content='Typography body bold-faced ' textAlign='justify' boldFace inline />{' '}
            <Typography type='body' fontFamily='sans-serif' content='Typography body italicized' textAlign='justify' italicize inline />{' '}
            <Typography type='body' fontFamily='sans-serif' content='Typography body bold-faced and italicized' textAlign='justify' boldFace italicize inline />
            <Typography type='caption' fontFamily='sans-serif' content='Typography caption' textAlign='left' />
            <Typography type='footnote' fontFamily='sans-serif' content='Typography footnote' textAlign='left' />
        </div>
    );
}

export default BashBlocks;