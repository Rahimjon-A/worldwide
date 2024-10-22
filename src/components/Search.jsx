import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import list from '../data/countriesData';
import { useSelector } from 'react-redux';

const Search = ({ searchText, menuItems, filterItems, setDataSearch }) => {
  const { switcher } = useSelector((state) => state.mode);

  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Filter by Region');

  return (
    <div
      className={`flex flex-col justify-start sm:justify-between sm:flex-row my-[50px] gap-[30px]  container mx-auto  px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px]  `}
    >
      <div
        className={` flex boxer ${
          switcher ? ' bg-[--dark-el] border-[--dark-bg] text-white ' : 'bg-white'
        } duration-300 rounded-md border w-[320px]  gap-4 items-center px-[15px] py-[10px]  `}
      >
        <AiOutlineSearch className="text-[18px] "></AiOutlineSearch>
        <input
          onChange={searchText}
          className=" bg-inherit outline-none w-full"
          type="text"
          placeholder="Search for a country"
        />
      </div>
      <div
        onClick={() => setShow((prev) => !prev)}
        className={`border relative  cursor-pointer w-[180px] boxer  ${
          switcher ? 'bg-[--dark-el] border-[--dark-bg] text-white ' : 'bg-white'
        } duration-300 rounded-md flex flex-col items-center justify-center px-[15px] py-[10px] `}
      >
        <p> {value} </p>
        <div
          className={` ${
            show ? 'block' : 'hidden'
          } bg-inherit z-30 border border-[--dark-el] w-full absolute top-[50px] rounded-md `}
        >
          <div
            onClick={() => {
              setDataSearch(list), setValue('Filter by Region');
            }}
            className={`cursor-pointer ${
              switcher ? 'hover:bg-[--dark-bg] ' : ' hover:bg-[--light-input] bg-white '
            } z-10 relative transition-all py-1 pl-[20px] `}
          >
            All{' '}
          </div>

          {menuItems.map((val, index) => (
            <div
              key={index}
              onClick={() => {
                filterItems(val), setValue(val);
              }}
              className={`cursor-pointer py-1 pl-[20px] ${
                switcher
                  ? ' bg-[--dark-el] border-[--dark-bg] hover:bg-[--dark-bg] '
                  : ' hover:bg-[--light-input] bg-white '
              } z-40 relative `}
            >
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
