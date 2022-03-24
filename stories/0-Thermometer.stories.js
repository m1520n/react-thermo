import React from 'react';

import Thermometer from '../src/index';

export default {
  title: 'Thermometer',
};

export const thermo = () => (
  <div style={{ display: 'flex' }}>
    <Thermometer
      temperature={-20}
    />
    <Thermometer
      temperature={0}
    />
    <Thermometer
      temperature={50}
    />
  </div>
);
