import React from 'react'

const ProductCard = () => {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="/image/car-img2.jpg"
                        alt="Car Image"
                        className='w-full h-72 object-cover object-center' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn web-btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard