import { Link, useLocation } from "react-router-dom";
import { removeTeamMember } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { averageStats } from "../../helpers/auxFunctions";
import { optionsCard } from "../../helpers/chartOptions";
import { setNewMember } from "../../redux/actions";
import { useState } from "react";
import styles from "./card.module.scss";
import Chart from "react-apexcharts";

const Card = ({ hero }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  let { pathname } = useLocation();
  const [error, setError] = useState("");
  const [active, setActive] = useState("true")
  const { powerstats, name, image, id } = hero;
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat,
  } = powerstats;
  const statsArr = [intelligence, strength, speed, durability, power, combat];
  const onSetNewMember = (hero) => {
    const countAlignment = (alignment) => {
      return team.reduce(
        (acc, cur) => (cur.biography.alignment === alignment ? ++acc : acc),
        0
      );
    };

    if (team.length === 6) {
      setError("Your team is already complete");
    } else if (team.some((h) => h.id === hero.id)) {
      setError("This hero already belongs to your team");
    } else if (
      countAlignment("bad") === 3 &&
      hero.biography.alignment === "bad"
    ) {
      setError("There are already enough villains in your team");
    } else if (
      countAlignment("good") === 3 &&
      hero.biography.alignment === "good"
    ) {
      setError("There are already enough good heroes in your team");
    } else {
      dispatch(setNewMember(hero));
    }
  };
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.front}>
          <img src={image.url} />
          <div className={styles.frontName}>{name}</div>
        </div>
        <div className={styles.back}>
          <h6>Powerstats: {averageStats(...statsArr)}</h6>
          <Chart
            options={optionsCard}
            series={[
              {
                name: "Score",
                data: statsArr,
              },
            ]}
            type="radar"
            width="350"
            height="350"
          />
          {error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <div className={styles.buttons}>
              <Link to={`/hero/${id}`}>
                <button>Details</button>
              </Link>
              {pathname !== "/search" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeTeamMember(id));
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onSetNewMember(hero);
                    setActive(false);
                  }}
                >
                 {active !== false? 'Add hero' : 'Done!'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;