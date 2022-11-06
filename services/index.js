import React from "react";

export const submitApps = async (obj) => {
  const result = await fetch("/api/apps", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  console.log("something happened")
  return result.json();
};