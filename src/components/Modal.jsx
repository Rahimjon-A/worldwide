import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import list from "../data/countriesData";

const Modal = () => {
    const { switcher } = useSelector((state) => state.mode);
    const { id } = useParams();
    const data = list.find((item) => item.name === id);
    const navigate = useNavigate();

    if (!data) {
        return <div>Country not found</div>;
    }

    return (
        <div
            className={` ${
                switcher
                    ? "bg-[--dark-el] border-[--dark-bg] text-white"
                    : "bg-white"
            } `}
        >
            <Header />
            <div
                className={`${
                    switcher
                        ? "bg-[--dark-bg] border-[--dark-bg] text-white"
                        : "bg-white"
                } min-h-[93vh]  container mx-auto px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px]`}
            >
                <span className={`flex gap-2 items-center py-[70px]`}>
                    <span
                        onClick={() => navigate(`/`)}
                        className={`${
                            switcher
                                ? "bg-[--dark-el] border-[--dark-bg] text-white"
                                : "bg-white"
                        } border cursor-pointer flex items-center gap-2 py-1 px-6 boxer rounded-md`}
                    >
                        <FaArrowLeftLong />
                        <span>Back</span>
                    </span>
                </span>

                <div className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                            switcher
                                ? "bg-[--dark-bg] border-[--dark-bg] text-white"
                                : "bg-white"
                        }  `}>
                    <div className="md:mr-[50px] lg:mr-[100px] pb-[50px] ">
                        <img
                            className="border  h-[200px] md:h-[400px] lg:h-[400px]  w-full"
                            src={data.flags.png}
                            alt={data.name}
                        />
                    </div>

                    <div>
                        <p className="text-[28px] font-extrabold mb-[20px]">
                            {data.name}
                        </p>
                        
                        <div className="flex flex-col md:flex-row justify-between mb-[50px]">
                            <div className="mb-[40px] ">
                                <p className="font-semibold mb-2">
                                    Native Name:{" "}
                                    <span className="font-thin">
                                        {data.nativeName}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Population:{" "}
                                    <span className="font-thin">
                                        {data.population}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Region:{" "}
                                    <span className="font-thin">
                                        {data.region}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Sub Region:{" "}
                                    <span className="font-thin">
                                        {data.subregion}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Capital:{" "}
                                    <span className="font-thin">
                                        {data.capital}
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">
                                    Top Level Domain:{" "}
                                    <span className="font-thin">
                                        {data.demonym}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Currencies:{" "}
                                    <span className="font-thin">
                                        {data.currencies[0].name}
                                    </span>
                                </p>
                                <p className="font-semibold mb-2">
                                    Languages:{" "}
                                    <span className="font-thin">
                                        {data.languages[0].name}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className=" mb-[50px] md:mb-0 ">
                            <p className="inline-block mr-3 font-semibold mb-2">
                                Border Countries:
                            </p>
                            {data.borders?.length ? (
                                data.borders.map((br, index) => (
                                    <span
                                        key={index}
                                        className={`${
                                            switcher
                                                ? "bg-[--dark-el] border-[--dark-bg] text-white"
                                                : "bg-white"
                                        } text-[13px] px-4 rounded-md boxer font-thin inline-block mr-2`}
                                    >
                                        {br}
                                    </span>
                                ))
                            ) : (
                                <span
                                    className={`${
                                        switcher
                                            ? "bg-[--dark-el] border-[--dark-bg] text-white"
                                            : "bg-white"
                                    } text-[13px] px-2 rounded-md boxer font-thin inline-block mr-2`}
                                >
                                    No border countries
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
