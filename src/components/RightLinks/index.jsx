import React from 'react';
import { View, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import Social from '../Social';
import styles from './styles';

const RightLinks = ({
	social,
	geo,
}) => {
	return (
		<View style={styles.socialContainer}>
			<FlatList
				data={social}
				renderItem={({ item }) => (
					<Social item={item}/>
				)}
				keyExtractor={(item) => item.type}
			/>
			{
				geo !== undefined
					?
					<TouchableOpacity style={styles.geo} onPress={() => {Linking.openURL(geo.map_links.interactive);}}>
						<Ionicons name="location-outline" size={22} color="#7ABA79" />
					</TouchableOpacity>
					:
					<></>
			}
		</View>
	);
};

RightLinks.propTypes = {
	social: PropTypes.array,
	geo: PropTypes.object,
};

export default RightLinks;