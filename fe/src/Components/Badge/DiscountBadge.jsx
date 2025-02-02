import styled from 'styled-components';

import { Colors, Fonts } from '@/Constants';

const getBadgeName = type => {
  switch (type) {
    case 'lunch':
      return '런칭특가';
    case 'event':
      return '이벤트특가';
    default:
      return '할인';
  }
};

const getBadgeBackgroundColor = type => {
  switch (type) {
    case 'lunch':
      return Colors.ORANGE;
    case 'event':
      return Colors.GREEN;
    default:
      return Colors.GREY;
  }
};

const Badge = styled.button`
  padding: 6px 16px;
  color: ${Colors.WHITE};
  border-radius: 999px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: inline-block;
`;

export const DiscountBadge = ({ type }) => {
  return (
    <Badge className={Fonts.SM} backgroundColor={getBadgeBackgroundColor(type)}>
      {getBadgeName(type)}
    </Badge>
  );
};
