import React from 'react';

class Header extends React.Component {
  render () {
    return (
    <ul className="tab-list">
      {this.props.tabs.map ((tab,idx) => {
        return <li key={idx}
          onMouseDown={() => this.props.changeIndex(idx)}>
        {tab.title}</li>;
        })
      }
    </ul>
  );
  }
}

export default Header;
