import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  //first receive a regular react component
  //wrap up the component

  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }
    
    state = this.usedState();

    //update when the store changes by subscribing to the state
    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    }

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store} />;
    }
  };
};

export default storeProvider;
