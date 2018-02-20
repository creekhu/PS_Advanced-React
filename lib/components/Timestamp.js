import React from 'react';
import stateProvider from './storeProvider';

class Timestamp extends React.PureComponent {
  static timeDisplay = timestamp => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

const extraProps = store => ({
  timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
});

export default stateProvider(extraProps)(Timestamp);
