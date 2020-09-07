import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1 style={{marginTop:'100px'}}>Ooops, route not found.</h1>;
};

export default {
  component: NotFoundPage
};
