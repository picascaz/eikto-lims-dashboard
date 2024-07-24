import { ApexOptions } from "apexcharts";
import { mergeDeepRight } from "ramda";

export default function useChart(options: ApexOptions) {
  const LABEL_TOTAL = {
    show: true,
    label: "Total",
  };

  const LABEL_VALUE = {
    offsetY: 8,
  };

  const baseOptions = {
    // Colors
    colors: [],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels
    dataLabels: {
      enabled: false,
    },

    // Stroke
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
    },

    // Tooltip
    tooltip: {
      theme: false,
      x: {
        show: true,
      },
    },

    // Legend
    legend: {
      show: true,
      fontSize: 13,
      position: "top",
      horizontalAlign: "right",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: {
        horizontal: 8,
      },
      labels: {},
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        borderRadius: 4,
        columnWidth: "28%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },

      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },

      // Radialbar
      radialBar: {
        track: {
          strokeWidth: "100%",
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },

      // Radar
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
        },
      },

      // polarArea
      polarArea: {
        rings: {},
        spokes: {},
      },
    },

    // Responsive
    responsive: [
      {
        // sm
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        // md
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };

  return mergeDeepRight(baseOptions, options) as ApexOptions;
}
