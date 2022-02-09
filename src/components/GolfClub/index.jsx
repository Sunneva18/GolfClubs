import React from 'react';
import { View } from 'react-native';
import RightLinks from '../RightLinks';
import PropTypes from 'prop-types';
import ClubInfo from '../ClubInfo';
import styles from './styles';

const GolfClub = ({
	club
}) => {
	const url = club.url;
	return (
		<View style={styles.golfClubContainer}>
			<ClubInfo
				first_name={club.first_name}
				url={url} url_pretty={club.url_pretty}
				phone={club.phone.number}
				phone_pretty={club.phone.pretty}
			/>
			<RightLinks social={club.social} geo={club.geo} />
		</View>
	);
};

GolfClub.propTypes = {
	club: PropTypes.object,
};

export default GolfClub;