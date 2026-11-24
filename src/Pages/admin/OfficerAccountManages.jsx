import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function OfficerAccountManages() {
  const [showAddOfficerAccountModal, setShowAddOfficerAccountModal] =
    useState(false);
  const [
    showOfficerAccountCreatedReceiptModal,
    setShowOfficerAccountCreatedReceiptModal,
  ] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-7.5'>
        <div className='flex justify-between'>
          <div>
            <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
              Officer accounts
            </span>
            <p className='description text-xs text-font-tertiary'>
              2 officer accounts across 7 available agencies.
            </p>
          </div>
          <div className='flex flex-col-reverse'>
            <button
              onClick={() => setShowAddOfficerAccountModal((prev) => !prev)}
              type='button'
              className='px-3.25 py-1.75 flex items-center gap-1.5 justify-center rounded-full bg-bg-primary border border-bg-primary cursor-pointer'>
              <span className='white-plus-icon'></span>
              <span className='text-xs font-publicSans font-semibold text-font-quaternary'>
                Add officer account
              </span>
            </button>
          </div>
        </div>
        <div className='table-container outline outline-border-secondary/70'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Officer</th>
                <th scope='col'>Agency</th>
                <th scope='col'>Badge ID</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Hendra Kurniawan
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      hendra.k@pamjaya.co.id
                    </span>
                  </div>
                </th>
                <td className='font-publicSans font-normal text-[13px] text-font-primary'>
                  Perumda PAM JAYA (Clean Drinking Water)
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  PAM-JKT-044
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-secondary'>
                  +62 813-8820-4100
                </td>
                <td>
                  <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Raka Wijaya
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      raka.wijaya@binamarga.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-publicSans font-normal text-[13px] text-font-primary'>
                  Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  DBM-JKT-104
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-secondary'>
                  +62 811-3401-992
                </td>
                <td>
                  <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showAddOfficerAccountModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  Officer Access
                </span>
                <h3 className='title text-[17px]'>Create officer account</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowAddOfficerAccountModal((prev) => !prev)}
                  type='button'
                  className='cursor-pointer'>
                  <IoClose className='size-5 text-font-secondary' />
                </button>
              </div>
            </div>
            <div className='p-5.5 flex flex-col gap-3.5 overflow-y-auto scrollbar-thin'>
              <form className='flex flex-col gap-5 pb-10'>
                <div className='flex flex-col gap-3.5'>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='officer-name' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Full Name
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='officer-name'
                        id='officer-name'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='officer-email' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Email Address
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='email'
                        name='officer-email'
                        id='officer-email'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='officer-contact' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Phone Number
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='tel'
                        name='officer-contact'
                        id='officer-contact'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='agencies-options' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Agency
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <select
                        name='agencies'
                        id='agencies-options'
                        className='w-full h-full outline-none bg-inherit font-publicSans text-[13px] text-font-primary'>
                        <option value='Satpol PP Provinsi DKI Jakarta (Public Order)'>
                          Satpol PP Provinsi DKI Jakarta (Public Order)
                        </option>
                        <option value='Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)'>
                          Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                        </option>
                        <option value='Perumda PAM JAYA (Clean Drinking Water)'>
                          Perumda PAM JAYA (Clean Drinking Water)
                        </option>
                        <option value='Dinas Perhubungan DKI Jakarta (PJU & Traffic)'>
                          Dinas Perhubungan DKI Jakarta (PJU & Traffic)
                        </option>
                        <option value='Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)'>
                          Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)
                        </option>
                        <option value='Dinas Pertamanan dan Hutan Kota DKI Jakarta'>
                          Dinas Pertamanan dan Hutan Kota DKI Jakarta
                        </option>
                        <option value='Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)'>
                          Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='badge-id' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Badge ID
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        disabled
                        type='text'
                        name='badge-id'
                        id='badge-id'
                        placeholder='Auto-generated if blank'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <small className='text-[10px] font-publicSans font-normal text-font-tertiary'>
                    Officers sign in with this email and the generated password.
                  </small>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    onClick={() =>
                      setShowAddOfficerAccountModal((prev) => !prev)
                    }
                    type='button'
                    className='px-3.75 py-2 bg-inherit border border-border-secondary rounded-full font-publicSans font-semibold text-xs text-font-primary cursor-pointer hover:bg-border-secondary'>
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setShowAddOfficerAccountModal((prev) => !prev);
                      setShowOfficerAccountCreatedReceiptModal((prev) => !prev);
                    }}
                    type='button'
                    className='px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Create account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showOfficerAccountCreatedReceiptModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 md:w-1/3 h-140 bg-white flex flex-col rounded-[18px] overflow-hidden'>
            <div className='px-5.5 pt-6 pb-5 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  Officer Account
                </span>
                <h3 className='title text-[17px]'>Account created</h3>
              </div>
              <div>
                <button
                  onClick={() =>
                    setShowOfficerAccountCreatedReceiptModal((prev) => !prev)
                  }
                  type='button'
                  className='cursor-pointer'>
                  <IoClose className='size-5 text-font-secondary' />
                </button>
              </div>
            </div>
            <div className='px-5.5 py-3 flex flex-col gap-3 overflow-y-auto scrollbar-thin'>
              <p className='font-publicSans font-normal text-[13px] text-font-secondary'>
                Share these sign-in details with the officer. The password is
                shown only once.
              </p>
              <div className='w-full p-3.75 bg-bg-submitted border border-dashed border-border-secondary rounded-xl flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                  <span className='eyebrow-heading text-[13px] text-font-tertiary'>
                    Full name
                  </span>
                  <p className='font-publicSans font-semibold text-base text-font-primary'>
                    Koda
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='eyebrow-heading text-[13px] text-font-tertiary'>
                    Email
                  </span>
                  <p className='font-ibmPlexMono text-[13px] text-font-primary font-normal'>
                    admin@kodacademy.id
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='eyebrow-heading text-[13px] text-font-tertiary'>
                    Agency
                  </span>
                  <p className='font-publicSans text-[13px] font-normal text-font-primary'>
                    Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='eyebrow-heading text-[13px] text-font-tertiary'>
                    Badge ID
                  </span>
                  <p className='font-ibmPlexMono text-[13px] font-normal text-font-primary'>
                    WR-OFF-174
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-1.5'>
                <div className='flex items-center justify-between'>
                  <h5 className='eyebrow-heading text-[10px] text-font-secondary'>
                    Generated Password
                  </h5>
                  <button
                    type='button'
                    className='text-[13px] font-publicSans font-semibold text-bg-primary cursor-pointer'>
                    Copy
                  </button>
                </div>
                <div className='p-3 bg-bg-submitted border border-border-primary rounded-xl text-[11px] font-normal font-ibmPlexMono text-font-primary'>
                  yH6fr3ui
                </div>
                <small className='text-[10px] font-publicSans font-normal text-font-tertiary'>
                  8 characters · uppercase, lowercase, and numbers
                </small>
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={() =>
                    setShowOfficerAccountCreatedReceiptModal((prev) => !prev)
                  }
                  type='button'
                  className='w-fit px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
