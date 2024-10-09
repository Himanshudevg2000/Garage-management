"use client";
import Link from "next/link";
import React from "react";
import InputBox from "@/components/InputBox";

const Login = () => {
    return (
        <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white shadow-md px-10 pb-16 pt-8 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                            <h1 className="text-3xl font-bold mb-3">Create our account</h1>
                            <form method="POST" onSubmit={""}>
                                <InputBox type="text" name="name" placeholder="Full Name" />
                                <InputBox type="number" name="contact" placeholder="Contact Number" />
                                <InputBox type="email" name="email" placeholder="Email" />
                                <InputBox
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <div className="mb-10">
                                    <input
                                        type="submit"
                                        value="Sign In"
                                        className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                                    />
                                </div>
                            </form>

                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5 text-black">Account already exist. </span>
                                <Link href={"/auth/login"}
                                    className="text-primary hover:underline" >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;