import { View } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions';
import React, { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function LogoutComponent(props) {

  const dispatch = useDispatch()

  useEffect(() => {
    props.navigation.navigate("Login")
    dispatch(logout())
  }, []);

  return (
    <View
    />
  );



}
export default LogoutComponent;