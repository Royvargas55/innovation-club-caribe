import React from 'react';

// Styles
import '../styles/components/SelectionBoxes.scss'

const SelectionBoxes = ({handleChangeValue}) => {
    return (
        <>  
            <div className="selectionboxes" onChange={handleChangeValue}> 
                <div className="selectionboxes__input">
                    <input 
                        type="radio"
                        id="scholarship50" 
                        name="scholarship" 
                        value='scholarship50'     
                    />
                    <label for="scholarship50">Beca 50</label>
                </div>
                <div className="selectionboxes__input">
                    <input 
                        type="radio" 
                        id="scholarship100" 
                        name="scholarship" 
                        value='scholarship100'

                    />
                    <label for="scholarship100">Beca 100</label>
                </div>
                <div className="selectionboxes__input">
                    <input 
                        type="radio" 
                        id="none" 
                        name="scholarship" 
                        value='none'     
                    />
                    <label for="none">Ninguno</label>
                </div>
            </div>
        </>
    );
};

export default SelectionBoxes;
