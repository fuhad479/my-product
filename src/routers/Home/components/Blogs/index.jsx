import { Pagination, Thumbs, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../../../components/SectionTitle";
import BlogCard from "../../../../components/BlogCard";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/grid";
import "./index.scss";

export default function Blogs() {
  const sliderBreakpoints = {
    "768": { slidesPerView: 2 },
    "992": { slidesPerView: 3 },
  };

  return (
    <section className="blogs">
      <div className="container">
        <div className="blogs-content">
          <SectionTitle>Contents Strategies</SectionTitle>
          <p className="subtitle">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <Swiper
            modules={[Pagination, Thumbs, Grid]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={sliderBreakpoints}
            loop={true}
            thumbs={true}
            grid={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Increasing Prosperity With Positive Thinking"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1674318012388-141651b08a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Motivation Is The First Step To Success"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1673940308551-65b7fe1c2226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Success Steps For Your Personal Or Business"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Increasing Prosperity With Positive Thinking"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1674318012388-141651b08a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Motivation Is The First Step To Success"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard
                thumbnail="https://images.unsplash.com/photo-1673940308551-65b7fe1c2226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                author="Wahid Ari"
                date="03 March 2023"
                title="Success Steps For Your Personal Or Business"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
