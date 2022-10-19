import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
    {date: "08-10", incident: 25, people:82},
    {date: "09-10", incident: 27, people:78},
    {date: "10-10", incident: 32, people:63},
    {date: "11-10", incident: 18, people:68},
    {date: "12-10", incident: 16, people:77},
    {date: "13-10", incident: 16, people:82},
    {date: "14-10", incident: 15, people:61},
    {date: "15-10", incident: 12, people:81},
    {date: "16-10", incident: 10, people:74},
    {date: "17-10", incident: 10, people:73},
];

const Chart = ({aspect,title}) => {
  return (
    <div className="chart">
        <div className="title">
           {title}
        </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="incident" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#F44336" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#F44336" stopOpacity={0} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="people" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA726" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFA726" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="people"
            stroke="#FFA726"
            fillOpacity={1}
            fill="url(#people)"
          />
          <Area
            type="monotone"
            dataKey="incident"
            stroke="#F44336"
            fillOpacity={1}
            fill="url(#incident)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
