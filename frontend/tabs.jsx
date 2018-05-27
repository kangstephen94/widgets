import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex (index) {
    this.setState({index: index});
  }

  render () {

    let pane = this.props.tabs[this.state.index];
    return (
      <div>
      <div className = "tabs">
        <Header changeIndex ={this.changeIndex}
          tabs = {this.props.tabs}/>
      </div>
      <article className= "articles">{pane.content}</article>
    </div>
    );
  }
}

export default Tabs;
