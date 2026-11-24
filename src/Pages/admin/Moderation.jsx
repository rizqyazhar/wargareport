export default function Moderation() {
  return (
    <div className='flex flex-col gap-7.5'>
      <span className='eyebrow-heading text-[13px] tracking-wider text-font-tertiary'>
        Public transparency & content filter log
      </span>
      <div className='px-6.25 py-7 bg-bg-tertiary border border-border-primary rounded-2xl flex flex-col gap-3'>
        <h3 className='font-publicSans font-semibold text-base text-font-primary'>
          Automated PII Redaction Engine
        </h3>
        <p className='font-publicSans font-normal text-[13px] text-font-secondary'>
          Resident phone numbers, full surnames, and email prefixes are
          automatically stripped prior to caching in the public registry. All
          media uploads are scanned for illicit metadata and license plate
          markers.
        </p>
        <div className='bg-bg-submitted border border-border-primary rounded-[10px] p-3.25 font-ibmPlexMono text-[11px] text-font-primary flex flex-col gap-1.5'>
          <p>Filter Status: Nominal</p>
          <p>PII Rules: 14 strict redaction patterns active</p>
          <p>False report audit threshold: 3 incidents per IP/subnet</p>
        </div>
      </div>
    </div>
  );
}
