//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const messagesTitle = () => {
  const record = useRecordContext();
  return <span>messages {record ? `"${record.messageContent}"` : ''}</span>;
};

export const messagesList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="senderId" reference="users" />
      <TextField source="messageContent" />
      <DateField source="timestamp" />
      <ReferenceField source="recipientId" reference="users" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const messagesEdit = () => (
  <Edit title={<messagesTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="senderId" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="messageContent" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="recipientId" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const messagesCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="senderId" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="messageContent" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="recipientId" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="senderId"
    label="senderId"
    reference="users"
    alwaysOn
  />,
  ,
  ,
  <ReferenceInput
    source="recipientId"
    label="recipientId"
    reference="users"
    alwaysOn
  />,
];
