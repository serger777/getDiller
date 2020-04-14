import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { fetchGetCar } from "../../actions";


const CarTable = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGetCar());
	}, []);
	const {
		car, loadCar, page, totalCount, loading,
	} = useSelector((state) => state.car);

	const columns = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id',
			width: '30%',
		},
		{
			title: 'model',
			dataIndex: 'model',
			key: 'id',
			width: '20%',
		},
		{
			title: 'brand',
			dataIndex: 'brand',
			key: 'id',
		},
		{
			title: 'grade',
			dataIndex: 'grade',
			key: 'id',
		},
		{
			title: 'vin',
			dataIndex: 'vin',
			key: 'id',
		},
		{
			title: 'name dielrs',
			dataIndex: 'dielersName',
			key: 'id',
		},
		{
			title: 'address',
			dataIndex: 'address',
			key: 'id',
		},
	];
	const goToPage = (pages, perPage) => {
		dispatch(fetchGetCar(pages, perPage));
	};

	const pagination = {
		page,
		showSizeChanger: false,
		total: totalCount,
		pageSize: 5,
		onChange: goToPage,
	};
	return (
		<>
			{ !loadCar && <Table
				columns={columns}
				dataSource={car}
				loading={loading}
				pagination={pagination}
				rowKey='id'
			/> }
		</>
	);
};
export default CarTable;
