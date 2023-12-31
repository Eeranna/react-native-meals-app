import {View, Text, FlatList, StyleSheet} from 'react-native'

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
   const catId = route.params.categoryId;

   const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
   });

   function renderedMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
        title: item.title,
        imageUrl: itemData.item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration
    };
    return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>
   }

   return (
    <View style={StyleSheet.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderedMealItem}/>
    </View>
   )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});