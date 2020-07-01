import React from 'react';
import DefaultLayout from '../../layouts/default-layout';
import ValidatedForm from '../../components/validated-form';

function IndexView(props) {
  return (
    <DefaultLayout title={props.title}>
      <div className="row">
        <strong>User Sign Up</strong>
        <ValidatedForm>

        </ValidatedForm>
      </div>
    </DefaultLayout>
  );
}

module.exports = IndexView;
