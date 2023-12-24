import css from './login.module.css';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
    return (
        <>
            <LoginForm  />
            <div className={css.sign}>
                
            </div>
        </>
    );
};

export default Login;