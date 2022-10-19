import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 10010,
      time: "14:10",
      camera: "1 NORTE",
      message: "person enters restricted area",
      evidence:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_wzqXi1FoSDFADnLCEoQlS6GrffWo-hnAA&usqp=CAU",
      status: "notchecked",
    },
    {
      id: 10009,
      time: "14:01",
      camera: "2 NORTE",
      message: "person enters restricted area",
      evidence:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5O2j6zmdAE4WGK6lJkAfKgr01j8RHlvQiQ&usqp=CAU",
      status: "checked",
    },
    {
      id: 10008,
      time: "13:17",
      camera: "ACCESO PRINCIPAL",
      message: "license plate is not detected on the truck",
      evidence:
        "https://images.ctfassets.net/bx9krvy0u3sx/3kfVS1NhR3YuyH1CxgLaqt/538781650e65b47ba038e7e516d6fa9a/Potosinos_foto.jpg?q=80",
      status: "checked",
    },
    {
      id: 10007,
      time: "14:10",
      camera: "1 NORTE",
      message: "person does not use PPE",
      evidence:
        "https://www.muninuevochimbote.gob.pe/multimedia/noticias/143430731011406613_1457643034546744_7170237910088587405_o.jpg",
      status: "checked",
    },
    {
      id: 10006,
      time: "14:10",
      camera: "PATIO TRASERO",
      message: "person enters restricted area",
      evidence:
        "https://www.juventudrebelde.cu/thumbs/425x/crc/images/news/2019/08/ydKKHB_14-08-2019_11.08.40.000000.jpg",
      status: "checked",
    },
  ];
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Register ID</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            <TableCell className="tableCell">Camera</TableCell>
            <TableCell className="tableCell">Message</TableCell>
            <TableCell className="tableCell">Evidence</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.time}</TableCell>
              <TableCell className="tableCell">{row.camera}</TableCell>
              <TableCell className="tableCell">{row.message}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.evidence} alt="" className="image"/>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
