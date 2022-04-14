import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFFontSize } from '../../utils/getResponsiveSizes';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFFontSize(18)}px;
`;

export const ExcludeButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.attention};

  padding: 10px;
  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFFontSize(20)}px;

  color: ${({ theme }) => theme.colors.background_over};
`;

export const Footer = styled.View`
  flex-direction: column;
  justify-content: space-between;

  margin-top: 15px;
`;

export const InfoText = styled.Text`
  font-size: ${RFFontSize(14)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;
