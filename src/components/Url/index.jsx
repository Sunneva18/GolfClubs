import React from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const Url = ({
	url, url_pretty
}) => {
	return (
		<View>
			{
				url !== ''
					?
					<TouchableOpacity
						style={styles.clubUrl}
						onPress={() => {Linking.openURL(url);}}
					>
						<Entypo name="link" size={20} color="#7ABA79" />
						<Text style={styles.urlText}>{url_pretty}</Text>
					</TouchableOpacity>
					:
					<></>
			}
		</View>
        
	);
};

Url.propTypes = {
	url: PropTypes.string,
	url_pretty: PropTypes.string,
};

export default Url;