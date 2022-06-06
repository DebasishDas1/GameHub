import HeaderLogoArea from './HeaderLogoArea';
import HeaderProfileArea from './HeaderProfileArea';
import HeaderSeachArea from './HeaderSeachArea';
import styles from './header.module.css';
import Container from '@mui/material/Container';

const Header = (props) => {

    return (
        <Container>
            <div className={styles.header}>
                <HeaderLogoArea />
                <HeaderSeachArea />
                <HeaderProfileArea />
            </div>
        </Container>
    );
}

export default Header;