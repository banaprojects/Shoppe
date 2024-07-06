import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const MainBody = ({ searchTerm }) => {
  const [prodData, setProdData] = useState([]);
  let message  = "Products"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProdData(data);
        console.log(data);
      });
  }, []);

  const filteredProdData = prodData.filter((shoe) =>
    shoe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-5 px-[5%]">
      <div className="flex justify-between">
        <div className="py-5">
          <h1 className="text-3xl font-semibold">{message} (<span>{filteredProdData.length}</span>)</h1>
        </div>
      </div>
      <div>
        {/* <aside></aside> */}
        <section className="pt-10">
          <ul className="grid grid-cols-4 gap-3">
            {filteredProdData.length > 0 ? (
              filteredProdData.map((prod) => (
                <li
                  key={prod.id}
                  className=" flex flex-col justify-between border-1 rounded-md w-[95%] h-[63vh] bg-[#F5F5F5] hover:text-md hover:w-[99%] hover:h-[66vh] hover:cursor-pointer hover:shadow-lg transition-all"
                >
                  <div>
                    <img src={prod.image} alt="" className="w-[99%] h-[40vh]" />
                  </div>
                  <div className="p-2">
                    <div className="text-md font-medium">{prod.title}</div>
                    <span className="text-2xl font-semibold text-green-700">
                      ${prod.price}
                    </span>
                  </div>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

MainBody.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default MainBody;
