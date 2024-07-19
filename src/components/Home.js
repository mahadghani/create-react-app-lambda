// src/components/Home.js
import React, { useEffect, useRef, useState } from "react";

import logo from "../images/sss.jpg"; // Importing the image
import decisions from "../images/decisions.png"; // Importing the image
import strategies from "../images/strategies.png"; // Importing the image
import results from "../images/results.jpg"; // Importing the image

import seo from "../images/seo.jpg"; // Importing the image
import content_marketing from "../images/content_marketing.jpg"; // Importing the image
import web_design from "../images/web_design.png"; // Importing the image
import ppc from "../images/ppc.png"; // Importing the image
import social_media from "../images/social_media.png"; // Importing the image

// CSS
import "../static/Home.css";

const Home = () => {
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);

  const domRef1 = useRef();
  const domRef2 = useRef();
  const domRef3 = useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible1(true);
          observer1.unobserve(entry.target);
        }
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible2(true);
          observer2.unobserve(entry.target);
        }
      });
    });

    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible3(true);
          observer3.unobserve(entry.target);
        }
      });
    });

    observer1.observe(domRef1.current);
    observer2.observe(domRef2.current);
    observer3.observe(domRef3.current);

    // Cleanup function to disconnect observers
    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <div className="home">
      <div className="sss">
        <img className="slideRight" src={logo} alt="Viral Vision" />
        <div className="home_info">
          <p>Boost Your Brand with Cutting-Edge Digital Marketing</p>
          <a href="/contact">
            <p>Get a Free Consultation</p>
          </a>
        </div>
      </div>
      <div className="gray_background">
        <section className="about_us">
          <h2 className="home_page_h2">Our Mission</h2>
          <div
            className={`inner_home_content fade-in-section ${
              isVisible1 ? "is-visible" : ""
            }`}
            ref={domRef1}
          >
            <p>
              At Viral Vision, we are dedicated to helping businesses grow with
              innovative digital marketing strategies. Our team of experts
              brings a wealth of experience in SEO, PPC, social media, and
              content marketing.
            </p>

            <p>
              Our approach is rooted in creativity, precision, and a deep
              understanding of the ever-evolving digital landscape. We partner
              with businesses of all sizes to unlock their full potential
              through personalized marketing strategies that enhance their
              online presence and foster meaningful connections with their
              target audience.
            </p>

            <p>At Viral Vision, your success is our vision.</p>
          </div>
        </section>

        <section className="approach">
          <h2 className="home_page_h2">Our Approach</h2>
          <div className="inner_home_content">
            <ul>
              <li>
                <img src={strategies} alt="" />
                <strong>Customized Strategies</strong>
                <br /> We don't believe in one-size-fits-all solutions. Each
                strategy is tailored to fit your specific needs and goals.
              </li>
              <li>
                <img src={decisions} alt="" />
                <strong>Data-Driven Decisions</strong>
                <br /> Our decisions are informed by thorough research and
                analytics, ensuring strategies are effective and results-driven.
              </li>
              <li>
                <img src={results} alt="" />
                <strong>Results-Oriented</strong>
                <br /> We focus on delivering measurable outcomes, whether it's
                increased traffic, higher engagement, or improved conversions.
              </li>
            </ul>
          </div>
        </section>
        <section className="clients_love">
          <h2 className="home_page_h2">Why Our Clients Love Us</h2>
          <div
            className={`inner_home_content fade-in-section ${
              isVisible2 ? "is-visible" : ""
            }`}
            ref={domRef2}
          >
            <ul>
              <li>
                <strong>Proven Results</strong>: Our clients see tangible
                improvements in their online performance
              </li>
              <li>
                <strong>Expert Team</strong>: Work with a team of experienced
                professionals who are passionate about digital marketing
              </li>
              <li>
                <strong>Transparent Communication</strong>: Stay informed with
                clear, honest communication and regular updates
              </li>
            </ul>
          </div>
        </section>

        <section className="services fade-in">
          <h2 className="home_page_h2">Our Solutions</h2>
          <div className="inner_home_content">
            <div className="service">
              <img src={seo} alt="SEO" />
              <h3>SEO</h3>
              <p>
                Enhance your website's visibility and rankings with our SEO
                expertise.
              </p>
            </div>
            <div className="service">
              <img src={web_design} alt="PPC" />
              <h3>Web Design</h3>
              <p>
                Drive targeted traffic and increase ROI with our PPC campaigns.
              </p>
            </div>
            <div className="service">
              <img src={ppc} alt="PPC" />
              <h3>PPC Advertising</h3>
              <p>
                Drive targeted traffic and increase ROI with our PPC campaigns.
              </p>
            </div>
            <div className="service">
              <img src={content_marketing} alt="PPC" />
              <h3>Content Marketing</h3>
              <p>
                Drive targeted traffic and increase ROI with our PPC campaigns.
              </p>
            </div>
            <div className="service">
              <img src={social_media} alt="PPC" />
              <h3>Social Media Marketing</h3>
              <p>
                Drive targeted traffic and increase ROI with our PPC campaigns.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h2 className="home_page_h2">Success Stories</h2>
          <div
            className={`inner_home_content fade-in-section ${
              isVisible3 ? "is-visible" : ""
            }`}
            ref={domRef3}
          >
            <div className="testimonial">
              <p>
                "Viral Vision transformed our online presence and helped us
                achieve our sales goals. Highly recommended!"
              </p>
              <cite>— Mohamed, Bazaar Food Market</cite>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
