import SectionTitle from "src/components/SectionTitle";
import BlogCard from "src/components/BlogCard";

import "./index.scss";

export default function Blogs() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-content">
          <SectionTitle
            title="Latest Stories"
            subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away. "
          />
          <div className="blog-list">
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
            <BlogCard
              thumbnail="https://images.unsplash.com/photo-1676444263524-b12650053e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
              author="Wahid Ari"
              date="03 March 2019"
              title="Increasing Prosperity With Positive Thinking"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
