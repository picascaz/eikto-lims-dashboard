import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { gauge1, pie4 } from "../../mock/pie";

export const Box5 = () => {
  const ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(ref.current);
    chart.setOption(pie4);

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
