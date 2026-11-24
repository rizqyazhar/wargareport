import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import TrackPage from "./Pages/TrackPage";
import HelpPage from "./Pages/HelpPage";
import LiveFeedPage from "./Pages/LiveFeedPage";
import DetailReportPage from "./Pages/DetailReportPage";
import { GetTokenContext } from "./contexts/AuthContext";
import { useState } from "react";
import AddReportLayout from "./layouts/AddReportLayout";
import TopicReportPage from "./Pages/TopicReportPage";
import LocationReportPage from "./Pages/LocationReportPage";
import ProofReportPage from "./Pages/ProofReportPage";
import ReviewSendReportPage from "./Pages/ReviewSendReportPage";
import ReportReceiptPage from "./Pages/ReportReceiptPage";
import NotificationPage from "./Pages/NotificationPage";
import MyReportPage from "./Pages/MyReportPage";
import UpdateProfilePage from "./Pages/UpdateProfilePage";
import NotificationPreferencePage from "./Pages/NotificationPreferencePage";
import PrivacyDataPage from "./Pages/PrivacyDataPage";
import SecurityPage from "./Pages/SecurityPage";
import AdminLayout from "./layouts/AdminLayout";
import EscalationDesk from "./Pages/admin/EscalationDesk";
import SlaBenchmarks from "./Pages/admin/SlaBenchmarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/live-feed",
    element: <LiveFeedPage />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
  {
    path: "/detail-report/:id/:slug",
    element: <DetailReportPage />,
  },
  {
    path: "/report-receipt",
    element: <ReportReceiptPage />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  { path: "/profile/my-report", element: <MyReportPage /> },
  { path: "/profile/update-profile", element: <UpdateProfilePage /> },
  {
    path: "/profile/notification-preference",
    element: <NotificationPreferencePage />,
  },
  { path: "/profile/privacy-data", element: <PrivacyDataPage /> },
  { path: "/profile/security", element: <SecurityPage /> },
  {
    path: "/add-report",
    element: <AddReportLayout />,
    children: [
      { index: true, element: <Navigate to={"/add-report/topic"} /> },
      { path: "topic", element: <TopicReportPage /> },
      { path: "location", element: <LocationReportPage /> },
      { path: "proof", element: <ProofReportPage /> },
      { path: "review-send", element: <ReviewSendReportPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to={"/admin/escalation-desk"} /> },
      { path: "escalation-desk", element: <EscalationDesk /> },
      { path: "sla-benchmarks", element: <SlaBenchmarks /> },
    ],
  },
]);

export default function App() {
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || "",
  );

  return (
    <GetTokenContext.Provider value={[token, setToken]}>
      <RouterProvider router={router} />
    </GetTokenContext.Provider>
  );
}
