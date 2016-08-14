// @flow
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import SceneContainer from './SceneContainer';
import TabItem from './TabItem';
import TabBar from './TabBar';

type Props = {
  sceneStyle: View.propTypes.style,
  tabBarHeight: number,
}

class TabNavigator extends Component {
  constructor(props: Props) {
    super(props);
  }
  // static propTypes = {
  //   ...View.propTypes,
  //   sceneStyle: View.propTypes.style,
  //   tabBarHeight: PropTypes.number.isRequired,
  // };

  render() {
    let { style, children, sceneStyle, tabBarHeight, ...props } = this.props;
    let scenes = [];

    React.Children.forEach(children, (item, index) => {
      let sceneKey = this._getSceneKey(item, index);

      let { selected } = item.props;
      let scene =
        <SceneContainer
          key={sceneKey}
          isSelected={selected}
          style={[sceneStyle, {bottom: tabBarHeight}]}
        >
          {item.props.view}
        </SceneContainer>;

      scenes.push(scene);
    });

    return (
      <View style={[ styles.container, style ]} {...props}>
        {scenes}
        {/* tab bar */}
        <TabBar height={tabBarHeight}>
          { React.Children.map(children, item => item) }
        </TabBar>
      </View>
    );
  }

  // MARK: - helper methods

  _getSceneKey(item: TabItem, index: number): string {
    return `scene-${(item.key !== null) ? item.key : index}`;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

TabNavigator.Item = TabItem;

export default TabNavigator;
