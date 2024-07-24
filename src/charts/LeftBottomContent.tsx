import { useEffect, useRef, useState } from "react";
import styles from "./bottom.module.css";
import { bar } from "../mock/bar";
import * as echarts from "echarts";
import React from "react";

export const LeftBottomContent = () => {
  const ref = useRef(null);
  const [defaultMonth, setDefaultMonth] = useState(1);

  useEffect(() => {
    const chart = echarts.init(ref.current);
    chart.setOption(bar);

    const resizeChart = () => {
      chart.resize();
    };
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    };
  }, []);

  const onSetMonth = (value: number) => {
    setDefaultMonth(value);
  };

  return (
    <div className={styles["middle-bottom-1"]}>
      <div className={styles["title"]}>
        <div className={styles["title-box-1"]} />
        <div className={styles["title-box-2"]} />
        <div className={styles["title-box-3"]} />
        <span className={styles["title-text"]}>趋势与完成率</span>
      </div>
      <div className={styles["container"]}>
        <div onClick={() => onSetMonth(1)} className={styles["row-center"]}>
          <div className={styles["outer-circle"]}>
            {defaultMonth === 1 && <div className={styles["inner-circle"]} />}
          </div>
          <span className={styles["text"]}>1月</span>
        </div>
        <div onClick={() => onSetMonth(2)} className={styles["row-center"]}>
          <div
            className={`${styles["outer-circle"]} ${styles["outer-circle-margin"]}`}
          >
            {defaultMonth === 2 && <div className={styles["inner-circle"]} />}
          </div>
          <span className={`${styles["text"]} ${styles["text-margin"]}`}>
            2月
          </span>
        </div>
        <div onClick={() => onSetMonth(3)} className={styles["row-center"]}>
          <div className={styles["outer-circle"]}>
            {defaultMonth === 3 && <div className={styles["inner-circle"]} />}
          </div>
          <span className={styles["text"]}>3月</span>
        </div>
      </div>
      <div className={styles["eCharts"]} ref={ref} />
    </div>
  );
};
