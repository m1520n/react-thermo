import React from 'react';

import Thermometer from '../src/index';

export default {
  title: 'Thermometer',
};

export const thermo = () => (
  <div style={{ display: 'flex' }}>
    <Thermometer
      temperature={10}
      base={0}
      zones={[20, 24]}
    />
    <Thermometer
      temperature={30}
      base={0}
      zones={[20, 40]}
    />
    <Thermometer
      temperature={60}
      base={0}
      zones={[10, 40]}
    />
  </div>
);
