import "./widgetLg.css";
import data from "./data/data";

 const  WidgetLg=()=> {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const items = data.map((n,index)=>
  <tr className="widgetLgTr">
  <td className="widgetLgUser">
    <img
      src={n.image}
      alt=""
      className="widgetLgImg"
    />
    <span className="widgetLgName">{n.username}</span>
  </td>
  <td className="widgetLgDate">{n.date}</td>
  <td className="widgetLgAmount">{n.amount}</td>
  <td className="widgetLgStatus">
    <Button type={n.status} />
  </td>
</tr> );


  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
       {items}
      </table>
    </div>
  );
}

export default WidgetLg;
