import { useState } from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

export default function BorderRadiousPreviewer() {
  const [radiusLeftUpVertical, setRadiusLeftUpVertical] = useState(0);
  const [radiusLeftUpHorzontal, setRadiusLeftUpHorzontal] = useState(0);
  const [radiusLeftDownVertical, setRadiusLeftDownVertical] = useState(0);
  const [radiusLeftDownHorizontal, setRadiusLeftDownHorizontal] = useState(0);
  const [radiusRightUpVertical, setRadiusRightUpVertical] = useState(0);
  const [radiusRightUpHorzontal, setRadiusRightUpHorzontal] = useState(0);
  const [radiusRightDownVertical, setRadiusRightDownVertical] = useState(0);
  const [radiusRightDownHorizontal, setRadiusRightDownHorizontal] = useState(0);

  const divStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid red',
    borderRadius: `${radiusLeftUpHorzontal}% ${radiusRightUpHorzontal}% ${radiusRightDownHorizontal}% ${radiusLeftDownHorizontal}% / 
                   ${radiusLeftUpVertical}% ${radiusRightUpVertical}% ${radiusRightDownVertical}% ${radiusLeftDownVertical}%`,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`border-radius: "${divStyle.borderRadius}";`);
  }

  const setRadious = (func:() => void, value:string, e:React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
  }
  console.log(radiusLeftUpHorzontal);
  
  return (
    <Page
      title='Border Radious Previewer'
      desc='A preview over how the border radious on a object can be changed'
    >
      <div className='flex items-center gap-5'>
        <div className='flex flex-col items-center gap-5'>
          <div className='grid grid-rows-4 grid-cols-3 gap-2'>
            <label>&nbsp;</label>
            <label className='place-self-center'>Vertical</label>
            <label className='place-self-center'>Horizontal</label>

            <label className='place-self-end'>Border left top:</label>
            <input type="text" onChange={e => setRadiusLeftUpVertical(parseInt(e.target.value))}></input>
            <input type="text" onChange={e => setRadiusLeftUpHorzontal(parseInt(e.target.value))}></input>

            <label className='place-self-end'>Border right top:</label>
            <input type="text" onChange={e => setRadiusRightUpHorzontal(parseInt(e.target.value))}></input>
            <input type="text" onChange={e => setRadiusRightUpVertical(parseInt(e.target.value))}></input>

            <label className='place-self-end'>Border right bottom:</label>
            <input type="text" onChange={e => setRadiusRightDownVertical(parseInt(e.target.value))}></input>
            <input type="text" onChange={e => setRadiusRightDownHorizontal(parseInt(e.target.value))}></input>

            <label className='place-self-end'>Border left bottom:</label>
            <input type="text" onChange={e => setRadiusLeftDownHorizontal(parseInt(e.target.value))}></input>
            <input type="text" onChange={e => setRadiusLeftDownVertical(parseInt(e.target.value))}></input>
          </div>

          <Button onClick={copyToClipboard}>Copy CSS to clipboard</Button>
        </div>
        <div style={divStyle}></div>
      </div>
    </Page>
  );
}

{/* <div className='flex gap-2 justify-center items-center'>
<label >Border left top:</label>
<div className='flex flex-col gap-2'>
  <input type="text" onChange={e => setRadiusLeftUpVertical(parseInt(e.target.value))}></input>
  <input type="text" onChange={e => setRadiusLeftUpHorzontal(parseInt(e.target.value))}></input>
</div>
</div>

<div className='flex gap-2 justify-center items-center'>
<label>Border right top:</label>
<div className='flex flex-col gap-2'>
  <input type="text" onChange={e => setRadiusRightUpHorzontal(parseInt(e.target.value))}></input>
  <input type="text" onChange={e => setRadiusRightUpVertical(parseInt(e.target.value))}></input>
</div>
</div>

<div className='flex gap-2 justify-center items-center'>
<label >Border right bottom:</label>
<div className='flex flex-col gap-2'>
  <input type="text" onChange={e => setRadiusRightDownVertical(parseInt(e.target.value))}></input>
  <input type="text" onChange={e => setRadiusRightDownHorizontal(parseInt(e.target.value))}></input>
</div>
</div>

<div className='flex gap-2 justify-center items-center'>
<label>Border left bottom:</label>
<div className='flex flex-col gap-2'>
  <input type="text" onChange={e => setRadiusLeftDownHorizontal(parseInt(e.target.value))}></input>
  <input type="text" onChange={e => setRadiusLeftDownVertical(parseInt(e.target.value))}></input>
</div>
</div> */}