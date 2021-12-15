import React, { Component } from "react";
import BlogsListTable from "./BlogsListTable";
import Head from 'next/head';

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
        <title>Blog List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <BlogsListTable />
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/blogs");
  // const blogs = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
