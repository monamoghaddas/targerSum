import React from 'react';

import PropTypes from 'prop-types';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isSeleted: PropTypes.bool.isRequired,
  };
  handlePress = () => {
    console.log(this.props.isSeleted);
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isSeleted && styles.selected]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
  selected: {
    opacity: 0.3,
  },
});
export default RandomNumber;
