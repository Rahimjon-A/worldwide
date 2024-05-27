import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../reducers/Theme";

const Header = () => {
    const dispatch = useDispatch();
    const { switcher } = useSelector((state) => state.mode);

    const handeClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <div
            className={`border-b  sticky z-50  top-0 ${
                switcher
                    ? "bg-[--dark-el] border-[--dark-bg] text-white "
                    : "bg-white "
            }  duration-300 text-[--light-text] [box-shadow:0_2px_6px_-1px_rgba(0,_0,_0,_0.1),_0_2px_2px_-1px_rgba(0,_0,_0,_0.06)] `}
        >
            <div
                className={`px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px]  container mx-auto flex items-center justify-between py-[15px] `}
            >
                <p className=" text-[18px] sm:text-[24px] font-extrabold ">
                    Where in the world?
                </p>
                <span
                    onClick={handeClick}
                    className={`flex items-center gap-2 font-medium cursor-pointer duration-300 hover:opacity-70 `}
                >
                    {switcher ? (
                        <MdOutlineDarkMode className="text-[24px] duration-300 "></MdOutlineDarkMode>
                    ) : (
                        <CiLight className="text-[28px] duration-300 "></CiLight>
                    )}
                    {switcher ? "Light mode" : "Dark mode"}
                </span>
            </div>
        </div>
    );
};

export default Header;
