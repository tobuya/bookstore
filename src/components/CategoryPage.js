import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoryPage = () => {
  const categoriesData = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={onButtonClick}>Check Status</button>
      <h1>{categoriesData.categories[0]}</h1>
    </div>
  );
};

export default CategoryPage;
