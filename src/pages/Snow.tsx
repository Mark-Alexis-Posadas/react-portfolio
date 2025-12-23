import { useEffect } from "react";

type SnowProps = {
  isDark: boolean;
};

export default function Snow({ isDark }: SnowProps) {
  useEffect(() => {
    const snowContainer = document.getElementById("snow");
    if (!snowContainer) return;

    const createSnowflake = () => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      snowflake.style.left = Math.random() * window.innerWidth + "px";
      snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
      snowflake.style.opacity = (0.3 + Math.random()).toString();
      snowflake.style.fontSize = 10 + Math.random() * 12 + "px";

      // 🎯 color based on theme
      snowflake.style.color = isDark ? "#ffffff" : "#9ca3af"; // gray-400

      snowflake.innerText = "❄";

      snowContainer.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const interval = setInterval(createSnowflake, 150);

    return () => {
      clearInterval(interval);
      snowContainer.innerHTML = ""; // clear on theme switch
    };
  }, [isDark]);

  return <div id="snow" className="pointer-events-none fixed inset-0 z-50" />;
}
