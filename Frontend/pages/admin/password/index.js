import React, { Component } from "react";
import ChangePasswordForm from "./ChangePasswordForm";
import actions from "redux/actions/password";
import { withRouter } from 'next/router';
import { connect } from "react-redux";
import Head from 'next/head';

class Index extends Component {
  state = {
    dispatched: false,
  };

  doSubmit = (data) => {
    const { dispatch } = this.props;
    dispatch(actions.doChangePassword(data));
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Edit Password</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ChangePasswordForm
          saveLoading={this.props.saveLoading}
          findLoading={this.props.findLoading}
          onSubmit={this.doSubmit}
          onCancel={() => this.props.router.push("/app/dashboard")}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    findLoading: store.users.form.findLoading,
    saveLoading: store.users.form.saveLoading,
  };
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default connect(mapStateToProps)(withRouter(Index));
