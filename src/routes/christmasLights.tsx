import { useState } from 'react';
import Page from '../components/Page';

interface LightProps {
    color?: string
    intensity?: number
    size?: number
    duration?: number
    className?: string
}

export default function ChristmasLights() {
    const [lightsOn, setLightsOn] = useState(true);
    const [speed, setSpeed] = useState(1);

    const Light = ({ color, size, duration, className }: LightProps) => {
        return (
            <div className={`w-10 h-10 rounded-full ${color} ${className}`}>
            </div>
        )
    }

    return (
        <Page
            title='Christmas lights'
            desc='Shows a mesmerizing light display'>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-10 bg-black p-10 rounded-xl'>
                    <Light size={10} color='bg-red' className={lightsOn ? `animate-[blinkingRed_1s_linear_infinite]` : ''} />
                    <Light size={10} color='bg-blue' className={lightsOn ? `animate-[blinkingBlue_1s_linear_infinite] animation-delay-1000` : ''} />
                    <Light size={10} color='bg-green' className={lightsOn ? `animate-[blinkingGreen_1s_linear_infinite]` : ''} />
                    <Light size={10} color='bg-red' className={lightsOn ? `animate-[blinkingRed_1s_linear_infinite] animation-delay-1000` : ''} />
                    <Light size={10} color='bg-blue' className={lightsOn ? `animate-[blinkingBlue_1s_linear_infinite]` : ''} />
                    <Light size={10} color='bg-green' className={lightsOn ? `animate-[blinkingGreen_1s_linear_infinite] animation-delay-1000` : ''} />
                    <Light size={10} color='bg-red' className={lightsOn ? `animate-[blinkingRed_1s_linear_infinite]` : ''} />
                </div>
                <div className='flex gap-2'>
                    <button className={`${lightsOn ? 'bg-dbuttonbg' : 'bg-transparent'} px-2 py-1 rounded-md border-2 border-solid border-dbuttonbg hover:bg-dbuttonbg `}
                        onClick={() => setLightsOn(true)}>On</button>
                    <button className={`${!lightsOn ? 'bg-dbuttonbg' : 'bg-transparent'} px-2 py-1 rounded-md border-2 border-solid border-dbuttonbg hover:bg-dbuttonbg`}
                        onClick={() => setLightsOn(false)}>Off</button>
                    <div className='flex items-center space-x-2'>
                        <label htmlFor='speed'>Speed:</label>
                        <input className='text-black' type='number' id='speed' min={1} max={5} placeholder='from 1 until 5' />
                    </div>
                    <button className={`px-2 py-1 rounded-md border-2 border-solid border-dbuttonbg hover:bg-dbuttonbg`}>Run</button>
                </div>
            </div>
        </Page>
    );
}