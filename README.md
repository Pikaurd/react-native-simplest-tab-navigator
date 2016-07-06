# react-native-simplest-tab-navigator

property tabBarHeight was required

usage:
```

<TabNavigator tabBarHeight={55}>
  <TabNavigator.Item
    selected={ this.state.selectedIndex === 0 }
    view={ leftView }
    onPress={ () => this.setState({selectedIndex: 0}) }
  >
    <Text>left</Text>
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={ this.state.selectedIndex === 1 }
    view={ rightView }
    onPress={ () => this.setState({selectedIndex: 1}) }
  >
    <Text>right</Text>
  </TabNavigator.Item>
</TabNavigator>

```
