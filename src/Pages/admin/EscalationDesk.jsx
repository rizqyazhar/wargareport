import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function EscalationDesk() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  return (
    <>
      <div className='flex flex-col gap-7.5'>
        <div className='flex justify-between'>
          <div>
            <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
              Verification & agency routing
            </span>
            <p className='description text-xs text-font-tertiary'>
              1 report awaiting evidence review and agency routing. Oldest
              submitted Nov 20, 07:09 AM GMT+7.
            </p>
          </div>
          <div className='flex flex-col-reverse'>
            <div className='px-3.25 py-1.75 flex items-center gap-1.5 justify-center rounded-full bg-bg-tertiary border border-border-secondary'>
              <div className='black-shield-icon'></div>
              <span className='text-xs font-publicSans font-semibold text-font-primary'>
                Open officer queue
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3.5'>
          <form>
            <label htmlFor='search-input'>
              <input
                type='text'
                id='search-input'
                name='search-input'
                placeholder='Search by ID, title, category, or street…'
                className='w-1/3 bg-bg-tertiary border border-border-secondary rounded-xl px-3.5 py-2.75 text-[13px] font-publicSans font-normal text-font-tertiary'
              />
            </label>
            <button type='submit' className='opacity-0' />
          </form>
          <div className='table-container outline outline-border-secondary/70'>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Case</th>
                  <th scope='col'>Proposed route</th>
                  <th scope='col'>Submitted</th>
                  <th scope='col'>Evidence</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    <div className='flex flex-col'>
                      <span className='font-publicSans text-xs font-semibold text-font-primary'>
                        Heavy excavation equipment operating past 22:00 WIB in
                        residential alley
                      </span>
                      <span className='font-ibmPlexMono text-[13px] font-normal text-font-tertiary'>
                        CMP-2026-8601
                      </span>
                    </div>
                  </th>
                  <td>
                    <div className='flex flex-col'>
                      <span className='font-publicSans font-normal text-[13px] text-font-primary'>
                        Noise & Disturbance
                      </span>
                      <span className='font-publicSans font-normal text-xs text-font-tertiary'>
                        Satpol PP Provinsi DKI Jakarta (Public Order)
                      </span>
                    </div>
                  </td>
                  <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                    Nov 20, 07:09 AM GMT+7
                  </td>
                  <td className='font-ibmPlexMono font-normal text-[13px] text-font-primary'>
                    1 file
                  </td>
                  <td>
                    <button
                      onClick={() => setShowReviewModal((prev) => !prev)}
                      type='button'
                      className='px-2.75 py-1.5 border border-border-secondary rounded-full font-publicSans font-semibold text-[11px] text-font-primary bg-inherit cursor-pointer'>
                      Review
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showReviewModal && (
        <div className='absolute top-0 inset-0 z-30 w-full min-h-dvh bg-[rgba(19,35,27,0.55)]'>
          <div className='fixed w-3/4 md:w-1/3 h-screen top-0 right-0 bg-white flex flex-col'>
            <div className='px-5.5 pt-7.5 pb-5.75 bg-bg-submitted border-b border-border-primary flex justify-between'>
              <div className='flex flex-col gap-1'>
                <span className='eyebrow-heading text-[11px] text-font-tertiary'>
                  Escalation Desk
                </span>
                <h3 className='title text-[17px]'>Verify incoming report</h3>
              </div>
              <div>
                <button
                  onClick={() => setShowReviewModal((prev) => !prev)}
                  type='button'
                  className='cursor-pointer'>
                  <IoClose className='size-5 text-font-secondary' />
                </button>
              </div>
            </div>
            <div className='p-5.5 flex flex-col gap-3.5 overflow-y-auto scrollbar-thin'>
              <div className='w-full p-3.75 bg-bg-submitted border border-dashed border-border-secondary rounded-xl flex flex-col gap-2.25'>
                <span className='eyebrow-heading text-[13px] text-bg-primary'>
                  CMP-2026-8601
                </span>
                <h4 className='font-publicSans font-semibold text-base text-font-primary'>
                  Heavy excavation equipment operating past 22:00 WIB in
                  residential alley
                </h4>
                <p className='font-publicSans text-[13px] text-font-secondary font-normal'>
                  Continuous hydraulic jackhammer and pile driver activity past
                  22:00 WIB at commercial construction site behind Jl. Senopati
                  No. 18. Violates peaceful night hours under Perda No. 8/2007.
                </p>
                <p className='font-ibmPlexMono text-[13px] font-normal text-font-tertiary'>
                  Jl. Senopati No. 18, RT 06 / RW 02 · Selong, Kebayoran Baru,
                  Jakarta Selatan
                </p>
                <p className='font-ibmPlexMono text-[13px] font-normal text-font-tertiary'>
                  Reported by an anonymous resident
                </p>
                <p className='font-ibmPlexMono text-[13px] font-normal text-font-tertiary'>
                  1 evidence file · submitted Nov 20, 07:09 AM GMT+7
                </p>
                <button
                  type='button'
                  className='w-fit flex flex-col items-start cursor-pointer'>
                  <span className='font-publicSans font-semibold text-[13px] text-bg-primary'>
                    Open full case record
                  </span>
                  <span className='text-[13px] text-bg-primary'>&rarr;</span>
                </button>
              </div>
              <div className='px-5.75 py-3 bg-inherit border border-border-primary rounded-xl text-xs font-semibold font-publicSans text-font-secondary'>
                Review attached evidence (1)
              </div>
              <form className='flex flex-col gap-5 pb-10'>
                <div className='flex flex-col gap-3.5'>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='category-options' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Category
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <select
                        name='category'
                        id='category-options'
                        className='w-full h-full outline-none bg-inherit font-publicSans text-[13px] text-font-primary'>
                        <option value='Noise & Disturbance'>
                          Noise & Disturbance
                        </option>
                        <option value='Roads & Transit'>Roads & Transit</option>
                        <option value='Water & Sewage'>Water & Sewage</option>
                        <option value='Street Lighting'>Street Lighting</option>
                        <option value='Sanitation & Waste'>
                          Sanitation & Waste
                        </option>
                        <option value='Public Parks & Trees'>
                          Public Parks & Trees
                        </option>
                        <option value='Building & Zoning'>
                          Building & Zoning
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='agencies-options' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Route to agency
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
                      <label htmlFor='priority-options' className='w-fit'>
                        <span className='eyebrow-heading text-[10px] text-font-secondary'>
                          Priority
                        </span>
                      </label>
                      <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                        <select
                          name='priority'
                          id='priority-options'
                          className='w-full h-full outline-none bg-inherit font-publicSans text-[13px] text-font-primary'>
                          <option value='Standard'>Standard</option>
                        </select>
                      </div>
                    </div>
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
                  </div>
                  <div className='w-full flex flex-col gap-1.5'>
                    <label htmlFor='audit-note' className='w-fit'>
                      <span className='eyebrow-heading text-[10px] text-font-secondary'>
                        Routing / audit note
                      </span>
                    </label>
                    <div className='flex items-center py-2.75 px-3.5 rounded-xl border border-border-secondary focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                      <textarea
                        name='audit-note'
                        id='audit-note'
                        className='w-full h-full border-none outline-none bg-inherit font-publicSans text-[13px] text-font-primary appearance-none resize-none'
                        placeholder='Evidence check, priority override, or reason for 
rejection…'></textarea>
                    </div>
                    <small className='text-[10px] font-publicSans font-normal text-font-tertiary'>
                      Required when rejecting. Saved to the public audit trail.
                    </small>
                  </div>
                </div>
                <div className='w-full flex justify-end items-center gap-2 border-t border-border-primary pt-4.5'>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-inherit border border-border-secondary rounded-full font-publicSans font-semibold text-xs text-font-primary cursor-pointer hover:bg-border-secondary'>
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-font-warning border border-font-warning rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Reject report
                  </button>
                  <button
                    type='button'
                    className='px-3.75 py-2 bg-bg-primary border border-bg-pribg-bg-primary rounded-full font-publicSans font-semibold text-xs text-font-quaternary cursor-pointer hover:opacity-90'>
                    Verify & route
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
