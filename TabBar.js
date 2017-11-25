'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native'
import Dimensions from 'Dimensions'

type Props = {
  height: number,
}

class TabBar extends Component {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={[ styles.container, { height: this.props.height }]}>
        { this.props.children }
      </View>
    );
  }
}

const IPhoneX = Dimensions.get('window').height === 812

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: IPhoneX ? 34 : 0,
    left: 0,
    right: 0,
    // height determined by Navigator
  }
});

export default TabBar;
