import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./InvestingBox.module.css";

const Root = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.investing}>
        <h2 className={styles.investingWithUs}>
          investing with us takes minutes
        </h2>
        <div className={styles.navigatingYourFinancial}>
          Navigating Your Financial Fzuture. Empowering Wealth, One Step at a
          Time.
        </div>
      </div>
      <Button
        className={styles.rootChild}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "20",
          background: "#0892d0",
          borderRadius: "4px",
          "&:hover": { background: "#0892d0" },
          width: 151,
          height: 36,
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
