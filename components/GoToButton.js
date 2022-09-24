import { useNavigation } from '@react-navigation/native';

export default function GoToPage(name) {
    const navigation = useNavigation();
    navigation.navigate(name)
}