export default function ContentSchedulingSection() {
    return (
        <section className="py-16">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
                {/* First Content Block */}
                <div className="flex w-full [&>*]:flex-1 justify-between ">
                    <div className=" p-8 mb-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Stay Consistent with Content
                            <br />
                            Scheduling & Reminders
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            Managing social media can be challenging, but
                            IntaSync simplifies it with automatic scheduling and
                            email reminders, ensuring you never miss a post and
                            always stay engaged with your audience.
                        </p>
                    </div>
                    <div className="bg-white w-md min-h-96"></div>
                </div>

                {/* Blue Banner */}

                {/* Second Content Block */}
                <div className="flex w-full flex-row-reverse [&>*]:flex-1 justify-between ">
                    <div className=" p-8 mb-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Stay Consistent with Content
                            <br />
                            Scheduling & Reminders
                        </h2>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                            Managing social media can be challenging, but
                            IntaSync simplifies it with automatic scheduling and
                            email reminders, ensuring you never miss a post and
                            always stay engaged with your audience.
                        </p>
                    </div>
                    <div className="bg-white w-md min-h-96"></div>
                </div>
            </div>
        </section>
    );
}
