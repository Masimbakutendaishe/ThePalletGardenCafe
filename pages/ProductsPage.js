import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../comps/Add";
import AddButton from "../comps/AddButton";
import PizzaList from "../comps/PizzaList";

export default function ProductsPage({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <Head>
        <title>Pizza Products</title>
        <meta name="description" content="Browse our delicious pizzas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {admin && <AddButton setClose={setClose} />}
      
      <PizzaList pizzaList={pizzaList} />
      
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
