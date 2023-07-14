import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
	if (alerts === undefined || alerts === null || alerts.length < 0) {
		return;
	}
	return (
	alerts.map((alert) => {
		return <div>{alert.msg}</div>;
	})
	)
};
const mapStateToProps = (state) => ({ alerts: state.alert });

export default connect(mapStateToProps)(Alert);
