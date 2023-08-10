import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import Breadcrumb from '../components/Breadcrumb';

const Home = () => {
  const crumbs = [{ label: 'Home', url: '/' }];
  return (
    <Wrapper>
       <Breadcrumb crumbs={crumbs} />
      <SEO pageTitle={"Neoterican"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
