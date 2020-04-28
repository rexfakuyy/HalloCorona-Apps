import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getArticle } from "../_actions/article";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticle();
  }

  render() {
    const { data: article, loading, error } = this.props.article;

    if (error) return <>error</>;
    if (loading) return <p>s</p>;

    return (
      <div className="container">
        <div className="row">
          {article &&
            article.length > 0 &&
            article.map((blog, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <Link to={`/article/${blog.id}`}>
                  <div className="card mb-4">
                    <img
                      className="card-img-top"
                      src="https://designrevision.com/demo/shards/extra/images/common/card-3.jpg"
                      alt="..."
                    />
                    <div className="card-body p-3">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text">{blog.description}</p>
                      <div className="d-flex">
                        {blog.tags.map((tag, i) => (
                          <div
                            key={i}
                            className="badge badge-outline-danger badge-pill mr-2"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticle: () => dispatch(getArticle())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
