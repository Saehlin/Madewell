import React, { Component } from "react";
import OrdersListTable from "./OrdersListTable";
import Head from 'next/head';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Orders List</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <OrdersListTable />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
