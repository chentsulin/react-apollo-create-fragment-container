import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default function createFragmentContainer(Component, fragments) {
  // eslint-disable-next-line no-param-reassign
  fragments = fragments || Component.fragments;

  function ApolloFragment(props) {
    return (
      <ApolloConsumer>
        {client => {
          const fragmentProps = {};

          const { dataIdFromObject } = client.cache.config;

          Object.keys(fragments).forEach(propName => {
            if (props[propName]) {
              fragmentProps[propName] = client.readFragment({
                id: dataIdFromObject(props[propName]),
                fragment: fragments[propName],
              });
            }
          });

          return <Component {...props} {...fragmentProps} />;
        }}
      </ApolloConsumer>
    );
  }

  hoistNonReactStatics(ApolloFragment, Component);

  ApolloFragment.fragments = fragments;

  return ApolloFragment;
}
