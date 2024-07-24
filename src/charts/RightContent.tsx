import React, { Fragment, useEffect, useRef, useState } from "react";
import styles from "./body.module.css";
import { cnasLabRequirements, generateRandomHistoryList } from "../mock/list";
import moment from "moment";
import { Tooltip } from "react-tooltip";
import { useScroll, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";

const fontSize = (px: number) => {
  let clientWidth = window.innerWidth || document.body.clientWidth;
  if (!clientWidth) {
    return 0;
  }
  let fontSize = clientWidth / 1920;
  return px * fontSize;
};

export const RightContent = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const [data, setData] = useState(generateRandomHistoryList());
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const timer = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(`.${styles["item-container"]}`);
    if (items.length === 0) return;

    const itemHeight = items[0].offsetHeight;
    const interval = 10000;
    const totalItems = items.length;

    const scrollToNextItem = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < totalItems) {
          container.scrollTo({
            top: itemHeight * nextIndex,
            behavior: "smooth",
          });
          fetchGetData();
        } else {
          // container.scrollTo({
          //   top: 0,
          //   behavior: "smooth",
          // });
          // loadMoreData();
        }
        return nextIndex % totalItems;
      });
    };

    timer.current = setInterval(scrollToNextItem, interval);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [data]);

  const fetchGetData = () => {
    const list = generateRandomHistoryList(10);
    setData((val) => [...val, ...list]);
    setPage(page + 1);
    setHasNextPage(true);
  };

  const loadMoreData = () => {
    if (hasNextPage) {
      fetchGetData();
    }
  };
  return (
    <Fragment>
      <div className={styles["right-top-1"]}>
        <div className={styles["title"]}>
          <div className={styles["title-box-1"]} />
          <div className={styles["title-box-2"]} />
          <div className={styles["title-box-3"]} />
          <span className={styles["title-text"]}>
            {moment().format("YYYY.MM.DD")} 预约清单
          </span>
        </div>
        <div className={styles["history-container"]}>
          <div className={styles["header-row"]}>
            <span className={styles["header-cell"]}>今日预约</span>
            <span className={styles["header-cell"]}>今日完成</span>
            <span className={styles["header-cell"]}>历史预约</span>
            <span className={styles["header-cell"]}>历史完成</span>
            <span className={styles["header-cell"]}>上升</span>
          </div>
          <motion.div
            className={styles["history-container-2"]}
            ref={containerRef}
            style={{ scaleX: scrollYProgress }}
            id="scrollableDiv2"
          >
            <InfiniteScroll
              dataLength={data.length}
              next={loadMoreData}
              hasMore={hasNextPage}
              scrollableTarget="scrollableDiv2"
              loader={<></>}
              scrollThreshold={0.5}
              style={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                display: data.length > 0 ? "flex" : "none",
              }}
            >
              {data.map((item, index) => {
                const previousToDayTotal = item.dayTotal + item.toDayTotal;
                const percent = (
                  (item.toDayTotal / previousToDayTotal) *
                  100
                ).toFixed(2);

                return (
                  <div key={index} className={styles["item-container"]}>
                    {index === 0 && <div className={styles["divider-2"]} />}
                    <div className={styles["item-row"]}>
                      <span className={styles["item-cell"]}>{item.day}</span>
                      <span className={styles["item-cell"]}>
                        {item.dayTotal}
                      </span>
                      <span className={styles["item-cell"]}>{item.toDay}</span>
                      <span className={styles["item-cell"]}>
                        {item.toDayTotal}
                      </span>
                      <span
                        className={styles["item-cell"]}
                        style={{
                          color: Number(percent) < 0 ? "#C03403" : "#00FF00",
                        }}
                      >
                        {`${Number(percent) < 0 ? "" : "+"}${Number(
                          percent
                        ).toFixed()}%`}
                      </span>
                    </div>
                    <div className={styles["divider-2"]} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </motion.div>
        </div>
      </div>
      <div className={styles["right-top-2"]}>
        <div className={styles["title"]}>
          <div className={styles["title-box-1"]} />
          <div className={styles["title-box-2"]} />
          <div className={styles["title-box-3"]} />
          <span className={styles["title-text"]}>实验室CNAS规范</span>
        </div>
        <div className={styles["requirements-container"]}>
          <Tooltip
            id="my-tooltip"
            style={{
              fontSize: fontSize(12),
              backgroundColor: "rgba(50, 50, 50, 0.7)",
            }}
          />
          {cnasLabRequirements.map((item, index) => (
            <div
              className={styles["requirement-item"]}
              key={index}
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.description}
            >
              <div className={styles["requirement-dot"]} />
              <span className={styles["requirement-text"]}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
