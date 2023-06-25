import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/fetchProducts";
import { ProductCard } from "../../components";
import { Link, useParams } from "react-router-dom";
import { logo } from "../../assets";
import { categoryNames } from "../../constants";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  cost: number;
  img: {
    url: string;
  };
  category: string;
}


const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (categoryId: string | undefined) => {
    try {
      const data = await fetchProducts();

      if (categoryId) {
        const filteredProducts = data.filter(
          (product: { category: string; }) => product.category === categoryId
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(categoryId);
  }, [categoryId]);

  return (
    <main className="bg-shapes  p-[20px] md:p-[80px] flex flex-col items-center justify-center min-h-screen mb-[50px]">
      {isLoading ? (
        <>
          <img src={logo} alt="logo" className="w-20 h-20" />
          <span className="loading loading-bars loading-lg text-yellow"></span>
        </>
      ) : (
        <>
          <span className="flex flex-col justify-center md:flex-row items-center gap-2 font-black my-10 text-center mt-[70px]">
            <h1 className="uppercase text-5xl">Products</h1>
            <p className="badge badge-secondary">NEW</p>
            <div className="dropdown hidden md:flex mt-5 md:mt-0 md:ml-10">
              <label tabIndex={0} className="btn">
                Category <BsFillArrowDownCircleFill className="animate-bounce"/>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-[50px]"
              >
                {categoryNames.map((category) => (
                  <Link to={`/${category.id}`} key={category.id}>
                    <li className="menu-item">
                      <a>{category.title}</a>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </span>
          <div
            className="flex flex-row flex-wrap justify-center items-center gap-12 max-w-[1400px]"
          >
            {products.map((product ) => (
              <Link to={`item/${product._id}`}>
                <ProductCard
                  key={product._id}
                  name={product.name}
                  cost={product.cost}
                  image={product.img.url}
                  category={product.category}
                  id={product._id}
                />
              </Link>
            ))}
          </div>
          <a
            href="https://github.com/speedbuild98/PreEntrega2Gallardo"
            target="_blank"
          >
            <button className="btn btn-accent mt-10">
              View the code on <FaGithub className="text-xl"/>
            </button>
          </a>
        </>
      )}
    </main>
  );
};

export default ItemListContainer;
