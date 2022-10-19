//Temporrary Data
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "age", headerName: "Age", width: 100 },
  { field: "email", headerName: "Email", width: 230 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.ecestaticos.com/G0wMaKZapvE2dsxUKhfFKO1wTCM=/0x0:624x647/746x773/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F52a%2Fed7%2Fac8%2F52aed7ac88525343a37579fea27339ab.jpg",
    status: "Active",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Khaleesi",
    img: "https://i.pinimg.com/736x/b5/7c/6b/b57c6b63f7c7eb1fe7c66b92fac3a394.jpg",
    status: "Active",
    email: "kal1@gmail.com",
    age: null,
  },
  {
    id: 3,
    username: "Talissa",
    img: "https://i.pinimg.com/originals/43/c8/a7/43c8a7687ed748bbb6076186b2214acc.jpg",
    status: "Inactive",
    email: "talissa@gmail.com",
    age: 65,
  },
  {
    id: 4,
    username: "Jaime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljSjG3CDmqQuwzrDUCtWCbDQ2-OPbG5zFbq-anK0M2uFAn-Ra7_xLwVC-zw9eBfauPw4&usqp=CAU",
    status: "Active",
    email: "jaime1@gmail.com",
    age: 45,
  },
  {
    id: 5,
    username: "Arya",
    img: "https://media.vogue.es/photos/5ce6ddd6f8984b26f1ab60d2/master/w_1600%2Cc_limit/vogue_news_tendencias_197972855.jpg",
    status: "Active",
    email: "arya1@gmail.com",
    age: 16,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://images.ecestaticos.com/G0wMaKZapvE2dsxUKhfFKO1wTCM=/0x0:624x647/746x773/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F52a%2Fed7%2Fac8%2F52aed7ac88525343a37579fea27339ab.jpg",
    status: "Active",
    email: "snow1@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Khaleesi",
    img: "https://i.pinimg.com/736x/b5/7c/6b/b57c6b63f7c7eb1fe7c66b92fac3a394.jpg",
    status: "Active",
    email: "kal1@gmail.com",
    age: null,
  },
  {
    id: 8,
    username: "Talissa",
    img: "https://i.pinimg.com/originals/43/c8/a7/43c8a7687ed748bbb6076186b2214acc.jpg",
    status: "Inactive",
    email: "talissa@gmail.com",
    age: 65,
  },
  {
    id: 9,
    username: "Jaime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljSjG3CDmqQuwzrDUCtWCbDQ2-OPbG5zFbq-anK0M2uFAn-Ra7_xLwVC-zw9eBfauPw4&usqp=CAU",
    status: "Active",
    email: "jaime1@gmail.com",
    age: 45,
  },
  {
    id: 10,
    username: "Arya",
    img: "https://media.vogue.es/photos/5ce6ddd6f8984b26f1ab60d2/master/w_1600%2Cc_limit/vogue_news_tendencias_197972855.jpg",
    status: "Active",
    email: "arya1@gmail.com",
    age: 16,
  },
];
