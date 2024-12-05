"use client";

import React, { useState } from 'react';

export default function Checkout() {
  const [couponCode, setCouponCode] = useState('');

  return (
    <main>
      <div className="page-wrapper">
        <div className="checkout shopping">
          <div className="container mx-auto p-6">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-2/3 px-4">
                {/* Billing Details */}
                <div className="block billing-details mb-6 p-6 bg-gray-100 rounded">
                  <h4 className="text-xl font-semibold mb-4">Detalles de facturación</h4>
                  <form className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="full_name" className="block mb-1">Nombre completo</label>
                      <input type="text" className="form-control w-full px-4 py-2 border rounded" id="full_name" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_address" className="block mb-1">Dirección</label>
                      <input type="text" className="form-control w-full px-4 py-2 border rounded" id="user_address" placeholder="" />
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="form-group w-1/2 px-2">
                        <label htmlFor="user_post_code" className="block mb-1">Código postal</label>
                        <input type="text" className="form-control w-full px-4 py-2 border rounded" id="user_post_code" />
                      </div>
                      <div className="form-group w-1/2 px-2">
                        <label htmlFor="user_city" className="block mb-1">Ciudad</label>
                        <input type="text" className="form-control w-full px-4 py-2 border rounded" id="user_city" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_country" className="block mb-1">País</label>
                      <input type="text" className="form-control w-full px-4 py-2 border rounded" id="user_country" placeholder="" />
                    </div>
                  </form>
                </div>

                {/* Payment Method */}
                <div className="block p-6 bg-gray-100 rounded">
                  <h4 className="text-xl font-semibold mb-4">Método de pago</h4>
                  <p>Datos de la tarjeta de crédito (Pago seguro)</p>
                  <form className="space-y-4">
                    <div className="form-group">
                      <label htmlFor="card-number" className="block mb-1">Número de tarjeta <span className="text-red-500">*</span></label>
                      <input id="card-number" className="form-control w-full px-4 py-2 border rounded" type="tel" placeholder="•••• •••• •••• ••••" />
                    </div>
                    <div className="flex flex-wrap -mx-2">
                      <div className="form-group w-1/2 px-2">
                        <label htmlFor="card-expiry" className="block mb-1">Expiración (MM/AA) <span className="text-red-500">*</span></label>
                        <input id="card-expiry" className="form-control w-full px-4 py-2 border rounded" type="tel" placeholder="MM / AA" />
                      </div>
                      <div className="form-group w-1/2 px-2">
                        <label htmlFor="card-cvc" className="block mb-1">Código de tarjeta <span className="text-red-500">*</span></label>
                        <input id="card-cvc" className="form-control w-full px-4 py-2 border rounded" type="tel" placeholder="CVC" />
                      </div>
                    </div>
                    <button className="btn btn-main mt-4 w-full py-2 bg-blue-600 text-white rounded" type="button">
                      Realizar pedido
                    </button>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full md:w-1/3 px-4">
                <div className="product-checkout-details">
                  <div className="block p-6 bg-gray-100 rounded">
                    <h4 className="text-xl font-semibold mb-4">Resumen del pedido</h4>
                    <div className="media product-card flex items-center mb-4">
                      <a href="./art0009.html" className="flex-shrink-0 mr-4">
                        <img src="../assets/img/image01co.png" alt="Taza cerámica 350cc diseño Chanel" className="w-16 h-16" />
                      </a>
                      <div>
                        <h4 className="text-lg font-semibold"><a href="./art0009.html">Taza cerámica 350cc diseño Chanel</a></h4>
                        <p className="text-gray-600">1 x $15.53</p>
                        <span className="text-sm text-red-500 cursor-pointer">Eliminar</span>
                      </div>
                    </div>

                    {/* Summary Prices */}
                    <ul className="summary-prices space-y-2">
                      <li className="flex justify-between"><span>IVA (21%):</span><span className="price">$3.26</span></li>
                      <li className="flex justify-between"><span>País (8%):</span><span className="price">$1.24</span></li>
                      <li className="flex justify-between"><span>Ganancia (30%):</span><span className="price">$4.66</span></li>
                      <li className="flex justify-between"><span>IIBB Buenos Aires (2%):</span><span className="price">$0.31</span></li>
                      <li className="flex justify-between"><span>Cupón de descuento:</span><span className="price">-$5.00</span></li>
                      <li className="flex justify-between"><span>Subtotal:</span><span className="price">$20.00</span></li>
                      <li className="flex justify-between"><span>Envío:</span><span>Gratis</span></li>
                    </ul>

                    <div className="summary-total flex justify-between mt-4 border-t pt-2 text-lg font-semibold">
                      <span>Total</span>
                      <span>$20.00</span>
                    </div>
                    <div className="verified-icon mt-4">
                      <img src="../assets/img/verified.png" alt="Verified Icon" className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className={`modal ${couponCode ? 'fade show' : ''}`} id="coupon-modal">
          <div className="modal-dialog">
            <div className="modal-content p-6 bg-white rounded">
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCouponCode('');
                  }}
                >
                  <div className="form-group mb-4">
                    <input
                      className="form-control w-full px-4 py-2 border rounded"
                      type="text"
                      placeholder="Introduce el código de cupón"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-main w-full py-2 bg-blue-600 text-white rounded">
                    Aplicar cupón
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}