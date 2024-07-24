import { CSSProperties, useEffect, useRef } from "react";
import { generateFormattedNumberArray } from "../mock/list";
import { fontName } from "../assets/fontFamily";
import { Box1 } from "./eharts/Box1";
import { Box2 } from "./eharts/Box2";
import * as echarts from "echarts";
import { pie1 } from "../mock/pie";
import { Box3 } from "./eharts/Box3";
import { Box5 } from "./eharts/Box5";
import { Box4 } from "./eharts/Box4";
import { Box6 } from "./eharts/Box6";
import { Box7 } from "./eharts/Box7";
import { Box8 } from "./eharts/Box8";

export type StylesType = { [k: string]: CSSProperties };

const historyLabel = [
  "今日预约总数",
  "今日完成总数",
  "历史预约总数",
  "历史完成总数",
];

const array1 = [
  {
    key: "实验任务总数",
    value: 100,
  },
  {
    key: "待完成任务数",
    value: 280,
  },
  {
    key: "已完成任务数",
    value: 800,
  },
  {
    key: "任务完成率",
    value: 100,
  },
];

export default function App() {
  const historyValue = generateFormattedNumberArray();
  const box5Ref = useRef(null);

  useEffect(() => {
    const chart = echarts.init(box5Ref.current);
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
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);

    // 清除事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <span style={styles.title}>益佳通数字化实验室实时看板</span>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            marginLeft: "5rem",
          }}
        >
          <span
            style={{
              fontSize: "4.5rem",
              fontFamily: "YouSheBiaoTiHei-2",
              color: "#F4F2F1",
            }}
          >
            温度 39°C
          </span>
          <span
            style={{
              fontSize: "4.5rem",
              fontFamily: "YouSheBiaoTiHei-2",
              color: "#F4F2F1",
            }}
          >
            湿度 120%
          </span>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.mainContent}>
          <div style={styles.box1}>
            <Box1 />
          </div>
          <div style={styles.boxColumn1}>
            <div style={styles.box2}>
              <div style={styles.historyContent}>
                {historyValue.map((item, index) => {
                  return (
                    <div style={styles.historyBox} key={index}>
                      <span style={styles.historyLabel}>
                        {historyLabel[index]}
                      </span>
                      <span style={styles.historyValue}>
                        {item}
                        <span style={styles.historyUnit}>人</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={styles.box3}>
              <div style={styles.title1}>
                <div style={styles.titleText1} />
                <div style={styles.titleText2} />
                <div style={styles.titleText3} />
                <span style={styles.titleText4}>仪器设备运行状态</span>
              </div>
              <Box7 />
            </div>
          </div>
          <div style={styles.box4}>
            <Box2 />
          </div>
        </div>
        <div style={styles.secondaryContainer}>
          <div style={styles.box5}>
            <div style={styles.title1}>
              <div style={styles.titleText1} />
              <div style={styles.titleText2} />
              <div style={styles.titleText3} />
              <span style={styles.titleText4}>实验进度概览</span>
            </div>
            <div style={styles.wrapContainer}>
              {array1.map((item, index) => {
                return (
                  <div style={styles.wrapBox}>
                    <div style={styles.wrapIcon} />
                    <div style={styles.wrapTextBox}>
                      <span style={styles.wrapValue}>
                        {item.value}
                        {index === 3 && "%"}
                      </span>
                      <span style={styles.wrapKey}>{item.key}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={styles.echartsContent5}>
              <div style={styles.echarts} ref={box5Ref} id="gaugeChart" />
            </div>
          </div>
          <div style={styles.box6}>
            <div style={styles.title1}>
              <div style={styles.titleText1} />
              <div style={styles.titleText2} />
              <div style={styles.titleText3} />
              <span style={styles.titleText4}>质量管控</span>
            </div>
            <div style={styles.box6Content}>
              <Box3 />
              <Box4 />
              <Box5 />
            </div>
          </div>
          <div style={styles.box7}>
            <div style={styles.title1}>
              <div style={styles.titleText1} />
              <div style={styles.titleText2} />
              <div style={styles.titleText3} />
              <span style={styles.titleText4}>异常预警</span>
            </div>
            <Box8 />
          </div>
          <div style={styles.box8}>
            <div style={styles.title1}>
              <div style={styles.titleText1} />
              <div style={styles.titleText2} />
              <div style={styles.titleText3} />
              <span style={styles.titleText4}>资源利用情况</span>
            </div>
            <Box6 />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: StylesType = {
  box6Content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  box7Content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  box8: {
    display: "flex",
    width: "18.6%",
    height: "100%",
    marginLeft: "6.5rem",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  box7: {
    display: "flex",
    width: "17.2%",
    height: "100%",
    marginLeft: "6.5rem",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  box6: {
    display: "flex",
    width: "29.6%",
    height: "100%",
    marginLeft: "6.5rem",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  title1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: "3rem",
    left: "3rem",
  },
  titleText1: {
    width: "0.2vw",
    height: "1vh",
    backgroundColor: "#052c4e",
    borderRight: "2rem",
  },
  titleText2: {
    width: "0.2vw",
    height: "1.5vh",
    backgroundColor: "#064257",
    borderRight: "2rem",
    marginLeft: "0.1vw",
    marginRight: "0.1vw",
  },
  titleText3: {
    width: "0.2vw",
    height: "2vh",
    backgroundColor: "#097794",
    borderRight: "2rem",
  },
  titleText4: {
    fontSize: "0.7vw",
    fontFamily: fontName.PingFangSC,
    color: "#7495c2",
    marginLeft: "0.5vw",
  },
  echartsContent7: {
    width: "100%",
    height: "100%",
  },
  echartsContent5: {
    width: "50%",
    height: "90%",
  },
  echarts: {
    width: "100%",
    height: "100%",
  },
  wrapKey: {
    fontSize: "4rem",
    fontFamily: "YouSheBiaoTiHei-2",
    color: "#F4F2F1",
    marginTop: "1.5rem",
  },
  wrapValue: {
    fontSize: "5rem",
    fontFamily: "YouSheBiaoTiHei-2",
    color: "#1890ef",
  },
  wrapTextBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "1rem",
    marginBottom: "2rem",
    marginLeft: "1rem",
  },
  wrapIcon: {
    height: "20rem",
    width: "20rem",
    backgroundImage: `url(${require("../assets/img/box.png")})`,
    backgroundSize: "100% 100%",
  },
  wrapBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${require("../assets/img/bg3.png")})`,
    backgroundSize: "100% 100%",
    padding: "1rem",
    width: "45%",
    borderRadius: "3rem",
    overflow: "hidden",
  },
  wrapContainer: {
    width: "60%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "10rem",
  },
  box5: {
    display: "flex",
    width: "29.4%",
    height: "100%",
    marginLeft: "6.5rem",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  box4: {
    display: "flex",
    width: "25.6%",
    height: "70rem",
    marginLeft: "6.5rem",
    flexDirection: "column",
    alignItems: "center",
  },
  box3: {
    display: "flex",
    width: "100%",
    height: "73%",
    // backgroundColor: "#cccccc4a",
    position: "relative",
  },
  historyUnit: {
    fontSize: "4rem",
    fontFamily: fontName.YouSheBiaoTiHei2,
    marginLeft: "0.5rem",
  },
  historyValue: {
    fontSize: "8rem",
    fontFamily: fontName.PoppinsExtraBoldItalic,
    color: "#1890e3",
  },
  historyLabel: {
    fontSize: "5rem",
    fontFamily: fontName.YouSheBiaoTiHei2,
    color: "#F4F2F1",
    marginRight: "5rem",
  },
  historyBox: {
    display: "flex",
    flexDirection: "row",
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  historyContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "22%",
    // backgroundColor: "#f1ffcc3a",
    paddingTop: "1rem",
  },
  boxColumn1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "52.9%",
    height: "100%",
    // backgroundColor: "#cccccc5a",
    marginLeft: "6.5rem",
  },
  app: {
    width: 9999,
    height: 2500,
    backgroundImage: `url(${require("../assets/img/bg2.png")})`,
    backgroundSize: "100% 100%",
    display: "flex",
    flexDirection: "column",
  },
  box1: {
    display: "flex",
    width: "17.3%",
    height: "70rem",
    marginLeft: "6.5rem",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    height: "8%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: "10rem",
    fontFamily: "YouSheBiaoTiHei-2",
    color: "#F4F2F1",
    paddingLeft: "5%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: 1,
    paddingTop: "2rem",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "51%",
    // backgroundColor: "#cccccc4a",
  },
  secondaryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "45%",
    // backgroundColor: "#cccccc4a",
    marginTop: "3rem",
  },
};
