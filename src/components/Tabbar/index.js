import React, { Component, PropTypes } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabBar extends Component {
  static defaultProps = {
    defaultSelected: '',
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    defaultSelected: PropTypes.string,
  }

  state = {
    selected: this.props.defaultSelected,
  }

  onPress(name) {
    this.setState({
      selected: name,
    });
  }

  render() {
    const { items } = this.props;
    const { selected } = this.state;
    const itemView = items.map(v => (
      <Icon.TabBarItemIOS
        key={v.name}
        iconName={v.name}
        iconSize={v.size || 25}
        title={v.title || ''}
        onPress={() => this.onPress(v.name)}
        selected={selected === v.name}
      >
        {v.view}
      </Icon.TabBarItemIOS>
    ));

    return <TabBarIOS>{itemView}</TabBarIOS>;
  }
}
