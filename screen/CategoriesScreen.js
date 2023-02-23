import { View, Text, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        // onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemDate) => renderCategoryItem(itemDate)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
