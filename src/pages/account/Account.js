import { useEffect } from 'react';
import { getUserResults } from '../../actions/resultActions';
import { logout } from '../../actions/userActions';
import { useResult } from '../../context/resultContext';
import { useUser } from '../../context/userContext';
import Loader from '../../components/loader/Loader';

const Account = () => {
  const {
    setAuth,
    authState: { userInfo },
  } = useUser();
  const {
    setUserResult,
    userResultState: { loading, userResults },
  } = useResult();

  useEffect(() => {
    getUserResults(userInfo._id, setUserResult);
  }, [userInfo, setUserResult]);

  const handleLogout = () => {
    logout(setAuth);
  };

  return (
    <main className='py-6'>
      <div className='flex flex-column align-items-center mb-5'>
        <div className='avatar-lg rounded-full flex align-items-center justify-content-center size-3 mb-3'>
          {userInfo.firstName[0]}
          {userInfo.lastName[0]}
        </div>
        <div className='txt-center mb-3'>
          <p>
            {userInfo.firstName} {userInfo.lastName}
          </p>
          <p className='txt-secondary'>{userInfo.email}</p>
        </div>
        <button className='btn btn-primary' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <h1 className='size-4 txt-center mb-6'>
          Checkout your quiz results 👇
        </h1>
        {loading && <Loader />}
        {!loading && userResults && userResults.length > 0 ? (
          <section className='container'>
            <table className='w-100 mb-6 txt-center'>
              <thead>
                <tr>
                  <th className='border border-secondary fw-medium'>
                    Created At
                  </th>
                  <th className='border border-secondary fw-medium'>
                    Quiz Title
                  </th>
                  <th className='border border-secondary fw-medium'>
                    Category
                  </th>
                  <th className='border border-secondary fw-medium'>Score</th>
                </tr>
              </thead>
              <tbody>
                {userResults.map((result) => (
                  <tr key={result._id}>
                    <td className='border border-secondary'>
                      {new Date(result.createdAt).toLocaleString()}
                    </td>
                    <td className='border border-secondary'>{result.quiz}</td>
                    <td className='border border-secondary'>
                      {result.category}
                    </td>
                    <td className='border border-secondary'>
                      {result.score} points
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <h1 className='size-5 txt-center'>No results to show</h1>
        )}
      </div>
    </main>
  );
};

export default Account;
