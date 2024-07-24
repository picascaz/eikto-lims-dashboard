import "./App.css";
import ParticlesBg from "particles-bg";
import { Header } from "./charts/Header";
import { RightContent } from "./charts/RightContent";
import { LeftContent } from "./charts/LeftContent";
import { Body } from "./charts/Body";
import { LeftBottomContent } from "./charts/LeftBottomContent";
import { RightBottomContent } from "./charts/RightBottomContent";
import { useEffect } from "react";

export default function App() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "F11") {
        event.preventDefault(); // 阻止默认的 F11 全屏行为
        toggleFullScreen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // 清除事件监听器
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <ParticlesBg type="cobweb" bg={true} color="#285bfa" />
      <Header />
      <div className="center-box-1">
        <div className="grid-container">
          <LeftContent />
          <Body />
          <RightContent />
        </div>
      </div>
      <div className="center-box-2">
        <div className="center-box-body-2">
          <LeftBottomContent />
          <RightBottomContent />
        </div>
      </div>
    </div>
  );
}
