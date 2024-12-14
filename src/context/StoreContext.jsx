    import PropTypes from 'prop-types';
    import { f_list } from '../assets/assets';
    import { StoreContext } from './StoreContext'; 

    const StoreContextProvider = ({ children }) => {
    const contextValue = { f_list };

    return (
        <StoreContext.Provider value={contextValue}>
        {children}
        </StoreContext.Provider>
    );
    };

    StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
    };

    export default StoreContextProvider;
