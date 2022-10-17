import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Deliryum AI</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" /> <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <AnalyticsIcon className="icon" />
            <span>Reports</span>
          </li>
          <li>
            <ReportProblemIcon className="icon" />
            <span>Alerts</span>
          </li>
          <li>
            <VideoCameraFrontIcon className="icon" />
            <span>Cameras</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <PeopleIcon className="icon" />
            <span>Users</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <ContactSupportIcon className="icon" />
            <span>Help</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
