import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <h2 className="home-title">BEST USED CARS IN CHENNAI</h2>
          <h1 className="home1-title">Luxury Cars At Best Price</h1>
          <p className="data">For All Your Luxury & Exotic Automotive Needs</p>
        </div>
        <div className="home-more-button">
          <Button
            className="more-button"
            onClick={() => history.push("/cars_your_root")}
          >
            See More
          </Button>
          <Button
            className="more-button"
            onClick={() => history.push("/Sell_a_car")}
          >
            Sell A Car
          </Button>
        </div>
      </section>
      <section className="home-bike-section">
        <div className="home-container">
          <h2 className="home-title">BEST USED AND NEW BIKES IN CHENNAI</h2>
          <h1 className="home2-title">Luxury & Used Bikes At Best Price</h1>
          <p className="data">For All Your Luxury & Exotic Automotive Needs</p>
        </div>
        <div className="home-more-button">
          <Button
            className="more-button"
            onClick={() => history.push("/bikes_your_root")}
          >
            See More
          </Button>
          <Button
            className="more-button"
            onClick={() => history.push("/Sell_a_bike")}
          >
            Sell A Bike
          </Button>
        </div>
      </section>
      <section className="about-section">
        <p className="about-company">ABOUT OUR COMPANY</p>
        <h3 className="data ">
          For All Your Luxury Cars,Bikes & Automotive Needs.
        </h3>
        <p>
          A Luxury automotive company that provides high-end cars & services for
          resale. YourRoot is your premier source for all things automotive.
          Luxury, performance, and pre-owned vehicles with the best prices in
          Chennai.
        </p>
        <ul>
          <li>World Class Collections</li>
          <li>Solid Trusted Reputation</li>
          <li>Experienced & Market Knowledge</li>
          <li>Strong Customer Service</li>
        </ul>
      </section>
    </div>
  );
};
