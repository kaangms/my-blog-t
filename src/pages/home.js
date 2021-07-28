import React from "react";
import { MasonryPost, PostMasonry,PostGrid } from "../components/common/index";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};
const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  1: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
  4: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};
const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
    post.author="Kaan Coder"
    post.description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "
  });
};

const recentPosts=[...trending,...featured, ...featured]

mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

function Home() {
  return (
    <main className="home">
      <section className="container home">
        <div className="row">
          {" "}
          <h1>Futured Posts</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <section className="container home">
        <div className="row">
          
          <h1>Recent Posts</h1>
          
          <PostGrid  posts={recentPosts}/>
          <PostMasonry posts={trending} columns={3} />
        </div>
      </section>
    </main>
  );
}

export default Home;
