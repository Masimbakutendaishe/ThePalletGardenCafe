import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../comps/OrderDetail";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className="p-12 flex flex-wrap">
      <div className="flex-1">
        <table className="w-full border-spacing-5">
          <thead>
            <tr className="text-left text-lg">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr key={product._id} className="text-center">
                <td>
                  <div className="relative w-24 h-24">
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td className="font-semibold text-red-600 text-lg">
                  {product.title}
                </td>
                <td className="text-gray-600">
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </td>
                <td className="text-lg font-medium">${product.price}</td>
                <td className="text-lg font-medium">{product.quantity}</td>
                <td className="text-lg font-medium">
                  ${product.price * product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 bg-gray-800 text-white p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold">CART TOTAL</h2>
        <div className="flex justify-between">
          <b>Subtotal:</b>${cart.total}
        </div>
        <div className="flex justify-between">
          <b>Discount:</b>$0.00
        </div>
        <div className="flex justify-between">
          <b>Total:</b>${cart.total}
        </div>
        {open ? (
          <div className="mt-4 flex flex-col gap-4">
            <button
              className="py-2 px-4 bg-teal-500 text-white font-bold"
              onClick={() => setCash(true)}
            >
              CASH ON DELIVERY
            </button>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "ATTL8fDJKfGzXNH4VVuDy1qW4_Jm8S0sqmnUTeYtWpqxUJLnXIn90V8YIGDg-SNPaB70Hg4mko_fde4-",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="mt-4 py-2 px-4 bg-red-600 text-white font-bold"
          >
            CHECKOUT NOW!
          </button>
        )}
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default CartPage;
