"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CardProductComponent } from "@/components/card/CardProduct";

const ENDPOINT = "https://fakestoreapi.com/products";
export default function Service() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="h-screen flex flex-wrap justify-center gap-2.5">
      {products.map((product: { id: number; title: string; image: string; price: number }, index) => (
        <CardProductComponent
          onClick={() => router.push(`/service/${product.id}`)}
          key={index}
          title={product?.title || "No Title"}
          image={product?.image || "https://tse2.mm.bing.net/th/id/OIP.sWCvltMZF_s3mjA5sL-RdgHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"}
          price={product?.price || 0}
        />
      ))}
    </div>
  );
}
