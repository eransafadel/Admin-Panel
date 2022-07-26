import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export interface FeaturedData{
  featuredTitle:string;
  featuredMoney:string;
  featuredMoneyRate:number;
  Icon:any;
  featuredSub:string;

}


export const items:FeaturedData[] = [
  {
    featuredTitle: "Revenue",
    featuredMoney: "$2,415",
    featuredMoneyRate: -11.4,
    Icon: ArrowDownward,
    featuredSub: "Compared to last month",
  },
  {
    featuredTitle: "Sales",
    featuredMoney: "$4,415",
    featuredMoneyRate: -1.6,
    Icon: ArrowDownward,
    featuredSub: "Compared to last month",
  },
  {
    featuredTitle: "Cost",
    featuredMoney: "$2,225",
    featuredMoneyRate: +2.4,
    Icon: ArrowUpward,
    featuredSub: "Compared to last month",
  },
];


