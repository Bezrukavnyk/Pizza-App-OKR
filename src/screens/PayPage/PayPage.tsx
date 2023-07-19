import React from "react";
import { Alert, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { FieldValues, useForm } from "react-hook-form";

import { Input, MainActionBtn } from "controls";

import { payPageStyles } from "./styles";

const PayPage = (): JSX.Element => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues): void => {
    Alert.alert(
      `Full Name ${data?.full_name}, Phone ${data?.phone}, Address: ${data?.address}`
    );
  };

  return (
    <SafeAreaView style={payPageStyles.wrapper}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <ScrollView style={payPageStyles.container}>
        <Input title="Full Name" name="full_name" control={control} />
        <Input title="Phone" name="phone" control={control} />
        <Input title="Address" name="address" control={control} />
      </ScrollView>
      <MainActionBtn title="Buy" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

export default PayPage;
