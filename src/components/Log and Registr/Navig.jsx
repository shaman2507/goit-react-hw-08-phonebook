import React from 'react'
import css from '../Header/Header.module.css'
import { Button, ButtonBase } from '@mui/material';
import log from '../../img/log.png';
import { useNavigate } from 'react-router';
const Navig = () => {
    const navigate = useNavigate();
    
  return (
    <div className={css.login}>
          <Button sx={{
         mr:5,
        }} variant="contained"   color="success" onClick={() => navigate('./register')}>SignUp</Button>
          
          <ButtonBase variant="outlined" onClick={() => navigate('./login')}>
            <img
              className={css.img}
              src={log}
              alt="Login"
              width="60"
              height="60"
            />
            
          </ButtonBase> </div> 
  )
}

export default Navig;