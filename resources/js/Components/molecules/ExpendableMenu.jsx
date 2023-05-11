import React, { useEffect, useState } from 'react';
import CircularButton from '../atoms/CircularButton';
import InputWithLabel from '../atoms/InputWithLabel';

const ExpendableMenu = ({changeAddPointState, changeDescriptionPoint, changeNamePoint}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        isOpen ? changeAddPointState(false) : changeAddPointState(true);
    }

    const handleChangesName = (event) => {
        setName(event.target.value);
    }

    const handleChangesDescription = (event) => {
        setDescription(event.target.value);
    }

    return (
        <>
            <div onClick={() => { toggleMenu() }} className='absolute bottom-20'>
                <CircularButton></CircularButton>
            </div>
            {
                isOpen && <div className="lg:absolute lg:w-auto lg:h-full lg:right-0 bg-white lg:flex lg:flex-col lg:p-4 lg:gap-10">
                    <InputWithLabel label='Nom du point' placeholder='Nom du point' onChange={handleChangesName}></InputWithLabel>
                    <InputWithLabel label='Description du point' placeholder='Description du point' onChange={handleChangesDescription}></InputWithLabel>
                    <div className='flex justify-center'>
                        <button onClick={() => { setIsOpen(false); changeNamePoint(name); changeDescriptionPoint(description); setName(null); setDescription(null);  }} className="w-3/4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                            Cliquer sur la map
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default ExpendableMenu;