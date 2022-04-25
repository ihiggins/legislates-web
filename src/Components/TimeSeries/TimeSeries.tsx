import styles from "./Styles.module.scss";

const TimeSeries = () => {
  const months = [
    { name: "january", days: 31 },
    { name: "feburary", days: 28 },
    { name: "march", days: 31 },
    { name: "april", days: 30 },
    { name: "may", days: 31 },
    { name: "june", days: 30 },
    { name: "july", days: 31 },
    { name: "august", days: 31 },
    { name: "september", days: 30 },
    { name: "october", days: 31 },
    { name: "november", days: 30 },
    { name: "december", days: 31 },
  ];
  const colors = ["#2c3138", "#0e4429", "#006d32", "#30a14e","#39d353"];

  let gridData = [];

  for (var i in months) {
    let rows = [];

    for (var j = 0; j <= months[i].days; j++) {
      rows.push(<div className={styles.square} style={{background:colors[getRandomInt(4)]}}></div>);
    }

    console.log(i);
    gridData.push(
      <div className={styles.column}>
        <div className={styles.title}> {months[i].name.substring(0, 3)}</div>
        <div className={styles.days}>{rows}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>{gridData}</div>
    </div>
  );
};

export default TimeSeries;

interface Props {
  type?: "month" | "week";
}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
