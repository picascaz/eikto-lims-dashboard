import styles from "./body.module.css";
import { gauge } from "../mock/gauge";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import React from "react";

export const Body = () => {
  const gaugeRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(gaugeRef.current);
    chart.setOption(gauge);

    const resizeChart = () => {
      chart.resize();
    };
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    };
  }, []);

  return (
    <div className={styles["middle-top"]}>
      <div className={styles["info-container"]}>
        <div className={styles["flex-column"]}>
          <span className={styles["info-title"]}>总设备数</span>
          <span className={styles["info-number"]}>
            2573
            <span className={styles["info-unit"]}>台</span>
          </span>
        </div>
        <div className={styles["flex-column-2"]}>
          <span className={styles["info-title"]}>正常运行数量</span>
          <span className={styles["info-number"]}>
            2573
            <span className={styles["info-unit"]}>台</span>
          </span>
        </div>
        <div className={styles["flex-column"]}>
          <span className={styles["info-title"]}>总运行时长</span>
          <span className={styles["info-number"]}>
            3200
            <span className={styles["info-unit"]}>h</span>
          </span>
        </div>
      </div>
      <div className={styles["echarts-content"]}>
        <div className={styles["echarts"]} ref={gaugeRef} id="gaugeChart" />
      </div>
    </div>
  );
};
