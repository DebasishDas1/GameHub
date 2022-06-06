import styles from './header.module.css';
import Avatar from '@mui/material/Avatar';

const HeaderProfileArea = () => 
    <div className={styles.header_profile_area}>
        <Avatar alt="Debasish Das" src="/static/images/a" />
        <h4>Debasish</h4>
    </div>

export default HeaderProfileArea;
