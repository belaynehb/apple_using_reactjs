import Header from "./Components/Header/Header";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Alert from "./Components/Body/Alert/Alert";
import FirstSection from "./Components/Body/Section1/FirstSection";
import SecondSection from "./Components/Body/Section2/SecondSection";
import ThirdSection from "./Components/Body/Section3/ThirdSection";
import FourthSection from "./Components/Body/Section4/FourthSection";
import FifthSection from "./Components/Body/Section5/FifthSection";
import SixthSection from "./Components/Body/Section6/SixthSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default App;
