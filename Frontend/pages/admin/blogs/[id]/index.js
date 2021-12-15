import React, { Component } from "react";
import BlogsForm from "./BlogsView";
import actions from "redux/actions/blogs/blogsFormActions";
import { connect } from "react-redux";
import {withRouter} from "next/router";
import Head from 'next/head';

class Index extends Component {
  state = {
    dispatched: false,
  };

  componentDidMount() {
    const { dispatch, router } = this.props;
    if (this.isEditing()) {
      dispatch(actions.doFind(router.query.id));
    } else {
      if (this.isProfile()) {
        const currentUser = typeof window !== 'undefined' && JSON.parse(localStorage.getItem("user"));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      } else {
        dispatch(actions.doNew());
      }
    }
    this.setState({ dispatched: true });
  }


  isEditing = () => {
    const { router } = this.props;
    return !!router.query.id;
  };

  isProfile = () => {
    const { router } = this.props;
    return router.pathname === "/app/profile";
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Single Blog</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {this.state.dispatched && (
          <BlogsForm
            saveLoading={this.props.saveLoading}
            findLoading={this.props.findLoading}
            currentUser={this.props.currentUser}
            record={
              this.isEditing() || this.isProfile() ? this.props.record : {}
            }
            isEditing={this.isEditing()}
            isProfile={this.isProfile()}
            onSubmit={null}
            onCancel={() => this.props.router.push("/admin/blogs")}
          />
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(store) {
  return {
    findLoading: store.blogs.form.findLoading,
    saveLoading: store.blogs.form.saveLoading,
    record: store.blogs.form.record,
    currentUser: store.auth.currentUser,
  };
}

export async function getServerSideProps(context) {
  // const res = await axios.get("/blogs");
  // const blogs = res.data.rows;

  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default connect(mapStateToProps)(withRouter(Index));
