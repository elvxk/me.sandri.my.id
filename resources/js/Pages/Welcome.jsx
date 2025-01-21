import { Head } from "@inertiajs/react";

const Welcome = ({ config }) => {
    return (
        <>
            <Head title="elvxk" />
            <div className="flex flex-col justify-center items-center w-full min-h-screen">
                {config.map((item, index) => {
                    return <h1 key={index}>{item.value}</h1>;
                })}
                <h1 className="font-bold text-2xl">Hello Jagoan</h1>
            </div>
        </>
    );
};
export default Welcome;
