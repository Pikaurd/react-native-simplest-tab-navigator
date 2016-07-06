'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

class TabBar extends Component {
  static propTypes = {
    ...View.propTypes,
    height: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[ styles.container, { height: this.props.height }]}>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // height determined by Navigator
  }
});

export default TabBar;
