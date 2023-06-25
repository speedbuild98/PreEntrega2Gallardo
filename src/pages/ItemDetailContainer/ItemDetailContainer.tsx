import { Link, useParams } from "react-router-dom";
import { logo } from "../../assets";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
import {BiArrowBack} from "react-icons/bi";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [productData, setProductData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        const matchedProduct = data.find((producto: { _id: string | undefined; }) => producto._id === itemId);
        setProductData(matchedProduct);
        console.log("Fetch of product with the same ID ok!");
        setIsLoading(false);
        console.log("Matched Product ----->", matchedProduct);
      } catch (error) {
        console.log("Error:", error);
        setIsLoading(false);
      }
    };

    console.log("ID: " + itemId);
    fetchData();
  }, [itemId]);

  return (
    <main className="bg-sprinkle p-[20px] md:p-[80px] flex flex-col items-center justify-center min-h-screen">
      {isLoading ? (
        <>
          <img src={logo} alt="logo" className="w-20 h-20" />
          <span className="loading loading-bars loading-lg text-yellow"></span>
        </>
      ) : (
        <>        
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={productData?.img.hdUrl} alt={productData?.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{productData?.name}</h2>
            <p>{productData?.category}</p>
            <div className="card-actions justify-end items-center">
              <button className="btn btn-primary animate-pulse">buy for ${productData?.cost}</button>
            </div>
          </div>
        </div>

        <Link to="/">
          <button className="btn btn-neutral mt-10">
            <BiArrowBack />
            BACK</button>
        </Link>
        </>
      )}
    </main>
  );
};

export default ItemDetailContainer;
