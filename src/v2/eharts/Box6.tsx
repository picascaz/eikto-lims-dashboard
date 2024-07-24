import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { asset } from "../../mock/bar";

export const Box6 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);
    chart.setOption(asset);

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
        width: "100%",
        height: "83%",
        alignSelf: "flex-end",
      }}
    >
      <div style={{ width: "100%", height: "100%" }} ref={ref} />
    </div>
  );
};
