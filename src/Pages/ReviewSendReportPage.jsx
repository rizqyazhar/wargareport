import { Link, useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  reportTitle: yup.string().required("Title harus diisi"),
  reportDetails: yup.string().required("Detail harus diisi"),
  postAnonymously: yup.boolean(),
  name: yup.string().when("postAnonymously", {
    is: true,
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.required("Nama harus diisi"),
  }),
  email: yup.string().email().required("Email harus diisi"),
  contact: yup.string(),
  alertStatus: yup.array(),
});

export default function ReviewSendReportPage() {
  // const [formReport, setFormReport] = useContext(FormContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reportTitle: "",
      reportDetails:
        "Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan",
      postAnonymously: false,
      email: "",
      contact: "",
      alertStatus: [],
    },
    resolver: yupResolver(schema),
  });

  const pushData = () => {
    // setFormReport((prev) => ({ ...prev, data }));

    reset();
    navigate("/report-receipt");
    return;
  };

  return (
    <section className='col-start-1 col-end-13 lg:col-start-4 lg:col-end-13 flex flex-col gap-2.5 bg-bg-tertiary border border-border-primary rounded-2xl py-3.75 px-4.75 md:py-5.75 md:px-6.75 lg:py-7.75 lg:px-8.75 overflow-hidden'>
      <div className='flex flex-col gap-1.5'>
        <span className='eyebrow-heading font-normal text-[11px]'>
          Step 04 of 04
        </span>
        <h2 className='title text-[25px]'>Report summary & declaration</h2>
        <p className='description text-[13px]'>
          Review the report and choose notifications before final submission.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(pushData)}
        className='flex flex-col gap-4 py-2.5'>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='report-title-input'
            className='fit-content flex items-center justify-between'>
            <span className='eyebrow-heading text-[10px] text-font-secondary'>
              Concise Title *
            </span>
          </label>
          <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
            <input
              id='report-title-input'
              {...register("reportTitle")}
              className='w-full border-none outline-none font-normal text-[13px] bg-inherit text-font-primary font-publicSans'
              type='text'
              placeholder='Pohon tumbang di depan Kebun Binatang samping Kampus ITB'
              required
            />
          </div>
          <p className='text-font-warning text-xs'>
            {errors.reportTitle?.message}
          </p>
        </div>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='report-textarea-input'
            className='w-full flex justify-between items-center font-ibmPlexMono'>
            <span className='eyebrow-heading text-[10px] text-font-secondary'>
              Incident Observation Details *
            </span>
            <span className='font-normal text-[13px] text-font-tertiary'>
              100 chars (min 15)
            </span>
          </label>
          <textarea
            name='report-textarea-input'
            id='report-textarea-input'
            {...register("reportDetails")}
            className='w-full h-22.5 px-2.75 py-3.5 resize-none border border-border-secondary rounded-2xl outline-none overflow-y-auto font-publicSans text-[13px] text-font-primary bg-inherit'
            required
            placeholder='Pohon tumbang sekitar lokasi mengganggu mobilitas masyarakat yang melintas, mohon untuk diperhatikan'></textarea>
          <p className='text-font-warning text-xs'>
            {errors.reportDetails?.message}
          </p>
        </div>
        <div className='post-anonym-check-box'>
          <div className='lock-icon bg-bg-primary'></div>
          <div className='w-full flex justify-between items-center'>
            <label
              htmlFor='anonym-checkbox-input'
              className='anonym-checkbox-label flex flex-col w-full font-publicSans text-xs font-semibold'>
              Post anonymously on public feed
              <span className='font-normal text-font-tertiary'>
                Your name will be masked as Warga Anonim on open records.
              </span>
            </label>
            <input
              type='checkbox'
              {...register("postAnonymously")}
              name='anonym-checkbox-input'
              id='anonym-checkbox-input'
              className='anonym-checkbox-input'
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 md:gap-3'>
          <div className='flex flex-col gap-1.5'>
            <label
              htmlFor='filername-input'
              className='fit-content flex items-center justify-between'>
              <span className='eyebrow-heading text-[10px] text-font-secondary'>
                Filer Name *
              </span>
            </label>
            <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
              <input
                id='filername-input'
                {...register("name")}
                className='w-full border-none outline-none font-normal text-[13px] bg-inherit text-font-primary font-publicSans'
                type='text'
                placeholder='Fahrul Septiana'
                required
              />
            </div>
            <p className='text-font-warning text-xs'>{errors.name?.message}</p>
          </div>
          <div className='flex flex-col gap-1.5'>
            <label
              htmlFor='email-input'
              className='fit-content flex items-center justify-between'>
              <span className='eyebrow-heading text-[10px] text-font-secondary'>
                Email for Status Alerts *
              </span>
            </label>
            <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
              <input
                id='email-input'
                {...register("email")}
                className='w-full border-none outline-none font-normal text-[13px] bg-inherit text-font-primary font-publicSans'
                type='email'
                placeholder='fahrul@wargareport.id'
                required
              />
            </div>
            <p className='text-font-warning text-xs'>{errors.email?.message}</p>
          </div>
          <div className='flex flex-col gap-1.5'>
            <label
              htmlFor='contact-input'
              className='fit-content flex items-center justify-between'>
              <span className='eyebrow-heading text-[10px] text-font-secondary'>
                Phone / WhatsApp
              </span>
            </label>
            <div className='w-full flex items-center gap-2.25 py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden'>
              <input
                id='contact-input'
                {...register("contact")}
                className='w-full border-none outline-none font-normal text-[13px] bg-inherit text-font-primary font-publicSans'
                type='text'
                placeholder='+62 812-9842-1054'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <label
              htmlFor='email-alert-status'
              className='fit-content flex items-center justify-between'>
              <span className='eyebrow-heading text-[10px] text-font-secondary'>
                Status alert channels
              </span>
            </label>
            <div className='h-full flex items-center gap-4 pl-1.25'>
              <div className='flex items-center gap-2.5 text-xs text-font-secondary font-publicSans'>
                <input
                  type='checkbox'
                  {...register("alertStatus")}
                  id='email-alert-status'
                  value='email'
                  className='checkbox-input-shape'
                />
                <label htmlFor='email-alert-status'>Email</label>
              </div>
              <div className='flex items-center gap-2.5 text-xs text-font-secondary font-publicSans'>
                <input
                  type='checkbox'
                  {...register("alertStatus")}
                  id='sms-alert-status'
                  value='sms'
                  className='checkbox-input-shape'
                />
                <label htmlFor='sms-alert-status'>SMS</label>
              </div>
            </div>
          </div>
        </div>
        <div className='confirm-policy-box'>
          <input type='checkbox' name='confirm-policy' id='confirm-policy' />
          <label htmlFor='confirm-policy' className='confirm-policy-label'>
            I confirm this incident was authentically observed on-site under Law
            No. 25/2009.
          </label>
        </div>
        <div className='flex justify-between items-center pt-5 text-[13px] font-semibold border-t border-border-primary font-publicSans'>
          <Link to={"/add-report/proof"} className='text-bg-primary'>
            Cancel
          </Link>
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
