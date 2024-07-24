import { useEffect, useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import { generateBatterySampleList } from "../../mock/list";
import styles from "./box1.module.css";

export const Box7 = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  let timer = useRef(null);
  const [data, setData] = useState(generateBatterySampleList(10));
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll(`.${styles["item-3"]}`);
    if (items.length === 0) return;

    const itemHeight = 1000
    const interval = 3000;
    const totalItems = items.length;

    const scrollToNextItem = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < totalItems) {
          container.scrollTo({
            left: itemHeight * nextIndex,
            behavior: "smooth",
          });
          fetchGetData();
        } else {
          loadMoreData();
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
    <motion.div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        scaleY: scrollYProgress,
        display: "flex",
        alignItems: "center",
        overflow: "scroll",
      }}
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
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "35rem",
          alignItems: "center",
          marginTop: "10rem",
        }}
      >
        {data.map((item, index) => {
          return (
            <div className={styles["item-3"]} key={index}>
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "YouSheBiaoTiHei-2",
                  color: "#F4F2F1",
                  marginTop: "3.5rem",
                  marginLeft: "3rem",
                }}
              >
                设备ID: S1111
              </span>
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "YouSheBiaoTiHei-2",
                  color: "#F4F2F1",
                  marginTop: "3rem",
                  marginLeft: "3rem",
                }}
              >
                状态:
                <span
                  style={{
                    padding: "0.5rem",
                    backgroundColor: index % 2 ? "#9b00f5" : "#C03403",
                    borderRadius: "1rem",
                    marginLeft: "1rem",
                  }}
                >
                  {index % 2 ? "正常" : "故障"}
                </span>
                {index % 2 ? (
                  <span
                    style={{
                      padding: "0.5rem",
                      backgroundColor: "#c89a36",
                      borderRadius: "1rem",
                      marginLeft: "1rem",
                    }}
                  >
                    空闲可用
                  </span>
                ) : null}
              </span>
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "YouSheBiaoTiHei-2",
                  color: "#F4F2F1",
                  marginTop: "2rem",
                  marginLeft: "3rem",
                }}
              >
                运行时长: 1090h
              </span>
              <span
                style={{
                  fontSize: "4rem",
                  fontFamily: "YouSheBiaoTiHei-2",
                  color: "#F4F2F1",
                  marginTop: "2rem",
                  marginLeft: "3rem",
                }}
              >
                日期: {moment().format("YYYY年MM月DD日 HH时mm分")}
              </span>
            </div>
          );
        })}
      </InfiniteScroll>
    </motion.div>
  );
};
