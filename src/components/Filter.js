import React from 'react';
import { Button } from 'semantic-ui-react'

const Filter = ({order, handleClickBtn1, handleClickBtn2}) => (
	<div className='filter-container'>
		<h3>Orden:</h3>
		<Button onClick={handleClickBtn1} basic={!order} color='blue'>Ascendente</Button>
		<Button onClick={handleClickBtn2} basic={order} color='blue'>Descendente</Button>
	</div>
)

export default Filter;
