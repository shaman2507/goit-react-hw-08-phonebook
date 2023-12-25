import React from 'react';
import logOut from '../../img/logOut.png';
import css from '../Header/Header.module.css';
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'store/auth/selectors';
import { logOutThunk } from 'store/auth/operationsAuth';
const UserMenu = () => {
  const mail = useSelector(authSelectors.selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.menu}>
      <p className={css.mail}>{mail}</p>
      <ButtonBase variant="outlined" onClick={() => dispatch(logOutThunk())}>
        <img
          src={logOut}
          alt="Logout"
          width="60"
          height="60"
        />
      </ButtonBase>
    </div>
  );
};

export default UserMenu;