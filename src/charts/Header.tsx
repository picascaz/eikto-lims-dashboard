import React from "react";
import moment from "moment";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["center-box-body"]}>
        <span className={styles["header-left-text"]}>
          {moment().format("YYYY年MM月DD日 HH时mm分")}
        </span>
        <span className={styles["header-body-text"]}>
          益佳通数字化实验室实时看板
        </span>
        <span className={styles["header-right-text"]}>温度 39°C | 湿度 120%</span>
      </div>
    </div>
  );
};
