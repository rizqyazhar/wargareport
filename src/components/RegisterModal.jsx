import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../redux/slices/auth/register.slice";

const schema = yup.object({
  fullname: yup.string().required("Nama harus diisi"),
  email: yup.string().email().required("Email harus diisi"),
  contact: yup.string().required("No telpon harus diisi"),
  nik: yup.string(),
  password: yup.string().required("Password harus diisi"),
});

const newId = Math.floor(Math.random() * Date.now());

export default function RegisterModal(props) {
  const dispatch = useDispatch();
  const reduxAccountsState = useSelector((state) => state.accounts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      contact: "",
      nik: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { setOpenLoginModal, setOpenRegisterModal } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleCloseModal = () => {
    setOpenRegisterModal(false);
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal((prev) => !prev);
    setOpenRegisterModal((prev) => !prev);
  };

  const pushData = (data) => {
    if (!data) return window.alert("Register Failed");
    const emailHasBeenUsed = reduxAccountsState?.find(
      (item) => item.email === data.email,
    );

    if (emailHasBeenUsed)
      return window.alert("This account has already been used");

    const passwordEncoded = btoa(data.password);
    dispatch(
      createAccount({
        id: newId,
        fullname: data.fullname,
        email: data.email,
        contact: data.contact,
        nik: data.nik,
        password: passwordEncoded,
      }),
    );

    window.alert("Register Success!");

    setOpenLoginModal(true);
    setOpenRegisterModal(false);
    reset();
    return;
  };

  return (
    <AuthLayout>
      <div className='w-[90%] md:w-[50%] lg:w-[40%] h-fit overflow-hidden rounded-[20px] border border-border-secondary bg-bg-tertiary'>
        <div className='flex justify-between items-start py-3 px-5 lg:py-6 lg:px-7.5 bg-bg-closed border-b border-border-primary '>
          <div className='flex flex-col gap-0.75'>
            <p className='title text-sm lg:text-lg'>Register Citizen Account</p>
            <p className='description text-[10px] lg:text-xs'>
              Sign in to lodge a complaint or upvote issues.
            </p>
          </div>
          <button onClick={handleCloseModal} className='cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-x preview-icon'>
              <path d='M18 6 6 18' />
              <path d='m6 6 12 12' />
            </svg>
          </button>
        </div>
        <div className='flex flex-col gap-2.5 lg:gap-5 p-2 lg:p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
            <button
              onClick={handleOpenLoginModal}
              type='button'
              className='py-2.5 lg:py-3.75 flex justify-center items-center text-[10px] lg:text-[13px] rounded-full font-medium font-publicSans bg-bg-closed text-font-secondary cursor-pointer hover:opacity-80'>
              Sign In Existing Account
            </button>
            <button
              disabled
              className='py-2.5 lg:py-3.75 flex justify-center items-center text-[10px] lg:text-[13px] rounded-full font-medium font-publicSans bg-bg-primary text-font-quaternary '>
              Register as Citizen
            </button>
          </div>
          <form
            onSubmit={handleSubmit(pushData)}
            className='flex flex-col gap-2 lg:gap-3'>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='fullname-input'
                className='w-fit flex items-center justify-between'>
                <span className='eyebrow-heading text-[10px]'>
                  Full Name (Nama Lengkap) *
                </span>
              </label>
              <div className='w-full flex items-center gap-1.5 lg:gap-2.25 py-1.5 lg:py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                <div className='w-3.5 h-3.5'>
                  <img
                    src='/src/assets/icon/mail-icon.svg'
                    alt='mail-icon'
                    className='w-full h-full'
                  />
                </div>
                <input
                  id='fullname-input'
                  className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-[10px] lg:placeholder:text-xs placeholder:text-font-tertiary'
                  type='text'
                  {...register("fullname")}
                  placeholder='e.g. Budi Santoso'
                />
              </div>
              <p className='text-font-warning text-xs'>
                {errors.fullname?.message}
              </p>
            </div>
            <div className='grid grid-cols-2 gap-2 lg:gap-3'>
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='email-input'
                  className='w-fit flex items-center justify-between'>
                  <span className='eyebrow-heading text-[10px]'>
                    Email Address *
                  </span>
                </label>
                <div className='w-full flex items-center gap-1.5 lg:gap-2.25 py-1.5 lg:py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                  <div className='w-3.5 h-3.5'>
                    <img
                      src='/src/assets/icon/lock-icon.svg'
                      alt='lock-icon'
                      className='w-full h-full'
                    />
                  </div>
                  <input
                    id='email-input'
                    className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-[10px] lg:placeholder:text-xs placeholder:text-font-tertiary'
                    type='email'
                    {...register("email")}
                    placeholder='e.g. budi@wargareport.id'
                    autoComplete='off'
                  />
                </div>
                <p className='text-font-warning text-xs'>
                  {errors.email?.message}
                </p>
              </div>
              <div className='flex flex-col gap-1.5'>
                <label
                  htmlFor='contact-input'
                  className='w-fit flex items-center justify-between'>
                  <span className='eyebrow-heading text-[10px]'>
                    Phone / WhatsApp *
                  </span>
                </label>
                <div className='w-full flex items-center gap-1.5 lg:gap-2.25 py-1.5 lg:py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                  <div className='w-3.5 h-3.5'>
                    <img
                      src='/src/assets/icon/mail-icon.svg'
                      alt='mail-icon'
                      className='w-full h-full'
                    />
                  </div>
                  <input
                    id='contact-input'
                    className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-[10px] lg:placeholder:text-xs placeholder:text-font-tertiary'
                    type='tel'
                    {...register("contact")}
                    placeholder='+62 812-...'
                  />
                </div>
                <p className='text-font-warning text-xs'>
                  {errors.contact?.message}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='nik-input'
                className='w-fit flex items-center justify-between'>
                <span className='eyebrow-heading text-[10px]'>NIK</span>
              </label>
              <div className='w-full flex items-center gap-1.5 lg:gap-2.25 py-1.5 lg:py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                <div className='w-3.5 h-3.5'>
                  <img
                    src='/src/assets/icon/mail-icon.svg'
                    alt='mail-icon'
                    className='w-full h-full'
                  />
                </div>
                <input
                  id='nik-input'
                  className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-[10px] lg:placeholder:text-xs placeholder:text-font-tertiary'
                  type='text'
                  {...register("nik")}
                  placeholder='16 digits for verified resident badge (e.g. 3174...)'
                  autoComplete='off'
                />
              </div>
              <small className='font-publicSans font-normal text-[10px] text-font-tertiary'>
                Used exclusively for verification under UU PDP and never shown
                to the public.
              </small>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label
                htmlFor='password-input'
                className='w-fit flex items-center justify-between'>
                <span className='eyebrow-heading text-[10px]'>Password</span>
              </label>
              <div className='w-full flex items-center gap-1.5 lg:gap-2.25 py-1.5 lg:py-2.75 px-3.5 rounded-xl border border-border-secondary overflow-hidden focus-within:border focus-within:border-font-secondary focus-within:shadow-[0px_0px_0px_2px_rgba(15,107,79,0.13)]'>
                <div className='w-3.5 h-3.5'>
                  <img
                    src='/src/assets/icon/lock-icon.svg'
                    alt='lock-icon'
                    className='w-full h-full'
                  />
                </div>
                <div className='w-full flex items-center justify-between'>
                  <input
                    id='password-input'
                    className='border-none outline-none w-full font-normal text-[13px] bg-inherit text-font-primary font-publicSans placeholder:text-[10px] lg:placeholder:text-xs placeholder:text-font-tertiary'
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder='Enter your Password'
                    autoComplete='current-password'
                  />
                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    id='show-password-toggle'
                    type='button'
                    className='w-4 h-4 cursor-pointer'>
                    <img
                      src={
                        showPassword
                          ? "/src/assets/icon/eye-off-icon.svg"
                          : "/src/assets/icon/eye-on-icon.svg"
                      }
                      alt={showPassword ? "eye-off" : "eye-on"}
                      className='w-full h-full'
                    />
                  </button>
                </div>
              </div>
              <p className='text-font-warning text-xs'>
                {errors.password?.message}
              </p>
            </div>

            <Button
              type='submit'
              btnText='Create Account & Continue'
              btnImg={["/src/assets/icon/check-icon.svg"]}
              btnAlt={["check-icon"]}
              variant='button-one-icon'
              btnCustomStyles='w-full flex justify-center bg-bg-primary'
              btnTextCustomStyles='font-publicSans font-semibold text-[13px] text-font-quaternary'
            />
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
