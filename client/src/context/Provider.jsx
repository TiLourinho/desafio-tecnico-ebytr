import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const context = useMemo(() => ({
    taskList,
    setTaskList,
  }), [taskList]);

  useEffect(() => {
    document.title = 'Ybetr';
  }, []);

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
