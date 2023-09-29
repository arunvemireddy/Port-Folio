import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/base.css';
import '../../static/css/vendor.css';
import '../../static/css/main.css';

// Define URL variables
const googleFontsURL = 'https://fonts.googleapis.com/css?family=Merriweather';
const siteTitle = 'portfolio';
const helloWorldText = 'Hello, World!';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <link href={googleFontsURL} rel="stylesheet" />
        <title>{siteTitle}</title>
      </Helmet>
      <div className="container">
        {/* <h1 className="text-primary">{helloWorldText}</h1> */}
        {/* Your page content */}
      </div>
    </Layout>
  );
};

export default IndexPage;
