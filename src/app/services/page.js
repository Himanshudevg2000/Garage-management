import ProductCard from "@/components/ProductCard";

const Services = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold my-6">Available Services</h2>
        <div className="grid grid-cols-3 my-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}

export default Services;