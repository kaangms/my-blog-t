import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { TagRow } from "./index";

function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize, posts]);

  return (
    <section className="grid-pagination-container">
      <section className="post-grid-container">
      {paginatedPosts.map((post, index) => (
        <div>
          <figure>
            <Link to={post.link}>
              <img
                src={require(`../../assets/images/${post.image}`)}
                alt={post.image}
              ></img>
            </Link>
          </figure>
          <TagRow tags={post.categories} />
          <h2>{post.title}</h2>
          <p className="author-text" >
            <span>
                By:
              <Link to={`/authors/${post.author}`}>{post.author}</Link>
            </span>
            <span>
                -{post.date}
            </span>
            <p className="description-text">
                {post.description}
            </p>
            <Link to={post.link}>Read More...</Link>
          </p>
        </div>
      ))}</section>
      <Pagination
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
}

export default PostGrid;
