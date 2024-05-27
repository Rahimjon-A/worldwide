import Cards from './Cards';

const Content = ({ dataSearch, setModal, handleChange }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-[70px] sm:px-[30px] md:px-[50px] lg:px-[100px]  lg:container mx-auto  justify-between  gap-[40px]">
            {dataSearch.map((item) => (
                <div key={item.code || item.name}> 
                    <Cards
                        item={item}
                        setModal={setModal}
                        handleChange={handleChange}
                    />
                </div>
            ))}
        </div>
    );
}

export default Content;
