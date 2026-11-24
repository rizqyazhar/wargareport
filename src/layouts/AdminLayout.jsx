import { NavLink, Outlet } from "react-router";
import NavbarAdmin from "../components/admin/NavbarAdmin";
import Footer from "../components/Footer";

export default function AdminLayout() {
  return (
    <>
      <NavbarAdmin />
      <main className='min-h-[50dvh] px-7.5 md:px-10 lg:px-25 py-15 lg:pt-10 lg:pb-34 flex flex-col gap-5 bg-bg-secondary'>
        <div className='flex flex-col gap-2.5'>
          <span className='eyebrow-heading text-[11px]'>System Governance</span>
          <h1 className='title text-[35px]'>Civic Administration & Policies</h1>
          <p className='description text-sm max-w-lg'>
            Verify incoming citizen reports, route them to the responsible
            bureau, and configure statutory SLA benchmarks, taxonomy, and agency
            contacts.
          </p>
          <div className='w-full flex items-center gap-1 pb-3 mt-6 border-b border-border-primary'>
            <NavLink to={"/admin/escalation-desk"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  Escalation Desk
                  <div
                    className={
                      isActive
                        ? "w-4.5 h-4.5 flex justify-center items-center rounded-full font-ibmPlexMono font-semibold text-[10px] text-font-quaternary bg-font-quaternary/20"
                        : "w-4.5 h-4.5 flex justify-center items-center rounded-full font-ibmPlexMono font-semibold text-[10px] text-font-quinary bg-bg-quaternary"
                    }>
                    1
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink to={"/admin/sla-benchmarks"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  SLA Benchmarks
                </div>
              )}
            </NavLink>
            <NavLink to={"/admin/categories"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  Categories
                </div>
              )}
            </NavLink>
            <NavLink to={"/admin/agencies"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  Agencies
                </div>
              )}
            </NavLink>
            <NavLink to={"/admin/officer-accounts"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  Officer Accounts
                </div>
              )}
            </NavLink>
            <NavLink to={"/admin/moderation"}>
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-quaternary bg-bg-primary rounded-full"
                      : "w-fit px-3.75 py-2.5 flex items-center gap-1.5 font-publicSans font-medium text-[13px] text-font-secondary bg-inherit"
                  }>
                  Moderation
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
