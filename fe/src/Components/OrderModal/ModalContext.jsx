import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

const setUpCost = (discountPolicy, discountRate, originalPrice) => {
  if (!discountPolicy) {
    return originalPrice;
  }
  return originalPrice - originalPrice * discountRate;
};

export const ModalStore = props => {
  const [ModalDisplay, setModalDisplay] = useState(false);
  const [productID, setProductID] = useState(1);
  const [productDetail, setProductDetail] = useState(null);
  const [currentAmount, setCurrentAmount] = useState(1);
  const [totalCost, setTotalCost] = useState(null);
  const [productPrice, setProductPrice] = useState(null);

  useEffect(() => {
    if (!productID) {
      return;
    }

    fetchData(`${REACT_APP_API_URL}/items/${productID}`)
      .then(productData => {
        console.log(productData);
        setProductPrice(productData.price);
        setProductDetail(productData);

        setTotalCost(
          setUpCost(
            productData.discountPolicy,
            productData.discountRate,
            productData.price
          )
        );
      })
      .catch(err => console.error(err));
  }, [productID]);

  return (
    <ModalContext.Provider
      value={{
        ModalDisplay,
        setModalDisplay,
        setProductID,
        productDetail,
        currentAmount,
        setCurrentAmount,
        totalCost,
        setTotalCost,
        productPrice,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
