"use client"
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="footer-section  dark:bg-gray-900">
                <div class="container py-14 mx-auto">
                    <div class="lg:flex">
                        <div class="w-full -mx-6 lg:w-2/5">
                            <div class="px-6">
                                <a href="#">
                                    <img src="/image/logo.png" class="w-auto h-16" alt="Logo" loading="lazy" />
                                    {/* <h4 className='text-4xl'>B&K Garage</h4> */}
                                </a>
                                <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">B&K Garage: Delivering Exceptional Car Care and Premium Services.</p>
                            </div>
                        </div>

                        <div class="mt-6 lg:mt-0 lg:flex-1">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Usefull Links</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">About Us</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Privacy Policy</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Terms & Conditions</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Blog</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Services</h3>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Full Car Service</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Partial Car Service</a>
                                    <a href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Custome Car Service</a>
                                </div>

                                <div>
                                    <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                                    <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 9876543210</span>
                                    <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">bandk@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                    <div className='flex justify-between mr-10'>
                        <p class="text-center text-gray-500 dark:text-gray-400">© B&K Garage 2024 - All rights reserved</p>

                        <div class="flex">
                            <a href='https://x.com/'
                                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>
                            <a href='https://www.youtube.com/'
                                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </a>
                            <a href='https://www.facebook.com/'
                                class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    class="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer