import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingimg from "../assets/loading.gif";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="max-w-[1440px] h-screen mx-auto"><img src={loadingimg} alt=""/></div>
    }
    if (!loading && !user?.email) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    return children
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;