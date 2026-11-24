import CategoryInput from "../components/CategoryInput";
import { categoryInputContent } from "../lib/data";
// import { useNavigate } from "react-router";

export default function TopicReportPage() {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const categoryValue = formData.get("cat");

    if (!categoryValue) return;

    // setFormReport((prev) => ({ ...prev, categoryValue }));
    // navigate("/add-report/location");
  };

  return (
    <section className='col-start-1 col-end-13 lg:col-start-4 lg:col-end-13 flex flex-col gap-2.5 bg-bg-tertiary border border-border-primary rounded-2xl py-3.75 px-4.75 md:py-5.75 md:px-6.75 lg:py-7.75 lg:px-8.75'>
      <div className='flex flex-col gap-1.5'>
        <span className='eyebrow-heading font-normal text-[11px]'>
          Step 01 of 04
        </span>
        <h2 className='title text-[25px]'>What needs fixing?</h2>
        <p className='description text-[13px]'>
          Select the municipal service category that best matches the issue
          observed.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-2.5'>
        <div className='grid grid-cols-2 gap-2.5'>
          {categoryInputContent.map((item, index) => {
            return <CategoryInput item={item} key={index} />;
          })}
        </div>
        <div className='flex justify-between items-center pt-5 text-[13px] font-semibold border-t border-border-primary font-publicSans'>
          <button type='button' disabled className='text-bg-primary'>
            Cancel
          </button>
          <button
            type='submit'
            className='flex items-center gap-1.75 py-2.5 px-5 text-font-quaternary font-semibold bg-bg-primary rounded-full cursor-pointer hover:opacity-80'>
            Continue
            <span>
              <img
                src='/src/assets/icon/arrow-right-white.svg'
                alt='arrow-right-white-icon'
              />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
