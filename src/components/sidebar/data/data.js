import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const data = [
  {
    title: "Home",
    item: [
      { icon: LineStyle, name: "Home",link:"/" },
      { icon: Timeline, name: "Analytics" },
      { icon: TrendingUp, name: "Sales" },
    ],
  },
  {
    title: "Quick Menu",
    item: [
      { icon: PermIdentity, name: "Users",link:"/users" },
      { icon: Storefront, name: "Products",link:"/products" },
      { icon: AttachMoney, name: "Transactions" },
      { icon: BarChart, name: "Reports" },
    ],
  },
  {
    title: "Notifications",
    item: [
      { icon: MailOutline, name: "Mail" },
      { icon: DynamicFeed, name: "Feedback" },
      { icon: ChatBubbleOutline, name: "Messages" },
    ],
  },
  {
    title: "Staff",
    item: [
      { icon: WorkOutline, name: "Manage" },
      { icon: Timeline, name: "Analytics" },
      { icon: Report, name: "Reports" },
    ],
  },
];

export default data;
