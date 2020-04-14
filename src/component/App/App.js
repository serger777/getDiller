import React from 'react';
import PropTypes from "prop-types";
import styles from './App.module.css';
import CarTable from "../CarTable";

function App() {

	return (
		<div className={styles.app}>
			<CarTable />
		</div>
	);
}

export default App;

App.propTypes = {
	jwt: PropTypes.string,
};
