import React from "react";
import { FlatList, SafeAreaView, TextInput, View } from "react-native";

import { NavigationProps } from "utils/types";
import { HeaderList, CardList } from "components";
import { MainActionBtn } from "controls";

import { usePizzaList } from "./utils/usePizzaList";
import { listPizzaStyles } from "./utils/styles";

const PizzaList = ({ navigation }: NavigationProps): JSX.Element => {
  const { searchValue, onChangeText, pizzaArray, totalPizzaCount } =
    usePizzaList();

  return (
    <SafeAreaView style={listPizzaStyles.container}>
      <View style={listPizzaStyles.container}>
        <HeaderList title="Pizza shop" subTitle="Description of pizza shop" />

        <TextInput
          style={listPizzaStyles.inputSearch}
          placeholder="Search pizza"
          value={searchValue}
          onChangeText={onChangeText}
        />

        <FlatList
          style={listPizzaStyles.productWrap}
          data={pizzaArray}
          renderItem={({ item }) => (
            <CardList
              pizzaInfo={item}
              onPress={() => navigation.navigate("Details", { id: item.id })}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <MainActionBtn
          title={`Basket: ${totalPizzaCount}`}
          onPress={() => navigation.navigate("Basket")}
        />
      </View>
    </SafeAreaView>
  );
};

export default PizzaList;
