'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  height: number,
}

class TabBar extends Component {
  constructor(props: Props) {
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
