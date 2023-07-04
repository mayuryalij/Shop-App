import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { setProduct } from '../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/actions/cart';
import {
  setError,
  setSuccess,
  setLoading,
} from '../state/actions/loadingStates';

const ProductPage = () => {
  const productID = useParams().productID;
  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { title, price, image, description } = product;
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
    dispatch(setLoading(true));
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProducts = async () => {
    dispatch(setProduct(await fetchProduct()));
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productID}`
      );
      let data = await response.json();
      dispatch(setLoading(false));
      dispatch(setSuccess(true));
      return data;
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };

  if (loadingState.loading) {
    return (
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Loader />
      </div>
    );
  }

  if (loadingState.error) {
    return (
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <div>Sorry, We're facing an error</div>{' '}
      </div>
    );
  }

  return (
    <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
      <div className="flex justify-evenly items-start">
        <div className="p-8 h-96 bg-white">
          <img className="h-full" src={image} alt={title} />
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="h-1 w-4/12 mt-2 bg-black"></div>
          <h2 className="text-2xl font-bold mt-4">
            {price && `$${price.toFixed(2)}`}
          </h2>
          <p className="my-4">{description}</p>
          <button
            className="flex items-center justify-center p-2 font-bold w-full bg-black text-white hover:bg-slate-800"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
