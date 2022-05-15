import React, { useCallback, useEffect, useState } from 'react';
import { PropertyCard, PropertyCardProps } from '../../components/PropertyCard';
import Title from '../../components/Title';
import { translate } from '../../data/I18n';
import { PropertiesScreenRouteProps } from '../../data/routes/app';
import { useProperty } from '../../hooks/useProperty';
import { AddButton, Container, Header, Icon, PropertyList } from './styles';

export interface DataListProps extends PropertyCardProps {
  id: string;
}

export const Properties: React.FC<PropertiesScreenRouteProps> = ({
  navigation
}) => {
  const [properties, setProperties] = useState<any[]>([]);
  const { getProperties } = useProperty();

  const getData = useCallback(async () => {
    setProperties(await getProperties());
  }, [getProperties]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Container>
      <Header>
        <Title
          title={translate('properties.properties')}
          subtitle={translate('properties.SeAllYourProperties')}
        />
      </Header>

      <PropertyList
        data={properties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PropertyCard data={item} />}
      />

      <AddButton onPress={() => navigation.navigate('NewProperty')}>
        <Icon name="plus" />
      </AddButton>
    </Container>
  );
};