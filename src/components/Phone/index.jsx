import React from 'react';
import { TouchableOpacity, Linking, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const Phone = ({
	phone,
	pretty
}) => {
	return (
		<TouchableOpacity
			style={styles.clubPhone}
			onPress= {() => {Linking.openURL(`tel:${phone}`);}}
		>
			<Feather name="phone" size={20} color="#7ABA79" />
			<Text style={styles.phoneText}>
				{pretty}
			</Text>
		</TouchableOpacity>
	);
};

Phone.propTypes = {
	phone: PropTypes.string,
	pretty: PropTypes.string,
};

export default Phone;