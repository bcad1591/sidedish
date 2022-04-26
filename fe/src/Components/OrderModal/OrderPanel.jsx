import styled, { css } from 'styled-components';

import { DiscountBadge } from '../Badge/DiscountBadge';

import Colors from '@/Constants/Colors';
import Fonts from '@/Constants/Fonts';
const OrderPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: beige;
  position: relative;

  width: 960px;
`;

const SelectedProduct = styled.section`
  display: flex;
  margin: 48px;
  margin-top: 76px;
`;

const ProductThumbnail = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainProductImage = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;

  .poduct-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SubProductImage = styled.div`
  width: 72px;
  height: 72px;
  overflow: hidden;
  margin: 8px 8px 0 0;

  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :last-child {
    margin-right: 0;
  }
`;

const SubProductList = styled.div`
  display: flex;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

const Title = styled.span`
  display: block;
`;

const OriginalPrice = styled.span`
  display: block;
  color: ${Colors.LIGHT_GREY};
  margin-top: 16px;
`;

const ListPrice = styled.div`
  display: block;
  margin-top: 8px;
`;

const Price = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

const RelatedProduct = styled.div``;

const DeliveryInfo = styled.ul`
  display: flex;
  width: 440px;
  margin-top: 24px;

  border-top: 0.5px solid ${Colors.LIGHT_GREY};
  border-bottom: 0.5px solid ${Colors.LIGHT_GREY};
`;

const ProductOrderInfo = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  color: ${Colors.LIGHT_GREY};

  padding-top: 16px;
  padding-bottom: 16px;
  li {
    margin-bottom: 8px;
  }
`;

const ProductOrderInfoDetail = styled.ul`
  display: flex;
  flex-direction: column;

  padding-top: 16px;
  padding-bottom: 16px;
  li {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AmountIcon = styled.span`
  display: block;
  color: ${Colors.GREY};

  img {
    display: block;
  }
`;

const TotalAmount = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
  align-items: center;
  margin-left: 6px;
`;

const TotalCost = styled.span`
  display: inline-block;
`;

const CurrentAmount = styled.span``;

const OrderPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 440px;
  margin-top: 26px;
`;

const OrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: black;
  color: white;

  position: absolute;
  width: 440px;
  height: 58px;
  right: 48px;
  bottom: 48px;
`;

export const OrderPanel = () => {
  return (
    <OrderPanelWrapper>
      <SelectedProduct>
        <ProductThumbnail>
          <MainProductImage size={'md'}>
            <img
              className="product-img"
              src="https://img.insight.co.kr/static/2019/06/26/700/f31l48lhp1v2tuq7ce8o.jpg"
              alt="대표 음식 사진"
            />
          </MainProductImage>
          <SubProductList>
            <SubProductImage>
              <img
                className="product-img"
                src="https://img.insight.co.kr/static/2019/06/26/700/5nmluh24cnp5h4rb3vj4.jpg"
                alt="대표 음식 사진"
              />
            </SubProductImage>
            <SubProductImage>
              <img
                className="product-img"
                src="https://studyforus.com/files/attach/images/1816/212/461/aca7e1aed69a698c8896c641d77085dd.png
                "
                alt="대표 음식 사진"
              />
            </SubProductImage>
          </SubProductList>
        </ProductThumbnail>
        <ProductInfo>
          <Title className={Fonts.FONTS_LG}>오이피자</Title>
          <OriginalPrice className={Fonts.FONTS_SM}>15800 원</OriginalPrice>

          <ListPrice>
            <DiscountBadge />
            <Price className={Fonts.FONTS_LG}>12000 원</Price>
          </ListPrice>

          <DeliveryInfo>
            <ProductOrderInfo>
              <li className={Fonts.FONTS_XS}>적립금</li>
              <li className={Fonts.FONTS_XS}>주소</li>
              <li className={Fonts.FONTS_XS}>배달금</li>
            </ProductOrderInfo>

            <ProductOrderInfoDetail>
              <li className={Fonts.FONTS_XS}>180 원</li>
              <li className={Fonts.FONTS_XS}>이곳은 주소입니다</li>
              <li className={Fonts.FONTS_XS}>3000 원</li>
            </ProductOrderInfoDetail>
          </DeliveryInfo>

          <OrderPrice>
            <TotalAmount>
              <AmountIcon>
                <img src="plus.svg" alt="" />
              </AmountIcon>
              <CurrentAmount>0</CurrentAmount>
              <AmountIcon>
                <img src="minus.svg" alt="" />
              </AmountIcon>
            </TotalAmount>

            <TotalCost>최종 가격</TotalCost>
          </OrderPrice>
        </ProductInfo>

        <OrderButton>주문하기</OrderButton>
      </SelectedProduct>

      <RelatedProduct></RelatedProduct>
    </OrderPanelWrapper>
  );
};
