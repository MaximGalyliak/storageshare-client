import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';

import Boxes from './Boxes';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentWillMount() {
    this.props.fetchItems();
  }

  handleChange = (event, value) => {
    this.setState({value});
  }
  render() {
    console.log(this.props.items);
    var { value } = this.state;
    return (
      <Paper>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Boxes" />
          <Tab label="Items" />
        </Tabs>
        {(value === 0 && this.props.items) && <Boxes boxes={this.props.items} />}
      </Paper>
    );
  }
}

Items.propTypes = {
  fetchItems: PropTypes.func,
  items: PropTypes.array,
}

export default Items;