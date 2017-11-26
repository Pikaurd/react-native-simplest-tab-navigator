// @flow
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';

import SceneContainer from './SceneContainer';
import TabItem from './TabItem';
import TabBar from './TabBar';

const IPhoneX = Dimensions.get('window').height === 812

type Props = {
  sceneStyle: View.propTypes.style,
  tabBarHeight: number,
}

class TabNavigator extends Component {
  constructor(props: Props) {
    super(props);
  }

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
          style={[sceneStyle, {bottom: IPhoneX ? tabBarHeight + 34 : tabBarHeight }]}
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
