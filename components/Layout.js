import React, { Component } from 'react';
import ToggleMode from './ToggleMode';

export default function Layout({ children }) {
  return (
    <>
      <div className="navbar">
        <ToggleMode />
      </div>
      {children}
    </>
  );
};