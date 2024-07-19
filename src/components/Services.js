// src/components/Services.js
import React, { useEffect, useRef, useState } from "react";

import "../static/Services.css";

import seo from "../images/seo.jpg"; // Importing the image
import content_marketing from "../images/content_marketing.jpg"; // Importing the image
import web_design from "../images/web_design.png"; // Importing the image
import ppc from "../images/ppc.png"; // Importing the image
import social_media from "../images/social_media.png"; // Importing the image

const Services = () => {
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);
  const [isVisible4, setVisible4] = useState(false);
  const [isVisible5, setVisible5] = useState(false);

  const domRef1 = useRef();
  const domRef2 = useRef();
  const domRef3 = useRef();
  const domRef4 = useRef();
  const domRef5 = useRef();

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

    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible4(true);
          observer4.unobserve(entry.target);
        }
      });
    });

    const observer5 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible5(true);
          observer5.unobserve(entry.target);
        }
      });
    });

    observer1.observe(domRef1.current);
    observer2.observe(domRef2.current);
    observer3.observe(domRef3.current);
    observer4.observe(domRef4.current);
    observer5.observe(domRef5.current);

    // Cleanup function to disconnect observers
    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
      observer5.disconnect();
    };
  }, []);

  return (
    <div className="services_div">
      <h1>Services</h1>
      <div className="services_inner_div">
        <div
          className={`services_service fade-in-section ${
            isVisible1 ? "is-visible" : ""
          }`}
          ref={domRef1}
        >
          <h2>Search Engine Optimization (SEO)</h2>
          <img src={seo} alt="SEO" />
          <p>
            Improve your website's visibility and ranking on search engines with
            our comprehensive SEO "services_service"s. We focus on on-page and
            off-page SEO techniques, including keyword optimization, content
            creation, and backlink building to drive organic traffic to your
            site.
          </p>
        </div>

        <div
          className={`services_service fade-in-section ${
            isVisible2 ? "is-visible" : ""
          }`}
          ref={domRef2}
        >
          <h2>Pay-Per-Click Advertising (PPC)</h2>
          <img src={ppc} alt="PPC" />
          <p>
            Maximize your online presence with targeted PPC campaigns. We create
            and manage effective ad campaigns on platforms like Google Ads and
            social media to drive high-quality traffic to your site and achieve
            measurable results.
          </p>
        </div>

        <div
          className={`services_service fade-in-section ${
            isVisible3 ? "is-visible" : ""
          }`}
          ref={domRef3}
        >
          <h2>Web Design and Development</h2>
          <img src={web_design} alt="Web Design and Development" />
          <p>
            Create a stunning and functional website that represents your brand.
            Our web design and development services ensure a responsive,
            user-friendly, and aesthetically pleasing website that enhances user
            experience and supports your business goals.
          </p>
        </div>

        <div
          className={`services_service fade-in-section ${
            isVisible4 ? "is-visible" : ""
          }`}
          ref={domRef4}
        >
          <h2>Content Marketing</h2>
          <img src={content_marketing} alt="Content Marketing" />
          <p>
            Engage and educate your audience with high-quality content. Our
            content marketing services include blog posts, articles,
            infographics, and videos that are designed to attract, inform, and
            convert your target audience.
          </p>
        </div>

        <div
          className={`services_service fade-in-section ${
            isVisible5 ? "is-visible" : ""
          }`}
          ref={domRef5}
        >
          <h2>Social Media Marketing</h2>
          <img src={social_media} alt="Social Media Marketing" />
          <p>
            Boost your brand's presence on social media with our tailored
            marketing strategies. We manage your social media profiles, create
            engaging content, and run targeted ad campaigns to grow your
            audience and drive engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
