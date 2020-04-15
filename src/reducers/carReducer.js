import {
	GET_CAR, LOAD_CAR, TOTAL_COUNT, LOADING_TABLE, SET_DILERS, GET_DILERS_ID,
} from './types';

const initialState = {
	car: {
		id: "",
		model: "",
		brand: "",
		grade: "",
		vin: "",
		dilers: "",
		dielersName: "",
		address: "",
	},
	dilers: [],
	dillersID: [],
	loadCar: true,
	loading: true,
	totalCount: "",
	perPage: "5",
	page: "1",
};

const carReducer = (state = initialState, action) => {
	switch (action.type) {
	case GET_CAR:
		return {
			...state,
			car: action.payload,
		};
	case LOAD_CAR:
		return {
			...state,
			loadCar: action.payload,
		};
	case LOADING_TABLE:
		return {
			...state,
			loading: action.payload,
		};
	case TOTAL_COUNT:
		return {
			...state,
			totalCount: action.payload,
		};
	case SET_DILERS:
		return {
			...state,
			dilers: [
				...state.dilers,
				...action.payload,
			],
		};
		case GET_DILERS_ID:
		return {
			...state,
			dillersID: [
				...state.dillersID,
				...action.payload,
			],
		};
	default:
		return state;
	}
};


export default carReducer;
