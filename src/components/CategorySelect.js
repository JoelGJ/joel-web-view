import React, { useRef } from 'react';
import './CategorySelect.css'; // Import CSS file for styling

export default function CategorySelect({ categoryList, handleCategorySelectOnChange }) {

    const selectItemsRef = useRef(null);
    const selectedItemRef = useRef(null);
    const customSelectRef = useRef(null);
    // const customSelects = document.querySelectorAll(".custom-select");

    // customSelects.forEach(function (select) {
    //     // select.style.display = 'none';
    //     const selectSelected = select.querySelector(".select-selected");
    //     const selectItems = select.querySelector(".select-items");

    //     selectSelected.addEventListener("click", function () {
    //         selectItems.classList.add("show");

    //         const selectItem = select.querySelectorAll('.select-item');
    //         selectItem.forEach(function (checkbox) {
    //             checkbox.addEventListener("click", function () {
    //                 selectSelected.textContent = checkbox.textContent;
    //                 selectItems.classList.remove('show');
    //             });
    //         });
    //     });


    //     // when click anywhere outside select, hide drop down
    //     document.addEventListener("click", function (event) {
    //         if (!select.contains(event.target)) {
    //             selectItems.classList.remove("show");
    //         }
    //     });
    // });

    const handleSelectEvent = (value) => {
        selectedItemRef.current.textContent = value;
        selectedItemRef.current.style.color = '#000';
        selectedItemRef.current.style.fontWeight = 'bold';
        handleCategorySelectOnChange(value);
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
                    <div ref={selectedItemRef} className="selected-item">Select Category</div>
                    <div ref={selectItemsRef} className="select-items">
                        {categoryList.map((value, index) => <div key={index} className="select-item" onClick={() => handleSelectEvent(value)}><label>{value}</label></div>)}
                    </div>
                </div>
            </div>
        </>
    );
}
