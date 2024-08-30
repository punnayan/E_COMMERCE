import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title="About Us - Ecommer App">
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="/Images/AboutUs.jpg"
            alt="About Us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <section>
            <h1>About Us</h1>
            <p>Welcome to <strong>[FAMILY MART]</strong>, where we bring you a seamless shopping experience with a wide variety of products to meet all your needs. Our journey began with a simple idea: to create a platform that offers quality products at competitive prices, with a focus on exceptional customer service.</p>
          </section>

          <section>
            <h1>Our Story</h1>
            <p>Founded in <strong>[Year]</strong>, <strong>[FAMILY MART]</strong> was born out of a passion for making shopping convenient, affordable, and enjoyable for everyone. We started with a small team of enthusiastic individuals who believed in the power of technology to transform retail. Over the years, we have grown into a trusted name in the e-commerce industry, serving thousands of satisfied customers across the globe.</p>
          </section>

          <section>
            <h1>What We Offer</h1>
            <p>At <strong>[FAMILY MART]</strong>, we pride ourselves on our diverse product range, carefully curated to cater to a variety of tastes and preferences. From the latest in fashion and electronics to home essentials and unique gifts, we have something for everyone. Our categories include:</p>
            <ul>
              <li><strong>Electronics</strong>: The newest gadgets, top-of-the-line smartphones, and innovative tech accessories.</li>
              <li><strong>Fashion</strong>: Trendy apparel, footwear, and accessories for men, women, and children.</li>
              <li><strong>Home & Living</strong>: Quality furniture, decor items, and kitchenware to make your home comfortable and stylish.</li>
              <li><strong>Beauty & Health</strong>: Premium beauty products, skincare, and health essentials.</li>
              <li><strong>Sports & Outdoors</strong>: Gear and equipment for your favorite sports and outdoor activities.</li>
            </ul>
          </section>

          <section>
            <h1>Our Commitment</h1>
            <p>We are committed to providing our customers with an exceptional shopping experience. Here’s how we ensure that:</p>
            <ul>
              <li><strong>Quality Assurance</strong>: We partner with trusted brands and suppliers to offer products that meet our high standards of quality and reliability.</li>
              <li><strong>Competitive Pricing</strong>: We strive to offer the best prices, ensuring you get the most value for your money.</li>
              <li><strong>Customer Satisfaction</strong>: Our dedicated customer service team is here to assist you with any inquiries or issues, ensuring a smooth and pleasant shopping experience.</li>
              <li><strong>Fast & Secure Shipping</strong>: We provide quick and reliable shipping options, with secure payment methods to protect your information.</li>
            </ul>
          </section>

          <section>
            <h1>Our Vision</h1>
            <p>Our vision is to become a leading e-commerce platform known for its innovative approach, customer-centric services, and a vast selection of quality products. We are constantly evolving, incorporating the latest technologies and trends to enhance your shopping experience.</p>
          </section>

          <section>
            <h1>Join Our Community</h1>
            <p>We invite you to explore our website, discover amazing products, and join our growing community of happy customers. Follow us on social media for the latest updates, special offers, and more.</p>
            <p>Thank you for choosing <strong>[FAMILY MART]</strong>. We look forward to serving you!</p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
