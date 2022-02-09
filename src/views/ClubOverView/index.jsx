import React, { useEffect } from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GolfClub from '../../components/GolfClub';
import { setAllClubs } from '../../actions';
import { getClubs } from '../../services';
import styles from './styles';

const ClubOverview = () => {
	const dispatch = useDispatch();
	const allClubs = useSelector((state) => state);

	useEffect(() => {
		(async () => {
			// Get all clubs and use redux to store them.
			const allGolfClubs = await getClubs();
			// Store them alphabeticalized
			dispatch(setAllClubs(allGolfClubs.sort((a,b) => a.first_name.localeCompare(b.first_name))));
		})();
	}, []);
	
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Golfklúbbar Íslands</Text>
			<FlatList
				data={allClubs}
				renderItem={({ item }) => (
					<GolfClub club={item}/>
				)}
				keyExtractor={(item) => item.first_name}
			/>
		</SafeAreaView>
	);
};

export default ClubOverview;