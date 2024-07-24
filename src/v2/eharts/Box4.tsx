import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { gauge2 } from "../../mock/gauge";

export const Box4 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);
    chart.setOption(gauge2);

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
    <div
      style={{
        width: "32%",
        height: "90%",
        marginTop: "4%",
      }}
    >
      <div style={{ width: "100%", height: "100%" }} ref={ref} />
    </div>
  );
};
