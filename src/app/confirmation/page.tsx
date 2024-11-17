"use client";

import React from "react";
import { BiCheckCircle, BiGoogle, BiWhatsapp, BiFacebook, BiInstagram, BiTwitter, BiLinkedin } from "react-icons/bi";

export default function Confirmation() {
  return (
    <main>
      {/* Confirmation Section */}
      <section className="page-wrapper success-msg py-12">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 text-center">
              <BiCheckCircle className="text-green-500 text-6xl mx-auto" />
              <h2 className="text-2xl font-semibold mt-4">Gracias por tu pago!</h2>
              <p className="mt-2">Pronto te llegará un email con el resumen de tu compra.</p>
              <a className="btn btn-main mt-6" href="../index.html">
                Seguir comprando
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coupon Section */}
      <section className="my-12">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-4/5 md:w-2/3 text-center promotion-box bg-gray-100 p-6 rounded-lg">
              <img
                className="img-coupon-m my-4 mx-auto"
                src="../assets/img/gift_promo.png"
                alt="gift"
              />
              <h3 className="text-lg font-semibold">
                Tú y tu amigo obtienen un 30% de descuento en la próxima compra con un tope de reintegro de $5.00
              </h3>
              <p className="mt-2">Tu código promocional</p>
              <h1 className="text-3xl font-bold mt-1">CDOC2024</h1>
              <hr className="my-4" />
              <p>Compartir en</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="mailto:pablo.m.ochoa@email.com" target="_blank" rel="noopener noreferrer">
                  <BiGoogle className="text-2xl text-dark hover:text-gray-600" />
                </a>
                <a href="https://walink.co/19bc0d" target="_blank" rel="noopener noreferrer">
                  <BiWhatsapp className="text-2xl text-dark hover:text-gray-600" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091698780289" target="_blank" rel="noopener noreferrer">
                  <BiFacebook className="text-2xl text-dark hover:text-gray-600" />
                </a>
                <a href="https://www.instagram.com/malec_velas/" target="_blank" rel="noopener noreferrer">
                  <BiInstagram className="text-2xl text-dark hover:text-gray-600" />
                </a>
                <a href="https://x.com/PabloDKx" target="_blank" rel="noopener noreferrer">
                  <BiTwitter className="text-2xl text-dark hover:text-gray-600" />
                </a>
                <a href="https://www.linkedin.com/in/pablo-ochoa-0b9428301/" target="_blank" rel="noopener noreferrer">
                  <BiLinkedin className="text-2xl text-dark hover:text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}