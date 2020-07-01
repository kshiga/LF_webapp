import React from 'react';
import DefaultLayout from '../../layouts/default-layout';
import ValidatedForm from '../../components/validated-form';
import Input from '../../components/input';
import { validateUsername, validateEmail } from './index-helper'


function IndexView(props) {
  return (
    <DefaultLayout title={props.title}>
      <div className="row">
        <strong>User Sign Up</strong>
        <ValidatedForm>
          <Input name="username" validate={validateUsername} type="text" label="Username" valid={false}/>
          <Input name="email" validate={validateEmail} type="email" label="Email Address" valid={false}/>
        </ValidatedForm>
      </div>
    </DefaultLayout>
  );
}

module.exports = IndexView;
