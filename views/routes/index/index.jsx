import React from 'react';
import DefaultLayout from '../../layouts/default-layout';

function IndexView(props) {
  return (
    <DefaultLayout title={props.title}>
      <div>Hello {props.name}</div>
    </DefaultLayout>
  );
}

module.exports = IndexView;
