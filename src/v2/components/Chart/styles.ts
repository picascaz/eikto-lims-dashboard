import Color from "color";
import styled from "styled-components";

export enum ThemeMode {
  Light = "light",
  Dark = "dark",
}

export const StyledApexChart = styled.div<{ $thememode: ThemeMode }>`
  .apexcharts-canvas {
    /* TOOLTIP */
    .apexcharts-tooltip {
      border-radius: 10px;
      box-shadow: ${(props) =>
        props.$thememode === ThemeMode.Light
          ? `rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px`
          : `rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;`};
      backdrop-filter: blur(6px);
      .apexcharts-tooltip-title {
        font-weight: bold;
        text-align: center;
        background-color: rgba(145, 158, 171, 0.08);
      }
    }

    /* TOOLTIP X */
    .apexcharts-xaxistooltip {
      border-color: transparent;
      border-radius: 10px;
      box-shadow: ${(props) =>
        props.$thememode === ThemeMode.Light
          ? `rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px`
          : `rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;`};
      backdrop-filter: blur(6px);
      &::before {
        border-bottom-color: rgba(145, 158, 171, 0.24);
      }
      &::after {
        border-bottom-color: rgba(255, 255, 255, 0.8);
      }
    }

    /* LEGEND */
    .apexcharts-legend {
      padding: 0;
      .apexcharts-legend-series {
        display: inline-flex !important;
        align-items: ecnter;
      }
      .apexcharts-legend-text {
        line-height: 18px;
        text-transform: capitalize;
      }
    }
  }
`;
