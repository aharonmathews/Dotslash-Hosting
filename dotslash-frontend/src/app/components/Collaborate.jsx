const Collaborate = () => {
    return (
        <section className="bg-black text-white py-20 px-5 text-center">
            <h2 className="text-4xl font-bold mb-10">COLLABORATE WITH US</h2>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="bg-yellow-600 p-8 rounded-lg w-full md:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4">For Sponsors</h3>
                    <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo.
                    </p>
                    <a href="#" className="text-black text-xl font-bold">→</a>
                </div>

                <div className="bg-yellow-600 p-8 rounded-lg w-full md:w-1/3">
                    <h3 className="text-2xl font-semibold mb-4">For Clubs</h3>
                    <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet consectetur. Ut nec gravida nulla justo.
                    </p>
                    <a href="#" className="text-black text-xl font-bold">→</a>
                </div>
            </div>
        </section>
    );
};

export default Collaborate;
