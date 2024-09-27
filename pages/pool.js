import Website from "../Components/HomePageComponents/HomePageApp.jsx";
import { Footer } from "../Components/HomePageComponents/Footer";
//imported from the components we created
import {
  HeaderSection,
  SwapBodyContent,
} from "../Components/index";

const Pool = ({ Component, pageProps }) => {
  return (
    <div>
      <SwapBodyContent></SwapBodyContent>
    </div>
  );
};

export default Pool;