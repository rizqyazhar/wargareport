import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import TrackPage from "./Pages/TrackPage";
import HelpPage from "./Pages/HelpPage";
import LiveFeedPage from "./Pages/LiveFeedPage";
import DetailReportPage from "./Pages/DetailReportPage";
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
import Categories from "./Pages/admin/Categories";
import Agencies from "./Pages/admin/Agencies";
import OfficerAccountManages from "./Pages/admin/OfficerAccountManages";
import Moderation from "./Pages/admin/Moderation";
import { Provider } from "react-redux";

import reduxStore, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import CitizenProtectedRoute from "./layouts/CitizenProtectedRoute";
import AdminProtectedRoute from "./layouts/AdminProtectedRoute";

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
    element: (
      <CitizenProtectedRoute>
        <ReportReceiptPage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/notification",
    element: (
      <CitizenProtectedRoute>
        <NotificationPage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/profile/my-report",
    element: (
      <CitizenProtectedRoute>
        <MyReportPage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/profile/update-profile",
    element: (
      <CitizenProtectedRoute>
        <UpdateProfilePage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/profile/notification-preference",
    element: (
      <CitizenProtectedRoute>
        <NotificationPreferencePage />,
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/profile/privacy-data",
    element: (
      <CitizenProtectedRoute>
        <PrivacyDataPage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/profile/security",
    element: (
      <CitizenProtectedRoute>
        <SecurityPage />
      </CitizenProtectedRoute>
    ),
  },
  {
    path: "/add-report",
    element: (
      <CitizenProtectedRoute>
        <AddReportLayout />
      </CitizenProtectedRoute>
    ),
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
    element: (
      <AdminProtectedRoute>
        <AdminLayout />
      </AdminProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to={"/admin/escalation-desk"} /> },
      { path: "escalation-desk", element: <EscalationDesk /> },
      { path: "sla-benchmarks", element: <SlaBenchmarks /> },
      { path: "categories", element: <Categories /> },
      { path: "agencies", element: <Agencies /> },
      { path: "officer-accounts", element: <OfficerAccountManages /> },
      { path: "moderation", element: <Moderation /> },
    ],
  },
]);

export default function App() {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}
