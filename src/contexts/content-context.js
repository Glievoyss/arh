import React, { createContext, useReducer, Suspense } from 'react';
import PropTypes from 'prop-types';

import { contentInitState } from './initialStates';

const ContentStateContext = createContext();

function ContentProvider({ children }) {
  const [contentState, contentDispatch] = useReducer(contentInitState);

  return (
    <Suspense fallback={<p>...LOADING...</p>}>
      <ContentStateContext.Provider
        value={{
          contentState,
          contentDispatch
        }}
      >
        {children}
      </ContentStateContext.Provider>
    </Suspense>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.node
};

export { ContentProvider };
