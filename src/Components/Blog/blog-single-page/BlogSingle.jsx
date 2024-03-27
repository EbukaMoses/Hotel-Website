import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeadTitle from "../../../common/HeadTitle/HeadTitle";
import EmptyFile from "../../../common/EmptyFile/EmptyFile";
import BlogData from "../BlogData";

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <HeadTitle />

      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.cover} alt="" />

                <div className="category flex_space">
                  <span>{item.date}</span>
                  <label>{item.category}</label>
                </div>

                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>
                <div className="para flex_space">
                  <p>{item.para}</p>
                  <p>{item.para}</p>
                </div>
              </div>

              <div className="side-content">
                <div className="category-list">
                  <h2>Category</h2>
                  <hr />

                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className="fa fa-play-circle"></i>
                          {item.category}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default BlogSingle;
