import './styles/HeaderFooter.css';
import xmr from '../media/images/monero/xmr.svg';
import monero from '../media/images/monero/monero.png';
import Typography from '../bashBlocks/elements/Typography';

const Footer = () => {
    return (
        <footer className='footer'>
            <Typography type='h3' content='A Lewis Britton Production' color='#A2A2A2' textAlign='center' paragraphMargins />
            <Typography
                type='body'
                content={
                    <img src={xmr} alt='xmr' style={{ height: "15px" }} />
                }
                color='#A2A2A2'
                textAlign='center'
                inline
                paragraphMargins
            />
            {' '}
            <Typography type='body' content='Monero Donations' color='#A2A2A2' textAlign='center' inline />
            <Typography
                type='body'
                content={
                    <code style={{ fontSize: '12px' }}>
                        4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7<br />f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj<br />ZMTJSSkB46V
                    </code>
                }
                color='#A2A2A2'
                textAlign='center'
                paragraphMargins
            />
            <Typography
                type='body'
                content={
                    <img src={monero} alt='monero' style={{ height: '100px' }} />
                }
                color='#A2A2A2'
                textAlign='center'
                paragraphMargins
            />
            <Typography
                type='body'
                content={
                    <>&#169; Lewis Britton 2020&mdash;2023</>
                }
                color='#A2A2A2'
                textAlign='center'
                paragraphMargins
            />
        </footer>
    )
}

export default Footer;