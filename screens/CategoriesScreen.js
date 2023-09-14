import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function CategoriesScreen({navigation}) {
    //const navigation = useNavigation();
    function renderCategoryItem(itemData) {
        function pressHandler() {
            //const { navigate } = this.props.navigation;
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler} />;
    }
    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
            />
    )
}
export default CategoriesScreen;