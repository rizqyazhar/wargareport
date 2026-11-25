import { Link, NavLink, useNavigate } from "react-router";
import Button from "./Button";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/slices/auth/login.slice";

export default function Navbar() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

  const [citizenLoggedIn, setCitizenLoggedIn] = useState();

  const dispatch = useDispatch();
  const reduxuserLoginState = useSelector((state) => state.userLogin);
  const reduxAccountsState = useSelector((state) => state.accounts);

  const userLoggedIn = reduxuserLoginState.loggedIn?.email;

  const findAccount = () => {
    const citizenAccount = reduxAccountsState?.find(
      (account) => account.email === userLoggedIn,
    );
    return setCitizenLoggedIn(citizenAccount);
  };

  const navigate = useNavigate();

  const handleOpenModalProfile = () => {
    setOpenModalProfile((prev) => !prev);
  };

  const handleAddReportBtn = () => {
    navigate("/add-report");
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
    <header className='w-full sticky top-0 z-10 flex justify-center bg-bg-tertiary border-b border-border-secondary'>
      <nav className='w-full px-7.5 md:px-10 lg:px-25 py-3 md:py-4 flex justify-between items-center'>
        <Link to={"/"} className='flex items-center gap-1 md:gap-1.5 lg:gap-2'>
          <img src='/src/assets/icon/logo.svg' alt='warga-report-logo' />
          <span className='font-fraunces font-bold text-base lg:text-lg text-font-primary'>
            WargaReport
          </span>
        </Link>
        <div className='hidden lg:flex items-center text-sm font-publicSans font-medium text-font-secondary'>
          <NavLink
            to={"/live-feed"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            Live Feed
          </NavLink>
          <NavLink
            to={"/track"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            Track
          </NavLink>
          <NavLink
            to={"/help"}
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-font-quaternary bg-bg-primary rounded-full px-3 py-2.5"
                : "font-medium text-font-secondary px-3 py-2.5 hover:underline hover:decoration-wavy"
            }>
            How it works
          </NavLink>
        </div>
        <div className='flex items-center gap-2'>
          {reduxuserLoginState.loggedIn.email &&
          reduxuserLoginState.loggedIn.role === "Citizen" ? (
            <div className='relative flex items-center gap-3'>
              <Link to={"/notification"} className='notif-icon-box'>
                <div className='notif-icon'></div>
                <div className='green-circle'></div>
              </Link>
              <button
                onClick={handleOpenModalProfile}
                className='user-info-toggle cursor-pointer'>
                <div className='w-full flex items-center gap-2'>
                  <span className='user-photo uppercase'>
                    {citizenLoggedIn?.fullname.slice(0, 2)}
                  </span>
                  <span className='flex flex-col items-start'>
                    <span className='font-publicSans font-semibold text-xs text-font-primary capitalize truncate'>
                      {citizenLoggedIn?.fullname}
                    </span>
                    <span className='font-ibmPlexMono font-normal text-[10px] text-bg-primary'>
                      {citizenLoggedIn?.role}
                    </span>
                  </span>
                </div>
                <span className='chevron-down-icon'></span>
              </button>
              {openModalProfile && (
                <div className='modal-profile-toggle flex flex-col transition-all duration-300 ease-in-out overflow-hidden'>
                  <Link
                    to={"/profile/update-profile"}
                    className='w-full flex flex-col items-start px-4 py-3 hover:bg-bg-quaternary'>
                    <span className='w-full font-semibold text-[13px] text-font-primary capitalize truncate'>
                      {citizenLoggedIn?.fullname}
                    </span>
                    <span className='font-normal text-[11px] font-ibmPlexMono text-font-tertiary truncate'>
                      {citizenLoggedIn?.email}
                    </span>
                  </Link>
                  <Link
                    to={"/profile/my-report"}
                    className='flex items-center gap-2 font-normal text-font-secondary px-4 py-3 hover:bg-bg-quaternary'>
                    <span className='profile-icon w-3 h-3'></span>
                    <span className='font-publicSans text-xs text-font-secondary'>
                      My Filed Reports
                    </span>
                  </Link>
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
          ) : (
            <Button
              onClick={() => setOpenLoginModal((prev) => !prev)}
              type='click'
              btnText='Sign In'
              btnImg={["/src/assets/icon/login-icon.svg"]}
              btnAlt={["login-icon"]}
              variant='button-one-icon'
              btnCustomStyles='bg-inherit'
              btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-secondary'
            />
          )}
          <Button
            onClick={handleAddReportBtn}
            type='click'
            btnText='Report'
            btnImg={["/src/assets/icon/plus-icon.svg"]}
            btnAlt={["plus-icon"]}
            variant='button-one-icon'
            btnCustomStyles='bg-bg-primary'
            btnTextCustomStyles='font-publicSans font-semibold text-xs text-font-quaternary'
          />
        </div>
        {openLoginModal && (
          <LoginModal
            setOpenLoginModal={setOpenLoginModal}
            setOpenRegisterModal={setOpenRegisterModal}
          />
        )}
        {openRegisterModal && (
          <RegisterModal
            setOpenLoginModal={setOpenLoginModal}
            setOpenRegisterModal={setOpenRegisterModal}
          />
        )}
      </nav>
    </header>
  );
}
