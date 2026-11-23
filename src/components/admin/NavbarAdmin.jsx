import { Link } from "react-router";

export default function NavbarAdmin() {
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
        <button className='user-info-toggle cursor-pointer'>
          <span className='user-photo'>SR</span>
          <span className='flex flex-col items-start'>
            <span className='font-publicSans font-semibold text-xs text-font-primary'>
              Siti Rahma
            </span>
            <span className='font-ibmPlexMono font-normal text-[10px] text-bg-primary'>
              Admin
            </span>
          </span>
          <span className='chevron-down-icon'></span>
        </button>
      </div>
    </header>
  );
}
