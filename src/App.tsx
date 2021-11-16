import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

interface IState {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Lebron James',
			url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhoopshype.com%2Fwp-content%2Fuploads%2Fsites%2F92%2F2021%2F10%2Fi_0d_d7_16_lebron-james.png&imgrefurl=https%3A%2F%2Fhoopshype.com%2F2021%2F11%2F15%2Flebron-james-progressing-great-from-injury%2F&tbnid=5bRW_KEW1w3EUM&vet=12ahUKEwivs9v_25z0AhW2wJcIHXapAIQQMygAegUIARDKAQ..i&docid=LT5DOtZLIFKZHM&w=1280&h=900&itg=1&q=lebron%20james&ved=2ahUKEwivs9v_25z0AhW2wJcIHXapAIQQMygAegUIARDKAQ',
			age: 36,
			note: 'Allergic to staying on the same team',
		},
	]);

  
	return (
		<div className='App'>
			<h1>People invited to my Party</h1>
      <List people={people}/>
		</div>
	);
}

export default App;
