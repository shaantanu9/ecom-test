import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="modelNo" source="modelNo" />
      </SimpleForm>
    </Edit>
  );
};
