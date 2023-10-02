import PrevWeek from "../components/home/prevweek";
import Recents from "../components/home/recents";
import Welcome from "../components/home/welcome";
import Navbar from "../layout/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Welcome />
      <Recents />
      <PrevWeek />
    </>
  );
};

export default HomePage;
