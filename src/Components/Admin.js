import React,{useState} from 'react'

export default function Admin() {
	const [items, setItems] = useState([]);	
	const addItem = () => {
		setItems([...items, {
			value: 'hello added',
		}]
		)
		items.push(items.value);
	}

	return (
		<div>
			<button onClick = {addItem}> add a news </button>
			<ul>
				{
					items.map( item => (
						<li> {item.value} </li> ) )
				}
			</ul>
		</div>
	)
}