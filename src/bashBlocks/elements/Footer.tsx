import './styles/HeaderFooter.css';
import xmr from '../../media/images/monero/xmr.svg';
import monero from '../../media/images/monero/monero.png';
import Typography from './Typography';

const Footer = () => {
    return (
        <footer className={"footer"}>
            <Typography type='h3' content='A Lewis Britton Production' textAlign='center' />
            <Typography
                type='body'
                content={
                    <img src={xmr} style={{ height: "15px" }} />
                }
                textAlign='center'
                inline
            />
            {' '}
            <Typography type='body' content='Monero Donations' textAlign='center' inline />
            <Typography
                type='body'
                content={
                    <code style={{ fontSize: "12px" }}>
                        4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7<br />f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj<br />ZMTJSSkB46V
                    </code>
                }
                textAlign='center'
            />
            <Typography
                type='body'
                content={
                    <img src={monero} style={{ height: "100px" }} />
                }
                textAlign='center'
            />
            <Typography
                type='body'
                content={
                    <>&#169; Lewis Britton 2020&mdash;2023</>
                }
                textAlign='center'
            />
        </footer>
    )
}

export default Footer;