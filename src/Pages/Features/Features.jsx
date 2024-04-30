
const Features = () => {
    return (
        <div>
            <section className="dark:text-white-500">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-white-500">About Our Products</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-white-600">We provide best quality product and service for all over the world.</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-white-900">Definition of our product</h3>
                            <p className="mt-3 text-lg dark:text-white-600">Painting is a form of artistic expression involving the application of pigment to a surface, typically with brushes or other tools.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-white-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-white-900">Exploring the Essence of Craftsmanship</h4>
                                        <p className="mt-2 dark:text-white-600">Artisanal creations encompass handmade items crafted with meticulous attention to detail, reflecting the skill, tradition, and passion of the artisan.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-white-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-white-900">Understanding the Aesthetic and Functional Dimensions</h4>
                                        <p className="mt-2 dark:text-white-600">Art and craft products marry aesthetic appeal with practical functionality, blurring the lines between artistry and utility.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-white-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-white-900">Unveiling the Intersection of Tradition, Innovation</h4>
                                        <p className="mt-2 dark:text-white-600">Artisanal workmanship thrives at the crossroads of tradition, innovation, and creativity, weaving together time-honored techniques with contemporary flair.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://i.ibb.co/T0Kw7jC/maxresdefault.jpg" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-white-500" />
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default Features;