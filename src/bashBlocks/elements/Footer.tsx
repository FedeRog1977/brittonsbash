import './styles/HeaderFooter.css';
// import monero from '../../media/images/monero/monero.png';

const Footer = () => {
    return (
        <footer className={"footer"}>
            A Lewis Britton Production
            <br />
            <img src="Photos/xmr.svg" style={{ height: "15px" }} />
            <br />
            <code style={{ fontSize: "12px" }}>
                4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7<br />f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj<br />ZMTJSSkB46V
            </code>
            <br />
            <a href={"../../media/images/monero/monero.png"}><img src="Photos/monero.png" style={{ height: "100px" }} />Monero Donations</a>
            <br />
            &#169; Lewis Britton 2020&mdash;2023
        </footer>
    )
}

export default Footer;