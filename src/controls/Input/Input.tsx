import { FC } from "react";
import { Text, TextInput, View } from "react-native";
import {
  Control,
  FieldValues,
  useController,
  useFormState,
} from "react-hook-form";

import { inputStyles } from "./styles";

type Props = {
  title: string;
  name: string;
  control: Control<FieldValues, any>;
};

const Input: FC<Props> = ({ control, title, name }) => {
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    defaultValue: "",
    name,
    rules: { required: true },
  });

  return (
    <View style={inputStyles.inputWrap}>
      <Text style={inputStyles.label}>{title}</Text>
      <TextInput
        style={inputStyles.input}
        value={field.value}
        onChangeText={field.onChange}
      />
      {errors[name] && <Text style={{ color: "red" }}>Required field</Text>}
    </View>
  );
};

export default Input;
