import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';
import "./single.scss";

function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://c8.alamy.com/zoomses/9/d4c59d90389444e3b1166312d2f7fa51/p9mywr.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Robert Pires</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">rpires@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Enterprise Phone:</span>
                  <span className="itemValue">+56 9 123 456 78</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Profile: </span>
                  <span className="itemValue">Administrator</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} title="User Activity(Last 10 days)"/>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Last notified alerts</h1>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default Single;
