import React, { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../eharts/box1.module.css";

interface BoxModalProps {
  open: boolean;
  onClose: () => void;
  item: { [key: string]: any };
}

export const windowWidth = window.screen.width;
export const windowHeight = window.screen.height;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: { zIndex: 1000 },
};

export const BoxModal: FC<BoxModalProps> = ({
  open = false,
  onClose = () => {},
  item,
}) => {
  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     onClose();
  //   }, 3000);

  //   return () => {
  //     clearTimeout(time);
  //   };
  // }, []);

  return (
    <Modal
      isOpen={open}
      style={customStyles}
      ariaHideApp={false}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <div className={styles["item-2"]}>
        <div className={styles["details"]}>
          <span className={styles["device-id"]}>设备ID: {item?.sampleID}</span>
          <span className={styles["type"]}>类型: {item?.sampleType}</span>
          <span>日期: {item?.samplingDate}</span>
        </div>

        <div className={styles["details"]}>
          <span>申请人: {item?.submitterName}</span>
        </div>
        <div className={styles["details"]}>
          <span>电话号码: {item?.submitterContact}</span>
        </div>

        <div className={styles["details"]}>
          <span>地址: {item?.mailingAddress}</span>
        </div>
        <div className={styles["details"]}>
          <span>说明: {item?.safetyInformation}</span>
        </div>
        <div className={styles["details"]}>
          <span>实验方法: {item?.experimentalMethods}</span>
        </div>
        <div className={styles["details"]}>
          <span>特殊要求: {item?.specialRequirements}</span>
        </div>
        <div className={styles["details"]}>
          <span>样式预处理: {item?.samplePretreatment}</span>
        </div>
      </div>
      <div className={styles["details"]}>
        <span>预期分析: {item?.expectedAnalysisItems}</span>
      </div>
      <div className={styles["details"]}>
        <span>数据申报要求: PDF{item?.dataReportingRequirements}</span>
      </div>
      <div className={styles["details"]}>
        <span>样品情况: {item?.sampleCondition}</span>
      </div>
      <div className={styles["details"]}>
        <span>存储条件: {item?.storageConditions}</span>
      </div>

      <div className={styles["details"]}>
        <span>实验方法: {item?.experimentalMethods}</span>
      </div>

      <div className={styles["details"]}>
        <span>描述: {item?.sampleDescription}</span>
      </div>

      <div className={styles["details"]}>
        <span>监测内容: {item?.experimentItems}</span>
        <span
          className={
            styles[
              `priority-{
                item?.priorityLevel === "高"
                  ? "high"
                  : item?.priorityLevel === "中"
                  ? "medium"
                  : "low"
              }`
            ]
          }
        >
          级别：{item?.priorityLevel}
        </span>
      </div>
    </Modal>
  );
};
