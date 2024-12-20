import PropTypes from "prop-types";
import { f_list } from "../assets/assets";
import { StoreContext } from "./StoreContext";
import { useState } from "react";

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const contextValue = {
    f_list,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  props: PropTypes.node.isRequired,
};

export default StoreContextProvider;
