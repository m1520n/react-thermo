import React from 'react';
import { relative } from 'path';

const getMercuryColor = (t, zones, colors = ['#3498db', '#e67e22', '#c0392b']) => {
  const [lowColor, mediumColor, hightColor] = colors;
  const [low, high] = zones;
  if (t < low) return lowColor;
  if (t >= low && t < high) return mediumColor;
  if (t >= high) return hightColor;
};

const styles = {
  thermometerWrapper: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    width: 40,
    margin: 5,
  },
  thermometerTop: {
    position: 'absolute',
    height: 100,
    width: 20,
    top: 0,
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
  },
  mercuryPipe: {
    position: 'absolute',
    height: 100,
    width: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    top: 5,
  },
  thermometerBottom: {
    position: 'absolute',
    height: 40,
    width: 40,
    backgroundColor: '#bdc3c7',
    borderRadius: 20,
    top: 90,
  },
  mercuryTop: {
    position: 'absolute',
    height: 90,
    width: 10,
    backgroundColor: '#c0392b',
    borderRadius: 5,
    bottom: 40,
  },
  mercuryBottom: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: '#c0392b',
    borderRadius: 15,
    top: 95,
  },
  mercuryHighlight: {
    position: 'absolute',
    height: 5,
    width: 5,
    backgroundColor: '#fff',
    borderRadius: 2.5,
    top: 102.5,
    left: 15,
  }
};

const Thermometer = ({
  temperature = 20,
  base = 0,
  zones = [10, 24],
}) => {
  const mercuryColor = { backgroundColor: getMercuryColor(temperature, zones) };
  const mercuryHeight = { height: base + Math.floor(temperature) }

  return (
    <div style={styles.thermometerWrapper}>
      <div style={styles.thermometerTop}/>
      <div style={styles.thermometerBottom}/>
      <div style={styles.mercuryPipe}/>
      <div style={{ ...styles.mercuryTop, ...mercuryHeight, ...mercuryColor }} />
      <div style={{ ...styles.mercuryBottom, ...mercuryColor }} />
      <div style={styles.mercuryHighlight} />
    </div>
  );
};

export default Thermometer;