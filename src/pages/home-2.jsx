import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";
import Breadcrumb from '../components/Breadcrumb';

const index = () => {
  const crumbs = [
    { label: 'Home', url: '/' },
    { label: 'home-2', url: '/home-2' },
  ];
  return (
    <Wrapper>
      <Breadcrumb crumbs={crumbs} />
      <SEO pageTitle={"Neoterican"} />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
