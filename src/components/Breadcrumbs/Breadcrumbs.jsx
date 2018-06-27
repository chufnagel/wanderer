import React, { Component } from "react";
import Breadcrumbs from "react-breadcrumbs";

const Breadcrumb = props => (
  <div>
    <Breadcrumbs routes={props.routes} params={props.params} separator=" / " />
  </div>
);

Breadcrumb.propTypes = {
  routes: PropTypes.string,
  params: PropTypes.string,
};
export default Breadcrumb;
