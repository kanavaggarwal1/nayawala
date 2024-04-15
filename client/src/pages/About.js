import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h1>About</h1>
            <h3>Introduction</h3>
            <p>
              E-COMMERCE is a one stop shop for all your fashion and lifestyle
              needs. Being India's largest e-commerce store for fashion and
              lifestyle products, E-COMMERCE aims at providing a hassle free and
              enjoyable shopping experience to shoppers across the country with
              the widest range of brands and products on its portal. The brand
              is making a conscious effort to bring the power of fashion to
              shoppers with an array of the latest and trendiest products
              available in the country.
            </p>
            <h3>Recognitions</h3>
            <p>
              Awarded 'Fashion eRetailer of the Year 2013' by Franchise India -
              Indian eRetail Awards
            </p>
            <p>
              Awarded 'Best E-commerce Website for 2012' by IAMAI - India
              Digital Awards
            </p>
            <p>
              Awarded 'Images Most Admired Retailer of the Year: Non-Store
              Retail' for 2012 by Images Group
            </p>
            <p>
              Awarded 'Best E-commerce Partner of the year 2011-12' by Puma
              India
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
