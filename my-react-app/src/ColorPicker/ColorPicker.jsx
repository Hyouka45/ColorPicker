
import React,{useState} from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = () => {
    const [color, setColor]= useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value);

    }

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Color picker</h1>
        <div className={styles.contain} style={{backgroundColor: color }}>
            <p>Selected Color: {color}</p>
        </div>
        <label className={styles.input}>Select a Color</label>
        <input className={styles.ColorPicker} type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker
