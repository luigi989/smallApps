import { useState } from 'react';
import Page from '../components/Page';

interface PersonProps {
    name: string
    street: string
    city: string
    state: string
    country: string
    telephone: string
    birthday: string
}

const people: PersonProps[] = [
    {
        name: 'Rafael Corza',
        street: 'Old street 13',
        city: 'Seattle',
        state: 'Washington',
        country: 'USA',
        telephone: '03012756785',
        birthday: '1973-03-12'
    },
    {
        name: 'Michael Moore',
        street: 'New street 13',
        city: 'Los Angels',
        state: 'California',
        country: 'USA',
        telephone: '06087134562',
        birthday: '1989-11-01'
    },
];

export default function CauseEffect() {
    const [personSelected, setpersonSelected] = useState<PersonProps>();

    const setPerson = (name: string) => {
        const selectedPerson = people.find(person => person.name === name);
        setpersonSelected(selectedPerson);
    }

    return (
        <Page
            title='Cause Effect'
            desc='Shots the use of patterns'>
            <div className='flex gap-6 w-1/2 text-litext'>
                <div className='w-full p-3 bg-dbgAlt rounded-xl'>
                    <ul>
                        {people.map((person) =>
                            <li key={person.name} onClick={() => setPerson(person.name)}
                                className={`cursor-pointer hover:bg-dbg hover:text-dtext px-2 py-1 rounded-xl ${person.name == personSelected?.name && 'bg-dbuttonbg'}`}
                            >{person.name}</li>
                        )}
                    </ul>
                </div>
                <div className='w-full  p-3 bg-dbgAlt rounded-xl'>
                    {personSelected &&
                        <div>
                            <p>Name : {personSelected.name}</p>
                            <p>Street: {personSelected.street}</p>
                            <p>City: {personSelected.city}</p>
                            <p>State: {personSelected.state}</p>
                            <p>Country: {personSelected.country}</p>
                            <p>Telephone: {personSelected.telephone}</p>
                            <p>Birthday: {personSelected.birthday}</p>
                        </div>}
                </div>
            </div>
        </Page>
    );
}