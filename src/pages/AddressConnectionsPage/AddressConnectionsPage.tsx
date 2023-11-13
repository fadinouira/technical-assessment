import { Card, Container, TextFieldSelector, Typography } from 'components';
import { GlobalVariables } from 'config/constants';

function AddressConnectionsPage() {
  return (
    <Container maxWidth={GlobalVariables.BreakPoints.lg}>
      <Typography variant="h2">Technical assessment - Fadi NOUIRA</Typography>
      {/* TODO: Add select AddressConnection feature here */}
      <Card>
        <TextFieldSelector
          options={[
            { label: 'hello', value: 2 },
            { label: 'hello2', value: 3 },
            { label: 'hello3', value: 3 },
            { label: 'hello4', value: 3 },
            { label: 'hello5', value: 3 },
          ]}
          onChange={(o) => console.log(o)}
          value={{ label: 'hello', value: 2 }}
          closeOnSelect
        />
      </Card>
    </Container>
  );
}

export default AddressConnectionsPage;
