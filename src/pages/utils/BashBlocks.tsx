import '../../App.css';
import Typography from '../../bashBlocks/elements/Typography';
import Background from '../../elements/page/Background';

function BashBlocks() {
    return (
        <div>
            <Background text={"BashBlocks"} />
            <Typography
                type='title'
                content='Typography'
                textAlign='left'
            />
            <Typography
                type='body'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi leo, pretium porttitor auctor eget, tincidunt eu quam. Nunc ornare aliquam nunc id convallis. Suspendisse a lacus aliquam, fermentum justo nec, congue est. Quisque id vestibulum sapien, in ultrices elit. Maecenas sed vehicula ipsum, sed rhoncus metus. Cras eu lectus sagittis elit auctor ornare. Duis elementum elit commodo ex scelerisque, at mattis odio facilisis. Sed porta orci vitae massa mollis porta. Suspendisse bibendum, purus eu consequat pellentesque, tortor mi faucibus ligula, interdum rhoncus erat magna non ligula. Nulla dui ex, vestibulum eu dolor id, condimentum gravida orci.'
                textAlign='justify'
            />
        </div>
    );
}

export default BashBlocks;