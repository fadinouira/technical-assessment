import { Card, Container, Typography } from 'components';
import { GlobalVariables } from 'config/constants';

function AddressConnectionsPage() {
  return (
    <Container maxWidth={GlobalVariables.BreakPoints.lg}>
      <Typography variant="h2">Technical assessment - Fadi NOUIRA</Typography>
      {/* TODO: Add select AddressConnection feature here */}
      <Card>Hello</Card>
    </Container>
  );
}

export default AddressConnectionsPage;
