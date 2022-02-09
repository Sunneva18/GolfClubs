import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const Social = ({ item }) => {
	return (
		<TouchableOpacity style={styles.socialIcon} onPress={() => {Linking.openURL(`https://${item['account']}`);}}>
			{
				item.type == 'FB'
					?
					<SimpleLineIcons name="social-facebook" size={22} color="#7ABA79" />
					:
					item.type == 'IG'
						?
						<AntDesign name="instagram" size={20} color="#7ABA79" />
						:
						<></>
			}
		</TouchableOpacity>
	);
};

Social.propTypes = {
	item: PropTypes.object,
};

export default Social;