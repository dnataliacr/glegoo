import React from 'react';
import * as Hearts from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Hearts type="Puff" color="#00BFFF" height={550} width={80} />
  </div>
);