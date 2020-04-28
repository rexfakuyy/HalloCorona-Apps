import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { getArticleId } from "../_actions/article";

class Blog extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    const param = params.id;

    this.props.getArticleId(param);
  }

  render() {
    const { data: article, loading, error } = this.props.article;

    if (error) return <p>s</p>;
    if (loading) return <p>g</p>;

    return (
      <>
        <Navbar />
        <div className="container">
          <div>
            <h6>{article.title}</h6>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticleId: id => dispatch(getArticleId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
