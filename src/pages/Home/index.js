import { useSelector } from "react-redux";
import { optionsHome } from "../../helpers/chartOptions";
import Chart from "react-apexcharts";
import styles from "./home.module.scss";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar/navbar";
import {
  getStrongestStat,
  getAvgHeight,
  getAvgWeight,
  getPowerStats,
} from "../../helpers/auxFunctions";

const Home = () => {
  const team = useSelector((state) => state.team);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>

          {team && team.length ? (
            <div className={styles.stats}>            
              <div className={styles.averages}>
                <h1>Team stats:</h1>
                <p>
                  Strongest Stat:{" "}
                  <span>
                    {getStrongestStat(team).charAt(0).toUpperCase() +
                      getStrongestStat(team).slice(1)}
                  </span>
                </p>
                <p>
                  Average Height: <span>{`${getAvgHeight(team)} cm`}</span>
                </p>
                <p>
                  Average Weight: <span>{`${getAvgWeight(team)} kg`}</span>
                </p>
              </div>
              <Chart
                options={optionsHome}
                series={[
                  {
                    name: "Score",
                    data: getPowerStats(team),
                  },
                ]}
                type="radar"
                width="300"
                height="250"
              />
            </div>
          ) : null}
        </div>
        <div className={styles.cardDeck}>
          {team && team.length > 0 ? (
            team.map((hero, i) => {
              return <Card hero={hero} key={i} />;
            })
          ) : (
            <h1>You don't have a team yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
