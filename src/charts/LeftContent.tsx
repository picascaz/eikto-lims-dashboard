import styles from "./body.module.css";
import { generateBatterySampleList } from "../mock/list";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import InfiniteScroll from "react-infinite-scroll-component";

export const LeftContent = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  let timer = useRef(null);
  const [data, setData] = useState(generateBatterySampleList());
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const items = container.querySelectorAll(`.${styles["item"]}`);
  //   if (items.length === 0) return;

  //   const itemHeight = items[0].offsetHeight;
  //   const interval = 3000;
  //   const totalItems = items.length;

  //   const scrollToNextItem = () => {
  //     setCurrentIndex((prevIndex) => {
  //       const nextIndex = prevIndex + 1;
  //       if (nextIndex < totalItems) {
  //         container.scrollTo({
  //           top: itemHeight * nextIndex,
  //           behavior: "smooth",
  //         });
  //         fetchGetData();
  //       } else {
  //         // container.scrollTo({
  //         //   top: 0,
  //         //   behavior: "smooth",
  //         // });
  //         // loadMoreData();
  //       }
  //       return nextIndex % totalItems;
  //     });
  //   };

  //   timer.current = setInterval(scrollToNextItem, interval);

  //   return () => {
  //     if (timer.current) {
  //       clearInterval(timer.current);
  //     }
  //   };
  // }, [data]);

  const fetchGetData = () => {
    const list = generateBatterySampleList(10);
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
    <div className={styles["left-top-1"]}>
      <div className={styles["title"]}>
        <div className={styles["title-box-1"]} />
        <div className={styles["title-box-2"]} />
        <div className={styles["title-box-3"]} />
        <span className={styles["title-text"]}>实验委托清单</span>
      </div>
      <Tooltip id="my-tooltip-data-html" style={{ zIndex: "1000" }} />
      <motion.div
        ref={containerRef}
        className={styles["container"]}
        style={{ scaleX: scrollYProgress }}
        id="scrollableDiv"
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasNextPage}
          scrollableTarget="scrollableDiv"
          loader={<></>}
          scrollThreshold={0.5}
          style={{
            display: data.length > 0 ? "flex" : "none",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor:'#ff1'
          }}
        >
          {data.map((item, index) => (
            <div
              className={styles["item"]}
              key={index}
              data-tooltip-id="my-tooltip-data-html"
              data-tooltip-html={`
            <div class="${styles["item"]}">
              <div class="${styles["item-header-2"]}">
                <span class="${styles["device-id"]}">
                  设备ID: ${item.sampleID}
                </span>
                <span class="${styles["type"]}">
                  类型: ${item.sampleType}
                </span>
                <span>日期: ${item.samplingDate}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>申请人: ${item.submitterName}</span>
                </div>
              </div>
              <div class="${styles["item-header-2"]}">
                <span>电话号码: ${item.submitterContact}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>地址: ${item.mailingAddress}</span>
                </div>
              </div>
              <div class="${styles["item-header-2"]}">
                <span>说明: ${item.safetyInformation}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>实验方法: ${item.experimentalMethods}</span>
                </div>
              </div>
              <div class="${styles["item-header-2"]}">
                <span>特殊要求: ${item.specialRequirements}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>样式预处理: ${item.samplePretreatment}</span>
                </div>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <span>预期分析: ${item.expectedAnalysisItems}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <span>
                  数据申报要求: PDF${item.dataReportingRequirements}
                </span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <span>样品情况: ${item.sampleCondition}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>存储条件: ${item.storageConditions}</span>
                </div>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <span>实验方法: ${item.experimentalMethods}</span>
              </div>
            
              <div class="${styles["item-header-2"]}">
                <div class="${styles["address-2"]}">
                  <span>描述: ${item.sampleDescription}</span>
                </div>
              </div>
            
              <div class="${styles["details"]}">
                <span>监测内容: ${item.experimentItems}</span>
                <span class="${
                  styles[
                    `priority-${
                      item.priorityLevel === "高"
                        ? "high"
                        : item.priorityLevel === "中"
                        ? "medium"
                        : "low"
                    }`
                  ]
                }">
                  级别：${item.priorityLevel}
                </span>
              </div>
            </div>
            `}
            >
              <div className={styles["item-header"]}>
                <span className={styles["device-id"]}>
                  设备ID: {item.sampleID}
                </span>
                <span className={styles["type"]}>类型: {item.sampleType}</span>
                <span>日期: {item.samplingDate}</span>
              </div>
              <div className={styles["address"]}>
                <span>地址: {item.mailingAddress}</span>
              </div>
              <div className={styles["details"]}>
                <span>监测内容: {item.experimentItems}</span>
                <span
                  className={
                    styles[
                      `priority-${
                        item.priorityLevel === "高"
                          ? "high"
                          : item.priorityLevel === "中"
                          ? "medium"
                          : "low"
                      }`
                    ]
                  }
                >
                  级别：{item.priorityLevel}
                </span>
              </div>
              <div className={styles["divider"]} />
            </div>
          ))}
        </InfiniteScroll>
      </motion.div>
    </div>
  );
};
