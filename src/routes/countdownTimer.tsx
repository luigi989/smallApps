import { useState } from 'react';
import Page from '../components/Page';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CountdownTimer() {
    const [startDate, setStartDate] = useState(new Date().setHours(0,0,0,0));

    const checkDate = (date: Date | null) => {
        if (date != null) {
            setStartDate(date);
        }
    }
    console.log(startDate);

    return (
        <Page
            title='Countdown Timer'
            desc='Live timer that counts down'>
            <div className='flex w-1/2 text-litext space-x-4'>
                <div className='flex space-x-4'>
                    <p className='text-dtext'>Event: </p>
                    <input type='text' />
                </div>
                <DatePicker selected={startDate} onChange={(date) => checkDate(date)} showTimeSelect timeFormat='HH:mm'
                    timeIntervals={15} timeCaption='time' dateFormat={'MMMM d, yyyy, HH:mm'} />
                <button className='bg-dbuttonbg p-1 '>Start</button>
            </div>
        </Page>
    );
}