import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const User1Create = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="alias" source="alias" />
        <TextInput label="message" source="message" />
      </SimpleForm>
    </Create>
  );
};
