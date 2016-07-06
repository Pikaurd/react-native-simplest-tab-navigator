// @flow
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

class SceneContainer extends Component {
  static propTypes = {
    ...View.propTypes,
    isSelected: PropTypes.bool
  };

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps): boolean {
    let isNeedUpdate = (this.props.isSelected ^ nextProps.isSelected) == true;
    console.log(`${this.props.children.props.title} shouldComponentUpdate? ${isNeedUpdate}`);
    return isNeedUpdate;
  }

  render() {
    let { children } = this.props; // check only one children
    console.log('Scene style: ', this.props.isSelected);
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
