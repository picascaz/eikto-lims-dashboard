import * as echarts from "echarts";

const fontSize = (px) => {
  let clientWidth = window.innerWidth || document.body.clientWidth;
  if (!clientWidth) {
    return 0;
  }
  let fontSize = clientWidth / 1920;
  return px * fontSize;
};

export const bar = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["样品委托数量", "实验报告完成率"],
    left: fontSize(120),
    textStyle: {
      color: "#6d97ad", // 设置文字颜色
      fontSize: fontSize(12), // 设置文字大小
    },
    itemGap: fontSize(20), // 设置每个图例项之间的间距
    itemWidth: fontSize(10), // 设置图例标记的宽度
    itemHeight: fontSize(8),
  },
  xAxis: {
    type: "category",
    data: [
      "1号",
      "2号",
      "3号",
      "4号",
      "5号",
      "6号",
      "7号",
      "8号",
      "9号",
      "10号",
      "11号",
      "12号",
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "#6d97ad",
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        type: "dashed",
        color: "#6d97ad",
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: "#80abbd",
        fontSize: fontSize(12),
      },
    },
  },
  grid: {
    left: fontSize(10),
    right: fontSize(10),
    bottom: fontSize(10),
    containLabel: true,
  },
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 2500,
      position: "left",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#6d97ad",
        },
      },
      splitLine: {
        show: false,
        textStyle: {
          fontSize: fontSize(12),
        },
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#6d97ad",
          fontSize: fontSize(12),
        },
      },
    },
    {
      type: "value",
      min: 0,
      max: 100,
      position: "right",
      axisLine: {
        lineStyle: {
          color: "#6d97ad",
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
          color: "#012f6c",
        },
      },
      axisLabel: {
        show: false,
        textStyle: {
          color: "#6d97ad",
          fontSize: fontSize(12),
        },
      },
    },
  ],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    textStyle: {
      color: "#fff",
      fontSize: fontSize(12),
    },
    backgroundColor: "rgba(50, 50, 50, 0.7)", // 确保有背景色
    borderColor: "#333",
    borderWidth: 1,
    padding: 10,
  },
  series: [
    {
      name: "样品委托数量",
      type: "bar",
      showBackground: false,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#2450fd" },
          { offset: 0.5, color: "#2d6dfb" },
          { offset: 1, color: "#3a95f4" },
        ]),
      },
      label: {
        show: true,
        position: "top",
        fontSize: fontSize(12),
        color: "#F4F2F1cc",
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2450fd" },
            { offset: 0.7, color: "#2d6dfb" },
            { offset: 1, color: "#3a95f4" },
          ]),
        },
      },
      data: [640, 820, 1120, 260, 570, 1300, 239, 182, 150, 2405, 1375, 1020],
      smooth: true,
      symbol: "none",
    },
    {
      name: "实验报告完成率",
      type: "line",
      yAxisIndex: 1,
      data: [75, 80, 65, 85, 90, 78, 82, 70, 68, 88, 76, 85],
      itemStyle: {
        color: "#6cd8fa",
      },
      lineStyle: {
        width: fontSize(2),
        type: "dashed",
        color: "#6d97ad",
      },
      smooth: true,
      label: {
        show: true,
        position: "top",
        fontSize: fontSize(12),
        color: "#6d97ad",
      },
      smooth: true,
      symbol: "none",
    },
  ],
};

export const asset = {
  legend: {
    data: ["耗材", "试剂使用", "使用百分比"],
    itemGap: fontSize(20),
    itemWidth: fontSize(10),
    itemHeight: fontSize(10),
    textStyle: {
      color: "#ccc",
      fontSize: fontSize(12),
    },
  },
  grid: {
    left: 0,
    top: fontSize(30),
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  xAxis: [
    {
      show: false,
      type: "value",
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
  ],
  yAxis: [
    {
      show: false,
      type: "category",
      axisTick: {
        show: false,
      },
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
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
  ],
  series: [
    {
      name: "耗材",
      type: "bar",
      label: {
        show: false,
        position: "inside",
        textStyle: {
          fontSize: fontSize(12), // 调整这里的数字来改变字体大小
        },
      },
      emphasis: {
        focus: "series",
        label: {
          show: false,
          textStyle: {
            fontSize: fontSize(12), // 调整这里的数字来改变字体大小
          },
        },
      },
      data: [200, 170, 240, 244, 200, 220, 210],
    },
    {
      name: "使用百分比",
      type: "bar",
      stack: "Total",
      label: {
        show: false,
        textStyle: {
          fontSize: fontSize(10), // 调整这里的数字来改变字体大小
        },
      },
      emphasis: {
        focus: "series",
        label: {
          show: false,
          textStyle: {
            fontSize: fontSize(10), // 调整这里的数字来改变字体大小
          },
        },
      },
      data: [320, 302, 341, 374, 390, 450, 420],
    },
    {
      name: "试剂使用",
      type: "bar",
      stack: "Total",
      label: {
        show: false,
        position: "left",
        textStyle: {
          fontSize: fontSize(10), // 调整这里的数字来改变字体大小
        },
      },
      emphasis: {
        focus: "series",
        label: {
          show: false,
          textStyle: {
            fontSize: fontSize(10), // 调整这里的数字来改变字体大小
          },
        },
      },
      data: [-120, -132, -101, -134, -190, -230, -210],
    },
  ],
};
