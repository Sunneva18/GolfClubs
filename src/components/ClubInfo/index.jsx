import React from 'react';
import { View, Text } from 'react-native';
import Url from '../Url';
import Phone from '../Phone';
import styles from './styles';
import PropTypes from 'prop-types';

const ClubInfo = ({
	first_name,
	url,
	url_pretty,
	phone,
	phone_pretty
}) => {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.clubName}>
				{first_name}
			</Text>
			<Url url={url} url_pretty={url_pretty}/>
			<Phone phone={phone} pretty={phone_pretty}
			/>
		</View>
	);
};

ClubInfo.propTypes = {
	first_name: PropTypes.string,
	url: PropTypes.string,
	url_pretty: PropTypes.string,
	phone: PropTypes.string,
	phone_pretty: PropTypes.string
};

export default ClubInfo;