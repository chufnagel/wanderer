import React from "react";
import Breadcrumbs from "react-breadcrumbs";

const Breadcrumb = ({ routes, params }) => (
  <div>
    <Breadcrumbs routes={routes} params={params} separator=" / " />
  </div>
);

Breadcrumb.propTypes = {
  routes: PropTypes.string,
  params: PropTypes.string,
};
export default Breadcrumb;
