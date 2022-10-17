import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">ALERTS</span>
        <span className="counter">23</span>
        <span className="link">see all</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          20%
        </div>
            <ReportProblemIcon className="icon"/>
      </div>
    </div>
  );
};

export default Widget;
