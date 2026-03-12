"use client";

import { useState } from "react";

export function LikeButton({ label = "this page" }: { label?: string }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ marginTop: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <p>
        {likes === 0
          ? `Be the first to like ${label}!`
          : `${likes} ${likes === 1 ? "person likes" : "people like"} ${label}`}
      </p>
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        style={{
          padding: "0.5rem 1rem",
          cursor: "pointer",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Like ({likes})
      </button>
    </div>
  );
}
