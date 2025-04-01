export const InfoBanner = () => {

    return (

        <>

            <div className="rounded-md border-l-4 border-black bg-red-500 p-4">
                <div className="flex items-center justify-between space-x-4">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-center md:text-xl font-bold animate-pulse">
                            Website's New Version Launched! Checkout:  <a href="https://www.studywithshubh.tech">studywithshubh.tech</a>
                        </p>
                    </div>
                    <div>
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-6 w-6 cursor-pointer"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg> */}
                    </div>
                </div>
            </div>




        </>

    )

}
