"use client";
import Link from "next/link";
import React from "react";
import InputBox from "@/components/InputBox";

const Login = () => {
    return (
        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl my-12">
            <div class="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: "url('/image/car-img.jpg')", }}></div>

            <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div class="flex justify-center mx-auto">
                    <img class="w-auto h-16" src="/image/logo.png" alt="" />
                </div>

                <h1 class="mt-1 text-xl text-center text-gray-600 dark:text-gray-200">User Register</h1>
                <p class="mt-2 text-2xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>

                <div className="grid grid-cols-2 gap-2">
                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="name">Name</label>
                        <input id="name" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="dob">Contact Number</label>
                        <input id="dob" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
                        <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="dob">Date Of Birth</label>
                        <input id="dob" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="date" />
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                        <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="confirmPassword">Confirm Password</label>
                        <input id="confirmPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>
                </div>

                <div class="mt-6">
                    <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Register
                    </button>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link href="/auth/login" class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or Login</Link>

                    <span class="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;