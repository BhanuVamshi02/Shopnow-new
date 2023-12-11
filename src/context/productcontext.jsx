import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

const initalState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState); //here reducer is productReducer.jsx

  // my 1nd api call for all product detail
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product detail
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hooks to reduce the reuse of huge code
const useProductContext = () => {
  return useContext(AppContext); //it is used in FeatureProduct.jsx file
};

export { AppProvider, AppContext, useProductContext };
