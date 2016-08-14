// @flow
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

type Props = {
  isSelected: boolean,
}

class SceneContainer extends Component {
  constructor(props: Props) {
    super(props);
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    let isNeedUpdate = Boolean(Number(this.props.isSelected) ^ Number(nextProps.isSelected));
    return isNeedUpdate;
  }

  render() {
    let { children } = this.props; // check only one children
    return (
      <View
        style={[
          styles.sceneContainer,
          this.props.style,
          this.props.isSelected ? null : styles.hiddenSceneContainer
        ]}
        pointerEvents={this.props.isSelected ? 'auto' : 'none'}
      >
        { React.Children.only(children) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sceneContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // bottom: determined by tab bar height,
  },
  hiddenSceneContainer: {
    overflow: 'hidden',
    opacity: 0,
  },
});

export default SceneContainer;
