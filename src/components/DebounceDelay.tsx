const DebounceDelay = () => {

    return (
        <div className="bg-white xl:col-start-5 col-start-3 xl:col-span-5 col-span-4 self-center rounded-2xl py-4 px-4 shadow-lg grid grid-cols-2 row-start-2 items-center">
        <label htmlFor="debounceDelay" className="self-center font-semibold">Debounce Timing</label>
        <div className="flex">
            <input
                id="debounceDelay"
                type="number"
                className="text-lg w-full"
            />
            <p className="self-end">milliseconds</p>
        </div>
        </div>
    );
};

export default DebounceDelay;