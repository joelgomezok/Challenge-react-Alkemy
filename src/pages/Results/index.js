import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card";
import styles from "./results.module.scss";
import Loading from "../../components/Loading";

const Results = () => {
  let { search } = useLocation();
  const history = useHistory();
  const heroUrl = search.slice(search.indexOf("=") + 1);
  const [error, setError] = useState("");
  const [hero, setHero] = useState("");
  const api = `http://localhost:8080/search/?hero=${heroUrl}`;

  useEffect(() => {
    const fetchHeroes = async () => {
      let response = await axios.get(api);
      response.data.response === "success"
        ? setHero(response.data.results)
        : setError(response.data.error);
    };
    fetchHeroes();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.cardDeck}>
          {hero ? (
            hero.map((h, i) => {
              return <Card hero={h} key={i} />;
            })
          ) : <Loading />}
         </div>
      </div>
    </>
  );
};
export default Results;
