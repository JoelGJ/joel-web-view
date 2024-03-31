import React, { useRef, useState } from 'react';
import './CategorySelect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function CategorySelect({ categoryList, handleCategorySelectOnChange }) {

    const [activeItem, setActiveItem] = useState(null);

    const selectItemsRef = useRef(null);
    const selectedItemRef = useRef(null);
    const customSelectRef = useRef(null);

    const handleSelectEvent = (event, value) => {
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        selectedItemRef.current.textContent = value;
        selectedItemRef.current.style.color = '#000';
        selectedItemRef.current.style.fontWeight = 'bold';
        handleCategorySelectOnChange(value);

        setActiveItem(event.target);
        event.target.classList.add('active');
    }

    

    const customSelectOnClick = () => {
        selectItemsRef.current.classList.toggle('show');

        window.onclick = (event) => {
            if (!customSelectRef.current.contains(event.target)) {
                selectItemsRef.current.classList.remove('show')
            }
        }
    }

    return (
        <>
            <div className='container'>
                <div ref={customSelectRef} className="custom-select form-control" onClick={() => customSelectOnClick()}>
                    <span className='downward-arrow'><FontAwesomeIcon icon={faAngleDown}/></span>
                    <div ref={selectedItemRef} className="selected-item">Select Category</div>
                    <div ref={selectItemsRef} className="select-items">
                        {categoryList.map((value, index) => <div key={index} className="select-item" onClick={(event) => handleSelectEvent(event, value)}>{value}</div>)}
                    </div>
                </div>
            </div>
        </>
    );
}
