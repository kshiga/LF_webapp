import React from 'react';

function DefaultLayout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel="stylesheet" type="text/css" href="/stylesheets/normalize.css"/>
        <link rel="stylesheet" type="text/css" href="/stylesheets/skeleton.css"/>
        <link rel="stylesheet" type="text/css" href="/stylesheets/style.css"/>
      </head>
      <body>{props.children}</body>
    </html>
  );
}

module.exports = DefaultLayout;
