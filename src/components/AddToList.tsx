import React, { useState } from 'react';

const AddToList = () => {
	const [input, setinput] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
		setinput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className='AddToList'>
			<input
				type='text'
				placeholder='Name'
				className='AddToList-input'
				value={input.name}
				onChange={handleChange}
				name='name'
			/>
			<input
				type='text'
				placeholder='Age'
				className='AddToList-input'
				value={input.age}
				onChange={handleChange}
				name='age'
			/>
			<input
				type='text'
				placeholder='Url'
				className='AddToList-input'
				value={input.img}
				onChange={handleChange}
				name='img'
			/>
			<textarea
				placeholder='Note'
				className='AddToList-input'
				value={input.note}
				onChange={handleChange}
				name='note'
			/>
		</div>
	);
};

export default AddToList;
