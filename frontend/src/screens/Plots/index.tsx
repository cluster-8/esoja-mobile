import React, { useCallback, useEffect, useState } from 'react';
import { CultiveCard, CultiveCardProps } from '../../components/PlotCard';
import Title from '../../components/Title';
import { translate } from '../../data/I18n';
import { PlotsScreenRouteProps } from '../../data/routes/app';
import { useSample } from '../../hooks/useSample';
import { AddButton, Container, CultiveList, Header, Icon } from './styles';

export interface DataListProps extends CultiveCardProps {
  id: string;
}

export const Plots: React.FC<PlotsScreenRouteProps> = ({ navigation }) => {
  const data = [
    {
      id: '1',
      name: 'Teste 1',
      area: 40,
      distancia: 10,
      media: 65,
      produtividade: 50
    },
    {
      id: '2',
      name: 'Teste 2',
      area: 40,
      distancia: 10,
      media: 65,
      produtividade: 50
    },
    {
      id: '3',
      name: 'Teste 3',
      area: 40,
      distancia: 10,
      media: 65,
      produtividade: 50
    },
    {
      id: '4',
      name: 'Teste 4',
      area: 40,
      distancia: 10,
      media: 65,
      produtividade: 50
    }
  ];
  const [plots, setPlots] = useState<any[]>([]);
  const { getPlot } = useSample();

  const getData = useCallback(async () => {
    setPlots(await getPlot());
  }, [getPlot]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Header>
        <Title
          title={translate('plots.plots')}
          subtitle={translate('plots.SeeAllYourPlots')}
        />
      </Header>

      <CultiveList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CultiveCard data={item} />}
      />

      <AddButton onPress={() => navigation.navigate('CreatePlotStepOne')}>
        <Icon name="plus" />
      </AddButton>
    </Container>
  );
};