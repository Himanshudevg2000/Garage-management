import ProductCard from "@/components/ProductCard";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <div className='container mx-auto'>
        <section className="home-page-section-1 section-padding">
          <div className="car-number-section p-7 lg:px-12 rounded-xl">
            <h3 className="text-xl font-semibold text-center">Enter your car number here and get our car details</h3>
            <div className="grid grid-flow-col mt-0 lg:mt-4">
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl text-xl car-number-input" />
              <button className="btn btn-search">Search</button>
            </div>
          </div>
        </section>

        <section className="home-page-section-2  section-padding">
          <h4 className="text-center text-4xl font-bold mb-6">Our Features</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card shadow-md rounded-xl mx-4 my-4 md:my-0">
              <article className="card-body flex flex-col items-center justify-center text-center">
                <figure>
                  <img src="/image/fast-delivery.png" className="w-32 h-24 object-contain" alt="Next Day Delivery" loading="lazy" />
                </figure>
                <header>
                  <h4 className="text-2xl font-semibold">Fast Delivery</h4>
                  <p className="mt-2">
                    New number plate rules have been introduced in 2021 to boost road safety with drivers issued heavy fines for breaking the rules.
                  </p>
                </header>
              </article>
            </div>
            <div className="card shadow-md rounded-xl mx-4 my-4 md:my-0">
              <article className="card-body flex flex-col items-center justify-center text-center">
                <figure>
                  <img src="/image/dvla.webp" className="w-32 h-24 object-contain" alt="DVLA Registered" loading="lazy" />
                </figure>
                <header>
                  <h4 className="text-2xl font-semibold">DVLA Registered</h4>
                  <p className="mt-2">
                    New number plate rules have been introduced in 2021 to boost road safety with drivers issued heavy fines for breaking the rules.
                  </p>
                </header>
              </article>
            </div>
            <div className="card shadow-md rounded-xl mx-4 my-4 md:my-0">
              <article className="card-body flex flex-col items-center justify-center text-center">
                <figure>
                  <img src="/image/guaranteed.png" className="w-32 h-24 object-contain" alt="1 Year Warranty" loading="lazy" />
                </figure>
                <header>
                  <h4 className="text-2xl font-semibold">Guaranteed Services</h4>
                  <p className="mt-2">
                    New number plate rules have been introduced in 2021 to boost road safety with drivers issued heavy fines for breaking the rules.
                  </p>
                </header>
              </article>
            </div>
          </div>
        </section>

        <section className="home-page-section-3 section-padding">
          <h4 className="text-center text-4xl font-bold mb-6">Our Category</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card mx-4 my-4 md:my-0">
              <img src="/image/category1.webp" className="w-full object-contain" alt="Full Car Services" loading="lazy" />
              <button className="btn web-btn1">Full Car Services</button>
            </div>
            <div className="card mx-4 my-4 md:my-0">
              <img src="/image/category2.webp" className="w-full object-contain" alt="Partial Car Service" loading="lazy" />
              <button className="btn web-btn1">Partial Car Service</button>
            </div>
            <div className="card mx-4 my-4 md:my-0">
              <img src="/image/category3.webp" className="w-full object-contain" alt="Custome Car Service" loading="lazy" />
              <button className="btn web-btn1">Custome Car Service</button>
            </div>
          </div>
        </section>

        <section className="home-page-section-3 section-padding">
          <h4 className="text-center text-4xl font-bold mb-6">Our Products</h4>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
}
