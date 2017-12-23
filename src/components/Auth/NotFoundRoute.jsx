import React from 'react';

const NotFoundRoute = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default NotFoundRoute
