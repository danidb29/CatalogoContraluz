import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Catalogo, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      isAuthenticated ? (
        <Catalogo />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
