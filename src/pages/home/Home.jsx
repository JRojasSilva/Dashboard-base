import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="alerts" />
          <Widget type="people-counting" />
          <Widget type="busiest-sector" />
          <Widget type="last-detection" />
        </div>
        <div className="charts">
          <Featured />
          <Chart
            Chart
            aspect={2 / 1}
            title="People Alert Relationship (Last 10 Days)"
          />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Lastest Alerts</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
