import CategoryType from "@/types/categorycard";
import Image from "next/image";

const CategoryCard = ({ name, image }: CategoryType) => {
  return (
    <div
      className="col-3"
      style={{
        border: "1px solid black",
        borderRadius: "50px",
        height: "400px",
        width: "300px",
        backgroundColor: "lightblue",
      }}
    >
      <Image
        src={image.url}
        alt={name}
        width={300}
        height={300}
        style={{
          borderTopLeftRadius: "2500px",
          borderTopRightRadius: "2500px",
        }}
      />
      <h3>{name}</h3>
    </div>
  );
};

export default CategoryCard;
