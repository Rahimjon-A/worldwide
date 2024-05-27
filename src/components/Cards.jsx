import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cards = ({ item}) => {
    const { switcher } = useSelector(state => state.mode);
const navigate= useNavigate()
    return (
        <div
            onClick={()=>navigate(`/modal/${item.name}`)}
            className={`${switcher ? "bg-[--dark-el] border-[--dark-bg] text-white " : "bg-white "} cursor-pointer flex flex-col justify-end hover:scale-105 duration-300 rounded-lg overflow-hidden boxer`}
        >
            <div className='mb-[20px] border-b border-[--dark-bg]'>
                <img className='w-full h-[250px]' src={item.flags.png} alt={item.name} />
            </div>

            <div className='px-4 pb-[40px]'>
                <p className='mb-3 font-bold text-[18px]'>{item.name}</p>
                <p className='font-semibold'>Population: <span className='font-light'>{item.population}</span></p>
                <p className='font-semibold'>Region: <span className='font-light'>{item.region}</span></p>
                <p className='font-semibold'>Capital: <span className='font-light'>{item.capital}</span></p>
            </div>
        </div>
    );
}

export default Cards;
