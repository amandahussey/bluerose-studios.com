import { useEffect } from "react";
import Landing from "./Landing";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Landing />;
};

export default Home;
