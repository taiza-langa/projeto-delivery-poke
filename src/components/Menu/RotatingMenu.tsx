"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Definição do tipo para um item do menu
interface MenuItem {
  id: number;
  name: string;
  img: string;
  desc: string;
}

export default function RotatingMenu() {
  const [cart, setCart] = useState<MenuItem[]>([]); // Estado tipado para armazenar os itens do carrinho

  const menuItems: MenuItem[] = [
    { id: 1, name: "Salmon Poke Bowl", img: "/poke1.png", desc: "R$ 45,00" },
    { id: 3, name: "Shrimp Poke Bowl", img: "/poke2.png", desc: "R$ 48,00" },
    { id: 4, name: "Tuna Poke Bowl", img: "/poke3.png", desc: "R$ 40,00" },
    { id: 2, name: "mixed poke bowl", img: "/poke4.png", desc: "R$ 50,00" },
  ];

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]); // Adiciona o item ao carrinho
  };

  return (

    <div id="menu" className="menu-container">

      <section>
        <h2>Nosso Cardápio</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id} className="slide">
              <div className="item-card">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={150}
                  height={100}
                />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button
                  onClick={() => addToCart(item)}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
