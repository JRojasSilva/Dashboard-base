import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "alerts":
      data = {
        title: "ALERTS",
        link: "See all Alerts",
        icon: <WarningAmberOutlinedIcon className="icon" style={{
            backgroundColor: "#F44336"
        }} />,
      };
      break;
      case "people-counting":
      data = {
        title: "LIVE",
        link: "See all records",
        icon: <PeopleAltIcon className="icon" style={{
            backgroundColor: "#2E7D32"
        }}/>,
      };
      break;
      case "busiest-sector":
      data = {
        title: "BUSIEST SECTOR",
        link: "See all records",
        icon: <TrafficOutlinedIcon className="icon" style={{
            backgroundColor: "#5E35B1"
        }}/>,
      };
      break;
      case "last-detection":
      data = {
        title: "LAST DETECTIONS",
        link: "See all Detections",
        icon: <AdjustOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">23</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
