import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Agencies() {
  const [showAddAgencyModal, setShowAddAgencyModal] = useState(false);
  const [showEditAgencyModal, setShowEditAgencyModal] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-7.5'>
        <div className='flex justify-between'>
          <div>
            <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
              Registered municipal bureaus (7)
            </span>
            <p className='description text-xs text-font-tertiary'>
              Agencies available for report routing and officer assignment.
            </p>
          </div>
          <div className='flex flex-col-reverse'>
            <button
              onClick={() => setShowAddAgencyModal((prev) => !prev)}
              type='button'
              className='px-3.25 py-1.75 flex items-center gap-1.5 justify-center rounded-full bg-bg-primary border border-bg-primary cursor-pointer'>
              <span className='white-plus-icon'></span>
              <span className='text-xs font-publicSans font-semibold text-font-quaternary'>
                Add agency
              </span>
            </button>
          </div>
        </div>
        <div className='table-container h-100 scrollbar-thin bg-bg-tertiary outline outline-border-secondary/70'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Agency</th>
                <th scope='col'>Contact Phone</th>
                <th scope='col'>Avg Response</th>
                <th scope='col'>Open Cases</th>
                <th scope='col'>Settings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      pengaduan@binamarga.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 384-5120
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  2.1d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  142
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Perumda PAM JAYA (Clean Drinking Water)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      layanan@pamjaya.co.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 570-4250
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  1.4d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  64
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Dinas Perhubungan DKI Jakarta (PJU & Traffic)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      dispatch@dishub.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 350-1349
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  1.8d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  95
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      satgas.kebersihan@lingkunganhidup.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 809-2740
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  1.6d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  89
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Dinas Pertamanan dan Hutan Kota DKI Jakarta
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      forestry@pertamanan.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 532-8454
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  2.8d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  41
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Satpol PP Provinsi DKI Jakarta (Public Order)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      pengaduan@satpolpp.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 382-2255
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  2.3d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  53
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <div className='flex flex-col'>
                    <span className='font-publicSans text-xs font-semibold text-font-primary'>
                      Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)
                    </span>
                    <span className='font-publicSans text-xs font-normal text-font-tertiary'>
                      pengaduan@citata.jakarta.go.id
                    </span>
                  </div>
                </th>
                <td className='font-ibmPlexMono text-[13px] font-normal text-font-secondary'>
                  +62 (21) 382-2081
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
                  2.6d
                </td>
                <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                  37
                </td>
                <td>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                    <span className='edit-icon'></span>
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showAddAgencyModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  New Agency
                </span>
                <h3 className='title text-[17px]'>Create municipal bureau</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowAddAgencyModal((prev) => !prev)}
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
                    <label htmlFor='agency-name' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Agency Name
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='agency-name'
                        id='agency-name'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='jurisdiction-statement' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Jurisdiction Statement
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <textarea
                        name='jurisdiction-statement'
                        id='jurisdiction-statement'
                        className='w-full h-22.5 border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none resize-none'></textarea>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='support-hotline' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Support Hotline
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='support-hotline'
                        id='support-hotline'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='dispatch-email' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Dispatch Email
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='email'
                        name='dispatch-email'
                        id='dispatch-email'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='office-address' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Office Address
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='office-address'
                        id='office-address'
                        placeholder='Street, district, city'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='avg-response' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Average Response (Days)
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='number'
                        name='avg-response'
                        id='avg-response'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    onClick={() => setShowAddAgencyModal((prev) => !prev)}
                    type='button'
                    className='px-3.75 py-2 bg-inherit border border-border-secondary rounded-full font-publicSans font-semibold text-xs text-font-primary cursor-pointer hover:bg-border-secondary'>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Create Agency
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showEditAgencyModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  Edit Agency
                </span>
                <h3 className='title text-[17px]'>
                  Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
                </h3>
              </div>
              <div>
                <button
                  onClick={() => setShowEditAgencyModal((prev) => !prev)}
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
                    <label htmlFor='agency-name' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Agency Name
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='agency-name'
                        id='agency-name'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='jurisdiction-statement' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Jurisdiction Statement
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <textarea
                        name='jurisdiction-statement'
                        id='jurisdiction-statement'
                        className='w-full h-22.5 border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none resize-none'></textarea>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='support-hotline' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Support Hotline
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='support-hotline'
                        id='support-hotline'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='dispatch-email' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Dispatch Email
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='email'
                        name='dispatch-email'
                        id='dispatch-email'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='office-address' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Office Address
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='office-address'
                        id='office-address'
                        placeholder='Street, district, city'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='avg-response' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Average Response (Days)
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='number'
                        name='avg-response'
                        id='avg-response'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    onClick={() => setShowEditAgencyModal((prev) => !prev)}
                    type='button'
                    className='px-3.75 py-2 bg-inherit border border-border-secondary rounded-full font-publicSans font-semibold text-xs text-font-primary cursor-pointer hover:bg-border-secondary'>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
