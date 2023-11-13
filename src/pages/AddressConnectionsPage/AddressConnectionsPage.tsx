import { Card, Container, Typography } from 'components';
import { GlobalVariables } from 'config/constants';
import { AddressSelector } from 'features/address';
import { AddressType } from 'models/index';
import { useState } from 'react';

function AddressConnectionsPage() {
  const [origin, setOrigin] = useState<AddressType>();
  const [destination, setDestination] = useState<AddressType>();

  return (
    <Container maxWidth={GlobalVariables.BreakPoints.sm}>
      <Typography variant="h2">Technical assessment - Fadi NOUIRA</Typography>
      <Card>
        <AddressSelector
          label="Start"
          placeholder="Select an origin address"
          value={origin}
          onChange={setOrigin}
        />
        <AddressSelector
          label="Destination"
          placeholder="Select a destination address"
          value={destination}
          onChange={setDestination}
        />
      </Card>
    </Container>
  );
}

export default AddressConnectionsPage;
