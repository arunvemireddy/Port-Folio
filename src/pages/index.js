import React from "react";
import ReactDOM from "react-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/base.css';
import '../../static/css/vendor.css';
import '../../static/css/main.css';

// Google Analytics tracking code
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-Z8RZFDYV';

// Append the script to the document's head
document.head.appendChild(gaScript);

gaScript.onload = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-Z8RZFDYV');
};

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

ReactDOM.render(<IndexPage />, document.getElementById('root'));
