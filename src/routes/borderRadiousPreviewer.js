import { useState } from 'react';

export default function BorderRadiousPreviewer() {
  const [radiusLeftUpVertical, setRadiusLeftUpVertical] = useState(30);
  const [radiusLeftUpHorzontal, setRadiusLeftUpHorzontal] = useState(30);
  const [radiusLeftDownVertical, setRadiusLeftDownVertical] = useState(30);
  const [radiusLeftDownHorizontal, setRadiusLeftDownHorizontal] = useState(30);
  const [radiusRightUpVertical, setRadiusRightUpVertical] = useState(30);
  const [radiusRightUpHorzontal, setRadiusRightUpHorzontal] = useState(30);
  const [radiusRightDownVertical, setRadiusRightDownVertical] = useState(30);
  const [radiusRightDownHorizontal, setRadiusRightDownHorizontal] = useState(30);

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

  return (
    <div className="content text-light">
        <h2>Border Radious Previewer</h2>
        <label>A preview over how the border radious on a object can be changed.</label>
        <div className='radiousPreview'>
          <div className='grid'>
            <label className='grid-header2'>Vertical</label>
            <label className='grid-header3'>Horizontal</label>

            <label >Border left up:</label>
            <input type="text" onChange={e => setRadiusLeftUpVertical(e.target.value)}></input>
            <input type="text" onChange={e => setRadiusLeftUpHorzontal(e.target.value)}></input>

            <label>Border right up:</label>
            <input type="text" onChange={e => setRadiusRightUpHorzontal(e.target.value)}></input>
            <input type="text" onChange={e => setRadiusRightUpVertical(e.target.value)}></input> 

            <label >Border right down:</label>
            <input type="text" onChange={e => setRadiusRightDownVertical(e.target.value)}></input>
            <input type="text" onChange={e => setRadiusRightDownHorizontal(e.target.value)}></input>  
            
            <label>Border left down:</label>
            <input type="text" onChange={e => setRadiusLeftDownHorizontal(e.target.value)}></input>
            <input type="text" onChange={e => setRadiusLeftDownVertical(e.target.value)}></input>   
            
            <button className='grid-button' onClick={copyToClipboard}>Copy CSS to clipboard</button>
          </div>
          <div style={divStyle}></div>
        </div>
    </div>
  );
}