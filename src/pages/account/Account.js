import { logout } from '../../actions/userActions';
import { useUser } from '../../context/userContext';

const Account = () => {
  const { setAuth } = useUser();

  const handleLogout = () => {
    logout(setAuth);
  };

  return (
    <main className='txt-center'>
      <h1 className='size-2 mb-3'>Account</h1>
      <button className='btn btn-primary' onClick={handleLogout}>
        Logout
      </button>
    </main>
  );
};

export default Account;
