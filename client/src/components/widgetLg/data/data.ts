

export interface CostumerDataInfo {

  username: string;
  date: string;
  amount:string,
  status:string,
  image:string

}




export const data:CostumerDataInfo[] = [
  {
    username: "Valeria Boltneva",
    date: "24/07/2022",
    amount: "$743.55",
    status: "Approved",
    image:
      "https://images.pexels.com/photos/1034012/pexels-photo-1034012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

  {
    username: "Clara Krivitskiy",
    date: "22/07/2022",
    amount: "$600",
    status: "Declined",
    image:
      "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    username: "Maya Raz",
    date: "20/07/2022",
    amount: "$1231.90",
    status: "Pending",
    image:
      "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    username: "Jack Winbow",
    date: "19/07/2022",
    amount: "$79.90",
    status: "Approved",
    image:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];


