import { pie1, pie2, pie3 } from "../mock/pie";
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import React from "react";
import styles from "./bottom.module.css";

export const RightBottomContent = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref1.current);
    chart.setOption(pie1);

    const resizeChart = () => {
      chart.resize();
    };
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    const chart = echarts.init(ref2.current);
    chart.setOption(pie2);

    const resizeChart = () => {
      chart.resize();
    };
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    const chart = echarts.init(ref3.current);
    chart.setOption(pie3);

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
    <div className={styles["middle-bottom-2"]}>
      <div className={styles["middle-bottom-2-row"]}>
        <div className={styles["title"]}>
          <div className={styles["title-box-1"]} />
          <div className={styles["title-box-2"]} />
          <div className={styles["title-box-3"]} />
          <span className={styles["title-text"]}>样品合格率及资质</span>
        </div>
        <div className={styles["column-container"]}>
          <span className={styles["absolute-text"]}>检测样品合格率</span>
          <div className={styles["eCharts-1"]} ref={ref3} />
        </div>
        <div className={styles["column-container"]}>
          <span className={styles["absolute-text"]}>未关闭缺陷分布</span>
          <div className={styles["eCharts-2"]} ref={ref2} />
        </div>
        <div className={styles["column-container"]}>
          <span className={styles["absolute-text"]}>实验室人员资质</span>
          <div className={styles["eCharts-3"]} ref={ref1} />
        </div>
      </div>
    </div>
  );
};
