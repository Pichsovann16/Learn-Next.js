import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "E-Commerce App - About US",
  description: "We are passionate about delivering the best products to our customers.",
  keywords: ["e-commerce", "about us", "company information"]
}

export default function page() {
  return <div className="h-screen grid place-content-center text-6xl">About Us</div>;
}
