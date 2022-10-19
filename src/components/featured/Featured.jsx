import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar,buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SouthIcon from "@mui/icons-material/South";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Incidents</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={88}
            text={"88%"}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: `#FFA726`,
              textColor: "#FFA726",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <p className="title">Total Incidents controlled </p>
        <div className="values">
          <p className="amountIncident">
            <span>Incidents: </span>15
          </p>
          <p className="amountPeople">
            <span>People: </span>121
          </p>
        </div>
        <p className="desc">
          Processing of previous incidents. Latest alerts may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <div className="resultAmount">10(máx)</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">10</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
