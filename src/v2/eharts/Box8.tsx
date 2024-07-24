import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useScroll, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./box7.module.css";
import { cnasLabRequirements } from "../../mock/list";
import { fontName } from "../../assets/fontFamily";

export const Box8 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        display: "flex",
        // padding: "2rem",
        marginTop: "5rem",
      }}
    >
      <Tooltip
        id="my-tooltip"
        style={{
          fontSize: "4rem",
          backgroundColor: "rgba(50, 50, 50, 0.7)",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        {cnasLabRequirements.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "3rem",
              marginTop: "2rem",
              height: "4rem",
            }}
            key={index}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={item.description}
          >
            <div
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "1rem",
                marginRight: "2rem",
                backgroundColor: "#80fefa",
              }}
            />
            <span
              style={{
                fontSize: "4rem",
                fontFamily: fontName.PoppinsExtraBoldItalic,
                color: "#80fefa",
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
