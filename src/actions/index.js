import axios from 'axios';
import { GET_CAR, SET_ERROR_VALUE, LOAD_CAR, TOTAL_COUNT, LOADING_TABLE } from '../reducers/types';

const getCar = (payload) => ({
	type: GET_CAR,
	payload,
});
const setErrorValue = (payload) => ({
	type: SET_ERROR_VALUE,
	payload,
});
const loadCar = (payload) => ({
	type: LOAD_CAR,
	payload,
});

const fetchGetCar = (page = 0, perPage = 5) => async (dispatch) => {
	try {
		dispatch({ type: LOADING_TABLE, payload: true });

		const response = await axios.get(
			`https://jlrc.dev.perx.ru/carstock/api/v1/vehicles/?state=active&group=new&hidden=false&page=${page === 0 ? page : page-1 }&per_page=${perPage}`,
			{
				headers: {
					'X-CS-Dealer-Id-Only': 1,
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			},
		);
		const totalCount = Number(response.headers['x-total-count']);
		const id = [];
		const dataCar = response.data.map((item) => {
			if (item.dealer !== null) {
				id.push(item.dealer);
			}
			return {
				id: item.id,
				model: item.model,
				brand: item.brand,
				grade: item.grade,
				vin: item.vin,
				dilers: item.dealer,
				dielersName: "",
				address: "",
			};
		});
		const url = `https://jlrc.dev.perx.ru/carstock/api/v1/dealers/?id__in=${[...id]}`;
		const responseDealers = await axios.get(
			`${url}`,
			{
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			},
		);
		const dealer = responseDealers.data;
		dataCar.forEach((item) => {
			const findName = dealer.filter((dealer) => dealer.id === item.dilers);
			if (findName.length === 0) {
				item.dielersName = 'отсутствует';
				item.address = "item";
			} else {
				item.dielersName = findName[0].name;
				item.address = findName[0].offices[0].address;
			}
		});
		dispatch({ type: GET_CAR, payload: dataCar });
		dispatch({ type: TOTAL_COUNT, payload: totalCount });
		dispatch({ type: LOAD_CAR, payload: false });
		dispatch({ type: LOADING_TABLE, payload: false });

	} catch (error) {
		dispatch({ type: LOAD_CAR, payload: true });
		dispatch({ type: SET_ERROR_VALUE, payload: error });
	}
};


export {
	fetchGetCar,
	setErrorValue,
	getCar,
	loadCar,
};
