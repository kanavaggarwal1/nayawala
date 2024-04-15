import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            We value the trust you place in us and recognize the importance of
            secure transactions and information privacy. This Privacy Policy
            describes how E-COMMERCE and its affiliates collect, use, share, protect or
            otherwise process your personal information through our website. While you may be able to browse certain
            sections of the Platform without registering with us, however,
            please note we do not offer any product/service under this Platform
            outside India. Your personal information will primarily be stored
            and processed in India and may have data protection laws that are
            different from those that apply in the country in which you are
            located. By visiting this Platform, providing your information or
            availing any product/service offered on the Platform, you expressly
            agree to be bound by the terms and conditions of this Privacy
            Policy, the Terms of Use and the applicable service/product terms
            and conditions, and agree to be governed by the laws of India
            including but not limited to the laws applicable to data protection
            and privacy. If you do not agree please do not use or access our
            Platform.
          </p>
          <p>
            We collect your personal information relating to your identity,
            demographics and when you use our Platform, services or otherwise
            interact with us during the course of our relationship and related
            information provided from time to time. Some of the information that
            we may collect includes but is not limited to Information provided
            to us during sign-up/registering or using our Platform such as name,
            date of birth, address, telephone/mobile number, email ID,
            occupation and any such information shared as proof of identity or
            address.{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
