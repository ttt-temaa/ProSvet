import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Про Свет — светотехнические решения для объектов";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", color: "#ffe500", fontSize: 26, letterSpacing: 4, fontWeight: 600 }}>
          ПРО СВЕТ · ЧЕБОКСАРЫ · РФ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Светотехнические решения для бизнеса и гособъектов
          </div>
          <div style={{ fontSize: 26, opacity: 0.72 }}>Проектирование · Подбор · Поставка · Монтаж</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
