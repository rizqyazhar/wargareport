import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Categories() {
  const [showAddCatModal, setShowAddCatModal] = useState(false);
  const [showEditCatModal, setShowEditCatModal] = useState(false);

  return (
    <>
      <div className='flex flex-col gap-7.5'>
        <div className='flex justify-between'>
          <div>
            <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
              Routing taxonomy (7)
            </span>
            <p className='description text-xs text-font-tertiary'>
              Categories route new reports to an agency and define their SLA
              window.
            </p>
          </div>
          <div className='flex flex-col-reverse'>
            <button
              onClick={() => setShowAddCatModal((prev) => !prev)}
              type='button'
              className='px-3.25 py-1.75 flex items-center gap-1.5 justify-center rounded-full bg-bg-primary border border-bg-primary cursor-pointer'>
              <span className='white-plus-icon'></span>
              <span className='text-xs font-publicSans font-semibold text-font-quaternary'>
                Add category
              </span>
            </button>
          </div>
        </div>
        <div className='w-full h-100 overflow-y-auto scrollbar-thin flex flex-col bg-bg-tertiary border border-border-primary rounded-2xl'>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Roads & Transit</p>
              <span>Pothole / Sidewalk (Trotoar)</span>
              <span>
                Assigned to: Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                48h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75 cursor-pointer'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Water & Sewage</p>
              <span>Water Burst / Pipa Bocor</span>
              <span>Assigned to: Perumda PAM JAYA (Clean Drinking Water)</span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                24h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Street Lighting</p>
              <span>Dark Street / PJU Padam</span>
              <span>
                Assigned to: Dinas Perhubungan DKI Jakarta (PJU & Traffic)
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                72h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Sanitation & Waste</p>
              <span>Trash Pile / Sampah Liar</span>
              <span>
                Assigned to: Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                36h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Public Parks & Trees</p>
              <span>Hazardous Tree / Rawan Tumbang</span>
              <span>
                Assigned to: Dinas Pertamanan dan Hutan Kota DKI Jakarta
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                48h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Noise & Disturbance</p>
              <span>Late-night Noise / Ketertiban</span>
              <span>
                Assigned to: Satpol PP Provinsi DKI Jakarta (Public Order)
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                48h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                1 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
          <div className='w-full px-4.5 py-4 flex justify-between items-center border-b-[0.5px] border-border-primary'>
            <div className='flex flex-col gap-1 font-publicSans font-normal text-xs text-font-tertiary'>
              <p className='text-font-primary'>Building & Zoning</p>
              <span>Unsafe Construction / Bangunan</span>
              <span>
                Assigned to: Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)
              </span>
            </div>
            <div className='flex items-center gap-3.75 font-ibmPlexMono'>
              <span className='text-[11px] text-font-primary font-normal'>
                72h SLA
              </span>
              <span className='text-[11px] text-font-primary font-normal'>
                0 report
              </span>
              <button
                onClick={() => setShowEditCatModal((prev) => !prev)}
                type='button'
                className='text-[13px] text-bg-primary font-semibold flex items-center gap-1.75'>
                <span className='edit-icon'></span>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAddCatModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  New Category
                </span>
                <h3 className='title text-[17px]'>Create routing category</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowAddCatModal((prev) => !prev)}
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
                    <label htmlFor='category-name' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Category Name
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='category-name'
                        id='category-name'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='agencies-options' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Responsible Agency
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
                  <div className='w-full grid grid-cols-2 gap-3'>
                    <div className='w-full flex flex-col gap-1.5'>
                      <label htmlFor='sla-hours' className='w-fit'>
                        <span className='eyebrow-heading text-[10px] text-font-secondary'>
                          SLA window (hours)
                        </span>
                      </label>
                      <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                        <input
                          type='number'
                          name='sla-hours'
                          id='sla-hours'
                          className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                        />
                      </div>
                    </div>
                    <div className='w-full flex flex-col gap-1.5'>
                      <label htmlFor='icon-options' className='w-fit'>
                        <span className='eyebrow-heading text-[10px] text-font-secondary'>
                          Icon
                        </span>
                      </label>
                      <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                        <select
                          name='icon'
                          id='icon-options'
                          className='w-full h-full outline-none bg-inherit font-publicSans text-[13px] text-font-primary'>
                          <option value='general'>General</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='citizen-facing-label' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Citizen-Facing Label
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='citizen-facing-label'
                        id='citizen-facing-label'
                        placeholder='e.g. Pothole / Sidewalk'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='citizen-hint' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Citizen Hint
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <textarea
                        name='citizen-hint'
                        id='citizen-hint'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none resize-none'
                        placeholder='Short examples shown on the filing wizard'></textarea>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    onClick={() => setShowAddCatModal((prev) => !prev)}
                    type='button'
                    className='px-3.75 py-2 bg-inherit border border-border-secondary rounded-full font-publicSans font-semibold text-xs text-font-primary cursor-pointer hover:bg-border-secondary'>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Create Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showEditCatModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  Edit Category
                </span>
                <h3 className='title text-[17px]'>Roads & Transit</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowEditCatModal((prev) => !prev)}
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
                    <label htmlFor='category-name' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Category Name
                      </span>
                    </label>
                    <div className='flex items-center py-2 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='category-name'
                        id='category-name'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='agencies-options' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Responsible Agency
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
                  <div className='w-full grid grid-cols-2 gap-3'>
                    <div className='w-full flex flex-col gap-1.5'>
                      <label htmlFor='sla-hours' className='w-fit'>
                        <span className='eyebrow-heading text-[10px] text-font-secondary'>
                          SLA window (hours)
                        </span>
                      </label>
                      <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                        <input
                          type='number'
                          name='sla-hours'
                          id='sla-hours'
                          className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                        />
                      </div>
                    </div>
                    <div className='w-full flex flex-col gap-1.5'>
                      <label htmlFor='icon-options' className='w-fit'>
                        <span className='eyebrow-heading text-[10px] text-font-secondary'>
                          Icon
                        </span>
                      </label>
                      <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                        <select
                          name='icon'
                          id='icon-options'
                          className='w-full h-full outline-none bg-inherit font-publicSans text-[13px] text-font-primary'>
                          <option value='general'>General</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='citizen-facing-label' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Citizen-Facing Label
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <input
                        type='text'
                        name='citizen-facing-label'
                        id='citizen-facing-label'
                        placeholder='e.g. Pothole / Sidewalk'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none'
                      />
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='citizen-hint' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Citizen Hint
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <textarea
                        name='citizen-hint'
                        id='citizen-hint'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none resize-none'
                        placeholder='Short examples shown on the filing wizard'></textarea>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    onClick={() => setShowEditCatModal((prev) => !prev)}
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
