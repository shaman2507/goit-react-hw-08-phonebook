import css from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonBase } from '@mui/material';
import home from '../../img/home.png';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'store/auth/selectors';
import Navig from 'components/Log and Registr/Navig';

const Header = () => {
  const navigate = useNavigate();
  const isLoged= useSelector(authSelectors.selectLogedIn);
 
  return (
    <header>
      <div className={css.header}>
        <div className={css.home}>
          <ButtonBase onClick={() => navigate('./')}>
            <img
              className={css.img}
              src={home}
              alt="Home"
              width="60"
              height="60"
            />
          </ButtonBase>
          {isLoged ? <Button
              className={css.contbtn}
              variant="contained"
              color="success"
              type="submit"
              onClick={() => navigate('./contacts')}>
              contacts
            </Button> : <Button display="none"/>
          }
          
        </div>
        {isLoged ?  <UserMenu /> : <Navig/>} 
           
      </div>
    </header>
  );
};

export default Header;