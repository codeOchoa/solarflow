import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="page-wrapper">
      <div className="cart shopping">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 mx-auto">
              <div className="block bg-white p-6 shadow-lg rounded-lg">
                <div className="product-list">
                  <form method="post">
                    <table className="table-auto w-full text-left">
                      <thead>
                        <tr>
                          <th className="py-2">Nombre del artículo</th>
                          <th className="py-2">Precio del artículo</th>
                          <th className="py-2">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-4">
                            <div className="product-info flex items-center">
                              <Image
                                src="/assets/img/image01co.png"
                                width={80}
                                height={80}
                                alt="Taza cerámica 350cc diseño Chanel"
                                className="mr-4"
                              />
                              <Link href="#!">
                                <a className="text-blue-600 hover:underline">
                                  Taza cerámica 350cc diseño Chanel
                                </a>
                              </Link>
                            </div>
                          </td>
                          <td className="py-4">$15.53</td>
                          <td className="py-4">
                            <button className="text-red-600 hover:underline">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-end mt-4">
                      <Link href="/checkout">
                        <a className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                          Checkout
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}