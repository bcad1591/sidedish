import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../Constants/Colors';
import { ProductCard } from './ProductCard';
import { CategoryBadge } from '../Badge/CategoryBadge';

const BestProductWrapper = styled.div`
  display: flex;
  padding: 56px 80px;
  margin: 0 -80px;
  border-bottom: 1px solid ${Colors.LIGHT_GREY};
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;

  border-bottom: 0.5px solid ${Colors.LIGHT_GREY};
  margin: 0 -80px;
  padding: 0 80px;

  li {
    cursor: pointer;
    padding: 16px;
    border-bottom: 1.5px solid transparent;
  }

  li.selected {
    border-color: ${Colors.BLACK};
  }

  li:hover {
    border-color: ${Colors.BLACK};
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ProductCardList = styled.ul`
  display: flex;
  margin-top: 34px;
`;

const Title = styled.span`
  margin-left: 10px;
`;

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BestProducts = () => {
  const [tabList, setTabList] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [selectedTabId, setSelectedTabId] = useState(null);

  useEffect(() => {
    fetch('/events')
      .then(body => body.json())
      .then(data => {
        setTabList(data.content);
        setSelectedTabId(data.content[0].id);
      });
  }, []);

  useEffect(() => {
    if (!selectedTabId) return;
    fetch(`/events/${selectedTabId}`)
      .then(body => body.json())
      .then(data => {
        setCardData(data.content);
      });
  }, [selectedTabId]);

  //TODO: 상의/이부분도 외부 함수로 빼놓아서 tabList에 주입하는 방식으로 변경 고려해볼까? 그런데 만약 외부에서 핸들러가 변경된다면
  const onClickTab = event => {
    const tabId = event.target.dataset.id;
    setSelectedTabId(Number(tabId));
  };

  return (
    <BestProductWrapper>
      <Header>
        <BadgeWrapper>
          {/*TODO: 상의/ 뱃지 전달받기 */}
          <CategoryBadge />
        </BadgeWrapper>

        <Title className="fonts-display">
          {/* 타이틀 폰트로 전달받기?? 아니면 놔두기*/}
          한번 주문하면 두번 주문하는 반찬
        </Title>
      </Header>
      <TabList>
        {/*TODO: 상의/ 이부분도 데이터를 전달받고 이벤트를 그안에서 정의 하는방식으로??*/}
        {tabList.map(tab => (
          <li
            className={`fonts-lg ${selectedTabId === tab.id ? 'selected' : ''}`}
            key={tab.id}
            data-id={tab.id}
            onClick={onClickTab}
          >
            {tab.title}
          </li>
        ))}
      </TabList>
      <ProductCardList>
        {/*card 데이터 map 요소 data -> productCardData*/}
        {cardData.map(productCardData => (
          <ProductCard
            size={''}
            data={productCardData}
            key={productCardData.id}
          />
        ))}
      </ProductCardList>
    </BestProductWrapper>
  );
};
