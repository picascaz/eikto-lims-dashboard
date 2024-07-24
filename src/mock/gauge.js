import * as echarts from "echarts";

const fontSize = (px) => {
  let clientWidth = window.innerWidth || document.body.clientWidth;
  if (!clientWidth) {
    return 0;
  }
  let fontSize = clientWidth / 1920;
  return px * fontSize;
};

let category = [];
let dottedBase = +new Date();
let lineData = [];
let barData = [];
for (let i = 0; i < 20; i++) {
  let date = new Date((dottedBase += 3600 * 24 * 1000));
  category.push(
    [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
  );
  let b = Math.random() * 200;
  let d = Math.random() * 200;
  barData.push(b.toFixed());
  lineData.push((d + b).toFixed());
}

export const gauge = {
  grid: {
    left: 0,
    top: fontSize(30),
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  legend: {
    data: ["实验通过率", "样品合格率", "关键实验参数变化趋势"],
    top: 40,
    right: 0,
    itemGap: fontSize(20),
    itemWidth: fontSize(10),
    itemHeight: fontSize(10),
    textStyle: {
      color: "#ccc",
      fontSize: fontSize(12),
    },
  },
  xAxis: {
    data: category,
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        width: fontSize(1),
        color: "#ccc",
      },
    },
    axisLabel: {
      color: "#fff",
      fontSize: fontSize(8),
      margin: fontSize(15),
    },
  },
  yAxis: {
    splitLine: { show: false },
    axisLine: {
      lineStyle: {
        width: fontSize(1),
        color: "#ccc",
      },
    },
    axisLabel: {
      color: "#fff",
      fontSize: fontSize(10),
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "#fff",
      fontSize: fontSize(11),
    },
    backgroundColor: "rgba(50, 50, 50, 0.7)", // 确保有背景色
    borderColor: "#333",
    borderWidth: fontSize(1),
    formatter: function (params) {
      let content = `${params[0].axisValueLabel}<br/>`; // 添加标题
      params.forEach((item) => {
        content += `${item.seriesName}: ${item.value}%<br/>`;
      });
      return content;
    },
  },
  series: [
    {
      name: "实验通过率",
      type: "line",
      smooth: true,
      showAllSymbol: true,
      symbol: "emptyCircle",
      symbolSize: fontSize(10),
      data: lineData,
      label: {
        show: false,
        position: "top",
        fontSize: fontSize(8),
        color: "#fff",
      },
      smooth: true,
      symbol: "none",
    },
    {
      name: "样品合格率",
      type: "bar",
      barWidth: fontSize(8),
      itemStyle: {
        borderRadius: fontSize(5),
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#14c8d4" },
          { offset: 1, color: "#43eec6" },
        ]),
      },
      data: barData,
      label: {
        show: false,
        position: "top",
        fontSize: fontSize(8),
        color: "#fff",
      },
      smooth: true,
      symbol: "none",
    },
    {
      name: "关键实验参数变化趋势",
      type: "bar",
      barGap: "-100%",
      barWidth: fontSize(8),
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(20,200,212,0.5)" },
          { offset: 0.2, color: "rgba(20,200,212,0.2)" },
          { offset: 1, color: "rgba(20,200,212,0)" },
        ]),
      },

      z: fontSize(-10),
      data: lineData,
      label: {
        show: false,
        position: "top",
        fontSize: fontSize(8),
        color: "#fff",
      },
      smooth: true,
      symbol: "none",
    },
  ],
};

export const gauge2 = {
  legend: {
    bottom: fontSize(5),
    textStyle: {
      color: "#6d97ad",
      fontSize: fontSize(8),
    },
    itemGap: fontSize(20),
    itemWidth: fontSize(12),
    itemHeight: fontSize(10),
  },
  tooltip: {
    trigger: "item",
    formatter: "{d}%",
    textStyle: {
      color: "#fff",
      fontSize: fontSize(11),
    },
    backgroundColor: "rgba(50, 50, 50, 0.7)", // 确保有背景色
    borderColor: "#333",
    borderWidth: fontSize(1),
  },
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  series: [
    {
      type: "pie",
      // radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      color: ["#9b00f5", "#43f0ea", "#0582fd", "#c89a36"],
      itemStyle: {
        borderRadius: fontSize(8),
      },
      label: {
        show: true,
        position: "inside",
        formatter: "{c}%", // 数值显示格式
        color: "#fff", // 标签文字颜色
        fontSize: fontSize(15), // 字体大小
        align: "center", // 文本对齐方式
        lineHeight: fontSize(15), // 行高
        overflow: "break", // 允许文本换行
      },
      labelLine: {
        show: true, // 显示连接线
        length: fontSize(20), // 第一段长度
        lineStyle: {
          color: "#fff", // 连接线颜色
          width: fontSize(1.5), // 连接线宽度
        },
      },
      data: [
        { value: 30, name: "发生次数" },
        { value: 28, name: "进展情况" },
        { value: 26, name: "环境因素" },
      ],
    },
  ],
};
