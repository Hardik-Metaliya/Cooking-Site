import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      user: "Emily",
      testimonial:
        "I've never been much of a cook, but thanks to We Cook, I now feel confident and excited to try new recipes! The clear instructions and helpful tips have made a huge difference. My family and friends are always impressed with the meals I make now.",
    },
    {
      user: "David",
      testimonial:
        "As a busy professional, finding time to cook healthy and delicious meals was always a challenge. Thanks to We Cook, I've discovered quick and easy recipes that fit perfectly into my busy schedule. The variety of options keeps things interesting, and I'm eating better than ever before!",
    },
    {
      user: "Sarah",
      testimonial:
        "Being a vegetarian, finding creative and tasty plant-based recipes used to be a struggle. But We Cook has been a game-changer for me. The extensive collection of vegetarian recipes has opened up a whole new world of flavors and possibilities. I'm constantly amazed by the incredible dishes I can create!",
    },
    {
      user: "Michael",
      testimonial:
        "I love experimenting in the kitchen, and We Cook is my go-to resource for unique and innovative recipes. The blog articles and cooking techniques have expanded my culinary knowledge and skills. It's like having a personal cooking coach right at my fingertips!",
    },
    {
      user: "Jessica",
      testimonial:
        "I recently started a gluten-free diet, and finding delicious gluten-free recipes was a challenge. Thankfully, I stumbled upon We Cook, and it has been a lifesaver. The gluten-free recipes are incredible, and I no longer feel like I'm missing out on tasty meals. Thank you for making my gluten-free journey enjoyable!",
    },
    {
      user: "Ryan",
      testimonial:
        "The kitchen used to intimidate me, but We Cook has made cooking fun and approachable. The step-by-step instructions, helpful videos, and cooking tips have given me the confidence to try new recipes and techniques. I can proudly say that I'm now a home cook who can whip up delicious meals!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    useTransform: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-user">By "{testimonial.user}"</p>
          </div>
        ))}
      </Slider>
      <div className="testimonial-pagination">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`pagination-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
