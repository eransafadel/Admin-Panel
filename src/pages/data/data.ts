
export interface FullyDataUserInfo {
  fullname:string;
  job:string;
  dob:string;
  username:string;
  phone:string;
  mail:string;
  location:string;
  image:string;
} 

export interface productRowsInfo {
  id:number;
  name:string;
  img:string;
  stock:number;
  status:string;
  price:string;
 
}




export const dataInfo:FullyDataUserInfo = {
  fullname: "Eran Safadel",
  job: "Programmer",
  dob: "21/01/1993",
  username: "eransa",
  phone: "0556651982",
  mail: "eransafadel@gmail.com",
  location: "TA | ISRAEL",
  image:
    "https://media-exp1.licdn.com/dms/image/C5603AQEUjmnD7Lggvw/profile-displayphoto-shrink_800_800/0/1602768957092?e=1664409600&v=beta&t=IrRlvS7KCa2n6IvxpELyNPdfvuDZbGYhH75mAbsdDaM",
};

export const productRows:productRowsInfo[] = [
  {
    id: 1,
    name: "Apple MacBook Pro 13",
    img:
      "https://www.apple.com/v/macbook-pro-13/m/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg?202206270153",
    stock: 999,
    status: "active",
    price: "$1820.00",
  },
  {
    id: 2,
    name: "Apple iPhone 13 Pro",
    img:
      "https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg",
    stock: 720,
    status: "active",
    price: "$930.00",
  },
  {
    id: 3,
    name: "VR Oculus",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6342/6342915_rd.jpg",
    stock: 125,
    status: "active",
    price: "$660.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];






