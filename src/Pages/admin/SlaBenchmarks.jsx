export default function SlaBenchmarks() {
  return (
    <div className='flex flex-col gap-7.5'>
      <div className='flex justify-between'>
        <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
          Statutory resolution windows
        </span>
        <button
          type='button'
          className='cursor-pointer text-xs font-ibmPlexMono font-normal text-[13px] text-bg-primary'>
          Enforced across all wards
        </button>
      </div>
      <div className='table-container outline outline-border-secondary/70'>
        <table>
          <thead>
            <tr>
              <th scope='col'>Service Domain</th>
              <th scope='col'>Responsible Bureau</th>
              <th scope='col'>Target SLA</th>
              <th scope='col'>Escalation Threshold</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Roads & Transit
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Dinas Bina Marga DKI Jakarta (Roads & Sidewalks)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                48 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +12h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Water & Sewage
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Perumda PAM JAYA (Clean Drinking Water)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                24 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +6h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Street Lighting
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Dinas Perhubungan DKI Jakarta (PJU & Traffic)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                72 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +18h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Sanitation & Waste
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Dinas Lingkungan Hidup DKI Jakarta (Waste & Rivers)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                36 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +9h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Public Parks & Trees
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Dinas Pertamanan dan Hutan Kota DKI Jakarta
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                48 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +12h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Noise & Disturbance
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Satpol PP Provinsi DKI Jakarta (Public Order)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                48 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +12h (Warning)
              </td>
              <td>
                <span className='px-3 py-1.5 bg-bg-resolved border border-border-resolved rounded-full font-ibmPlexMono text-[10px] font-normal text-font-resolved uppercase'>
                  Active
                </span>
              </td>
            </tr>
            <tr>
              <th
                scope='row'
                className='font-publicSans font-semibold text-xs text-font-primary'>
                Building & Zoning
              </th>
              <td className='font-publicSans font-normal text-xs text-font-secondary'>
                Dinas Cipta Karya, Tata Ruang & Pertanahan (Citata)
              </td>
              <td className='font-ibmPlexMono font-semibold text-[13px] text-bg-primary'>
                72 hours
              </td>
              <td className='font-ibmPlexMono font-normal text-[13px] text-font-tertiary'>
                +18h (Warning)
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
  );
}
