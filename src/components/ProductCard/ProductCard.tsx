interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  cost: number;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className="md:w-[280px] md:h-[430px] flex flex-col rounded-lg bg-base-100 shadow-xl cursor-pointer hover:scale-110 transition-all ease-in-out">
      <figure>
        <img
          src={props.image}
          alt={props.name}
          className="rounded-t-lg w-full"
        />
      </figure>
      <p className="text-xs badge badge-secondary rounded-l-none ">{props.category}</p>
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        <p className="text-[8px]">ID: {props.id}</p>
      </div>
      <button className="btn btn-primary rounded-t-none w-full">Buy for ${props.cost}</button>
    </div>
  );
};

export default ProductCard;
