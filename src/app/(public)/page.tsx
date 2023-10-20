import { request } from "@/server";
import { Metadata } from "next";
import { Fragment } from "react";
import CategoryCard from "@/components/card/Category";
import CategoryType from "@/types/categorycard";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce forever",
};

const Home = async() => {
  const {data} = await request.get("category")
  console.log(data);
  
  return(
  <Fragment>
    <section>
      <div className="row grid grid-rows-4 gap-10">
        {data.map((el) => {
          <CategoryCard key={el._id} {...el}/>;
        })}
      </div>
    </section>
  </Fragment>
  )
}

export default Home
