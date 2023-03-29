const Logo = () => {
    return (
        <div className="flex flex-col justify-center items-center h-20 w-20 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800">
            <div className="flex flex-col justify-center items-center h-16 w-16 bg-white rounded-full">
                <span className="text-3xl bg-gradient-to-r bg-clip-text from-indigo-500 to-black dark:text-black">
                    LM
                </span>
            </div>
        </div>
    );
};

export default Logo;