import React from "react";

interface DebounceDelayProps {
    delayTime: number;
    setDelayTime: React.Dispatch<React.SetStateAction<number>>;
}

const DebounceDelay: React.FC<DebounceDelayProps>  = ({ delayTime, setDelayTime }) => {
    return (
        <div className="bg-white rounded-2xl py-4 px-4 shadow-lg grid xl:grid-cols-2 items-center gap-4">
        <label htmlFor="debounceDelay" className="self-center font-semibold text-center xl:text-left">Debounce Timing</label>
        <div className="grid grid-cols-2 gap-4">
            <input
                id="debounceDelay"
                type="number"
                className="text-lg w-full text-end bg-slate-200 rounded-lg"
                defaultValue={delayTime}
                onChange={(e) => { 
                    setDelayTime(parseInt(e.target.value));
                }}
            />
            <p className="self-end">milliseconds</p>
        </div>
        </div>
    );
};

export default DebounceDelay;