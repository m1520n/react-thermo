import React from 'react';
import { relative } from 'path';

const getMercuryColor = (t, zones, colors) => {
  const [lowColor, mediumColor, hightColor] = colors;
  const [low, high] = zones;
  if (t < low) return lowColor;
  if (t >= low && t < high) return mediumColor;
  if (t >= high) return hightColor;
};

const styles = {
  thermometerWrapper: {
    position: 'relative',
    width: 40,
    height: 130,
    margin: 5,
    textAlign: 'center',
  },
  thermometerTop: {
    position: 'absolute',
    width: 20,
    height: 100,
    top: 0,
    left: 0,
    right: 0,
    borderRadius: '10px 10px 0 0',
    margin: '0 auto',
  },
  mercuryPipe: {
    position: 'absolute',
    width: 10,
    height: 100,
    left: 0,
    right: 0,
    top: 5,
    borderRadius: 10,
    margin: '0 auto',
  },
  thermometerBottom: {
    position: 'absolute',
    width: 40,
    height: 40,
    left: 0,
    right: 0,
    top: 90,
    borderRadius: 20,
    margin: '0 auto',
  },
  mercuryTop: {
    position: 'absolute',
    width: 10,
    height: 90,
    left: 0,
    right: 0,
    bottom: 30,
    borderRadius: 5,
    margin: '0 auto',
    transition: 'height 0.2s linear',
  },
  mercuryBottom: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 0,
    right: 0,
    top: 95,
    borderRadius: 15,
    margin: '0 auto',
  },
  mercuryHighlight: {
    position: 'absolute',
    width: 5,
    height: 5,
    left: 15,
    right: 0,
    top: 102.5,
    borderRadius: 2.5,
    margin: '0 auto',
  }
};

const Thermometer = ({
  temperature,
  min = -50,
  max = 50,
  zones = [0, 25],
  glassColor = '#bdc3c7',
  mercuryPipeColor = '#ecf0f1',
  lowTemperatureColor = '#3498db',
  mediumTemperatureColor = '#e67e22',
  highTemperatureColor = '#c0392b',
  highlightColor = '#fff',
}) => {
  const range = Math.abs(min) + Math.abs(max);
  const middle = range / 2;
  const step = Math.ceil(95 / range);
  const mercuryColor = { backgroundColor: getMercuryColor(temperature, zones, [lowTemperatureColor, mediumTemperatureColor, highTemperatureColor]) };
  const height = Math.floor(middle + Math.floor(temperature) * step);
  const mercuryHeight = { height: height > 95 ? 95 : height };

  return (
    <div style={styles.thermometerWrapper}>
      <div style={{ ...styles.thermometerTop, backgroundColor: glassColor }}/>
      <div style={{ ...styles.thermometerBottom, backgroundColor: glassColor }}/>
      <div style={{ ...styles.mercuryPipe, backgroundColor: mercuryPipeColor }}/>
      <div style={{ ...styles.mercuryTop, ...mercuryHeight, ...mercuryColor }} />
      <div style={{ ...styles.mercuryBottom, ...mercuryColor }} />
      <div style={{ ...styles.mercuryHighlight, backgroundColor: highlightColor }} />
    </div>
  );
};

export default Thermometer;