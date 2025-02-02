import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { API_URL } from '@/Env';
import { useFetch } from '@/Hooks';

import { BestProducts } from '@/Components/BestProducts';
import { CategoryProductsList } from '@/Components/CategoryProductsList';
import { Header } from '@/Components/Header';
import { OrderModal, ModalStore } from '@/Components/OrderModal';

const Root = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const App = () => {
  const [categoryList, isLoaded, isError] = useFetch(`${API_URL}/categories`);
  const [randomCategoryId, setRandomCategoryId] = useState(null);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const categoryLength = categoryList.result_body.length;
    const randomIndex = Math.floor(Math.random() * categoryLength);
    setRandomCategoryId(categoryList.result_body[randomIndex].id);
  }, [isLoaded]);

  // TODO: 에러 발생시 보여줄 화면
  if (isError) {
    return null;
  }

  // TODO: 로딩중 보여줄 화면
  if (!isLoaded) {
    return null;
  }

  return (
    <Root>
      <ModalStore>
        <Header categoryList={categoryList.result_body} />
        <BestProducts />
        <CategoryProductsList categoryList={categoryList.result_body} />
        <OrderModal categoryId={randomCategoryId} />
      </ModalStore>
    </Root>
  );
};

export default App;
