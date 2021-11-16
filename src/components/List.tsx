import React from 'react'

interface IProps {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

const List: React.FC<IProps> = ({people}) => {
    return (
    <ul>
       {people.map(person=>{
           return (
               <div>{person.name}</div>
           )
       })} 
    </ul>
    )
}

export default List
