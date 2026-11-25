import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { userLogout } from "../../redux/slices/auth/login.slice";

export default function NavbarAdmin() {
  const [adminLoggedIn, setAdminLoggedIn] = useState();
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const reduxAccountsState = useSelector((state) => state.accounts);

  const reduxuserLoginState = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const userLoggedIn = reduxuserLoginState.loggedIn?.email;

  const findAccount = () => {
    const adminAccount = reduxAccountsState?.find(
      (account) => account.email === userLoggedIn,
    );
    return setAdminLoggedIn(adminAccount);
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    (async () => {
      findAccount();
    })();
  }, [findAccount]);
  return (
    <header className='w-full px-7.5 md:px-10 lg:px-25 py-3 md:py-4 sticky top-0 z-10 flex justify-between items-center bg-bg-tertiary border-b border-border-secondary'>
      <Link to={"/"} className='flex items-center gap-1 md:gap-1.5 lg:gap-2'>
        <img src='/src/assets/icon/logo.svg' alt='warga-report-logo' />
        <span className='font-fraunces font-bold text-base lg:text-lg text-font-primary'>
          WargaReport
        </span>
      </Link>
      <div className='px-3.25 py-1.75 flex items-center gap-1.5 justify-center rounded-full bg-bg-primary'>
        <div className='white-shield-icon'></div>
        <span className='text-sm font-publicSans font-semibold text-font-quaternary'>
          Admin Console
        </span>
      </div>
      <div className='relative flex items-center gap-3'>
        <Link to={"/notification"} className='notif-icon-box'>
          <div className='notif-icon'></div>
        </Link>
        <button
          onClick={() => setOpenModalProfile((prev) => !prev)}
          className='user-info-toggle cursor-pointer'>
          <div className='w-full flex items-center gap-2'>
            <span className='user-photo'>
              {adminLoggedIn?.fullname.slice(0, 2)}
            </span>
            <span className='flex flex-col items-start'>
              <span className='font-publicSans font-semibold text-xs text-font-primary capitalize'>
                {adminLoggedIn?.fullname}
              </span>
              <span className='font-ibmPlexMono font-normal text-[10px] text-bg-primary'>
                Admin
              </span>
            </span>
          </div>
          <span className='chevron-down-icon'></span>
        </button>
        {openModalProfile && (
          <div className='modal-profile-toggle flex flex-col transition-all duration-300 ease-in-out overflow-hidden'>
            <button
              onClick={handleLogout}
              type='button'
              className='flex items-center gap-2 px-4 py-3 hover:bg-bg-quaternary cursor-pointer'>
              <div className='logout-icon'></div>
              <span className='font-publicSans font-medium text-xs text-font-warning'>
                Sign Out
              </span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
