import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

const Home = () => {
    return (
        <section>
            <div className="bg-gray-100">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Welcome To My Practise Smart Home</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">This is my first website by using framework & react router or tailwind framework</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/shop">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
                            >
                                Shop Now
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                type="button"
                                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
                            >
                                Reade more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={heroImg} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default Home;