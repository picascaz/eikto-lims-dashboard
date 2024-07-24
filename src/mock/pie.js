const fontSize = (px) => {
  let clientWidth = window.innerWidth || document.body.clientWidth;
  if (!clientWidth) {
    return 0;
  }
  let fontSize = clientWidth / 1920;
  return px * fontSize;
};
export const pie1 = {
  legend: {
    bottom: fontSize(5),
    textStyle: {
      color: "#6d97ad",
      fontSize: fontSize(12),
    },
    itemGap: fontSize(20),
    itemWidth: fontSize(12),
    itemHeight: fontSize(10),
  },
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)",
    textStyle: {
      color: "#fff",
      fontSize: fontSize(11),
    },
    backgroundColor: "rgba(50, 50, 50, 0.7)", // 确保有背景色
    borderColor: "#333",
    borderWidth: fontSize(1),
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      color: ["#9b00f5", "#43f0ea", "#0582fd", "#c89a36"],
      itemStyle: {
        borderRadius: fontSize(8),
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      labelLine: {
        show: true,
        length: fontSize(15),
        length2: fontSize(15),
      },
      label: {
        show: true,
        position: "inside",
        formatter: "{c}", // 数值显示格式
        color: "#fff", // 标签文字颜色
        fontSize: fontSize(12), // 字体大小
        align: "center", // 文本对齐方式
        lineHeight: fontSize(15), // 行高
        overflow: "break", // 允许文本换行
      },
      data: [
        { value: 100, name: "今日预约" },
        { value: 280, name: "今日完成" },
        { value: 800, name: "历史预约" },
      ],
    },
  ],
};

export const pie2 = {
  legend: {
    bottom: 0,
    textStyle: {
      color: "#6d97ad",
      fontSize: fontSize(12),
    },
    itemGap: fontSize(20),
    itemWidth: fontSize(14),
    itemHeight: fontSize(10),
  },
  series: [
    {
      type: "pie",
      color: ["#9b00f5", "#43f0ea", "#0582fd", "#c89a36"],
      itemStyle: {
        borderRadius: fontSize(8),
      },
      labelLine: {
        show: true,
        length: fontSize(15),
        length2: fontSize(15),
      },
      label: {
        show: true,
        position: "inside",
        formatter: "{c}%", // 数值显示格式
        color: "#fff", // 标签文字颜色
        fontSize: fontSize(12), // 字体大小
        align: "center", // 文本对齐方式
        lineHeight: fontSize(15), // 行高
        overflow: "break", // 允许文本换行
      },
      data: [
        { value: 60, name: "本科" },
        { value: 50, name: "硕士" },
        { value: 40, name: "博士" },
      ],
    },
  ],
};

export const pie3 = {
  legend: {
    bottom: 0,
    textStyle: {
      color: "#6d97ad",
      fontSize: fontSize(12),
    },
    itemGap: fontSize(20),
    itemWidth: fontSize(14),
    itemHeight: fontSize(10),
  },
  series: [
    {
      type: "pie",
      color: ["#9b00f5", "#43f0ea", "#0582fd", "#c89a36"],
      itemStyle: {
        borderRadius: fontSize(8),
      },
      labelLine: {
        show: true,
        length: fontSize(15),
        length2: fontSize(15),
      },
      label: {
        show: true,
        position: "inside",
        formatter: "{c}%", // 数值显示格式
        color: "#fff", // 标签文字颜色
        fontSize: fontSize(12), // 字体大小
        align: "center", // 文本对齐方式
        lineHeight: fontSize(15), // 行高
        overflow: "break", // 允许文本换行
      },
      data: [
        { value: 60, name: "今日" },
        { value: 60, name: "上周" },
        { value: 50, name: "当月" },
      ],
    },
  ],
};

export const pie4 = {
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
        { value: 30, name: "任务逾期" },
        { value: 28, name: "样品超标" },
        { value: 26, name: "设备故障" },
      ],
    },
  ],
};

export const gauge1 = {
  legend: {
    show: false,
    bottom: fontSize(5),
    data: ["预期数", "质量"],
    textStyle: {
      color: "#6d97ad",
      fontSize: fontSize(12),
    },
    itemGap: fontSize(20),
    itemWidth: fontSize(12),
    itemHeight: fontSize(10),
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}",
    textStyle: {
      color: "#fff",
      fontSize: fontSize(11),
    },
    backgroundColor: "rgba(50, 50, 50, 0.7)",
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
  radar: {
    shape: "circle",
    indicator: [
      { name: "质量", max: 65 },
      { name: "管理", max: 160 },
      { name: "技术", max: 300 },
      { name: "客户支持", max: 380 },
      { name: "开发", max: 520 },
      { name: "营销", max: 250 },
    ],
    radius: "65%",
    center: ["50%", "50%"],
    name: {
      // show: false,
      textStyle: {
        color: "#D7CEC9",
        fontSize: fontSize(11),
      },
    },
    splitLine: {
      width: fontSize(1),
      lineStyle: {
        color: [
          "rgba(24, 144, 227, 0.1)",
          "rgba(24, 144, 227, 0.2)",
          "rgba(24, 144, 227, 0.4)",
          "rgba(24, 144, 227, 0.6)",
          "rgba(24, 144, 227, 0.8)",
          "rgba(24, 144, 227, 1)",
        ].reverse(),
      },
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(24, 144, 227, 0.05)", "rgba(24, 144, 227, 0.1)"],
      },
    },
    axisLine: {
      width: fontSize(1),
      lineStyle: {},
    },
  },
  series: [
    {
      name: "质量目标完成情况",
      type: "radar",
      data: [
        {
          value: [42, 30, 200, 350, 500, 180],
          name: "预期数",
        },
        {
          value: [50, 140, 280, 260, 420, 210],
          name: "质量",
        },
      ],
      itemStyle: {
        color: "#1890e3",
      },
      areaStyle: {
        opacity: 0.2,
      },
      lineStyle: {
        width: fontSize(2),
        color: "#1890e3",
      },
      symbolSize: fontSize(2), // 设置数据点的大小
      itemStyle: {
        color: "#0582fd", // 设置数据点的颜色
        borderWidth: fontSize(1),
        borderColor: "#fff",
      },
      label: {
        show: false,
        fontSize: fontSize(12),
        color: "#333",
        formatter: (params) => `${params.value}`,
      },
    },
  ],
};
