import React from 'react';
import { Button } from 'semantic-ui-react'

const Filter = () => (
	<div className='filter-container'>
		<h3>Orden:</h3>
		<Button primary color='blue'>Ascendente</Button>
		<Button basic color='blue'>Descendente</Button>
	</div>
)

export default Filter;
