<main>
        <div class="page-wrapper">
            <div class="checkout shopping">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="block billing-details">
                                <h4 class="widget-title">Detalles de facturación</h4>
                                <form class="checkout-form">
                                    <div class="form-group">
                                        <label for="full_name">Nombre completo</label>
                                        <input type="text" class="form-control" id="full_name" placeholder="">
                                    </div>
                                    <div class="form-group">
                                        <label for="user_address">Dirección</label>
                                        <input type="text" class="form-control" id="user_address" placeholder="">
                                    </div>
                                    <div class="checkout-country-code clearfix">
                                        <div class="form-group">
                                            <label for="user_post_code">Código postal</label>
                                            <input type="text" class="form-control" id="user_post_code" name="zipcode"
                                                value="">
                                        </div>
                                        <div class="form-group">
                                            <label for="user_city">Ciudad</label>
                                            <input type="text" class="form-control" id="user_city" name="city" value="">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="user_country">País</label>
                                        <input type="text" class="form-control" id="user_country" placeholder="">
                                    </div>
                                </form>
                            </div>
                            <div class="block">
                                <h4 class="widget-title">Método de pago</h4>
                                <p>Datos de la tarjeta de crédito (Pago seguro)</p>
                                <div class="checkout-product-details">
                                    <div class="payment">
                                        <div class="card-details">
                                            <form class="checkout-form">
                                                <div class="form-group">
                                                    <label for="card-number">Número de tarjeta <span
                                                            class="required">*</span></label>
                                                    <input id="card-number" class="form-control" type="tel"
                                                        placeholder="•••• •••• •••• ••••">
                                                </div>
                                                <div class="form-group half-width padding-right">
                                                    <label for="card-expiry">Expiración (MM/AA) <span
                                                            class="required">*</span></label>
                                                    <input id="card-expiry" class="form-control" type="tel"
                                                        placeholder="MM / AA">
                                                </div>
                                                <div class="form-group half-width padding-left">
                                                    <label for="card-cvc">Código de tarjeta <span
                                                            class="required">*</span></label>
                                                    <input id="card-cvc" class="form-control" type="tel" maxlength="4"
                                                        placeholder="CVC">
                                                </div>
                                                <a href="./confirmation.html" class="btn btn-main mt-20">Realizar
                                                    pedido</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="product-checkout-details">
                                <div class="block">
                                    <h4 class="widget-title">Resumen del pedido</h4>
                                    <div class="media product-card">
                                        <a class="pull-left" href="./art0009.html">
                                            <img class="media-object" src="../assets/img/image01co.png"
                                                alt="Taza cerámica 350cc diseño Chanel" />
                                        </a>
                                        <div class="media-body">
                                            <h4 class="media-heading"><a href="./art0009.html">Taza cerámica 350cc
                                                    diseño Chanel</a></h4>
                                            <p class="price">1 x $15.53</p>
                                            <span class="remove">Eliminar</span>
                                        </div>
                                    </div>
                                    <div class="discount-code">
                                        <p>Tenés un descuento? <a data-toggle="modal" data-target="#coupon-modal"
                                                href="#!">insértelo aquí</a></p>
                                    </div>
                                    <ul class="summary-prices">
                                        <li>
                                            <span>IVA (21%):</span>
                                            <span class="price">$3.26</span>
                                        </li>
                                        <li>
                                            <span>País (8%):</span>
                                            <span class="price">$1.24</span>
                                        </li>
                                        <li>
                                            <span>Ganancia (30%):</span>
                                            <span class="price">$4.66</span>
                                        </li>
                                        <li>
                                            <span>IIBB Buenos Aires (2%):</span>
                                            <span class="price">$0.31</span>
                                        </li>
                                        <li>
                                            <span>Cupón de descuento:</span>
                                            <span class="price">-$5.00</span>
                                        </li>
                                        <li>
                                            <span>Subtotal:</span>
                                            <span class="price">$20.00</span>
                                        </li>
                                        <li>
                                            <span>Envío:</span>
                                            <span>Free</span>
                                        </li>
                                    </ul>
                                    <div class="summary-total">
                                        <span>Total</span>
                                        <span>$20.00</span>
                                    </div>
                                    <div class="verified-icon">
                                        <img src="../assets/img/verified.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="coupon-modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Introduce el código de cupón">
                            </div>
                            <button type="submit" class="btn btn-main">Aplicar cupón</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>