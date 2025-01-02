interface InputProps {
    type: string;
    placeholder: string;
}

export const Input = ({ type, placeholder }: InputProps) => {
    return (
        <div className="bg-slate-800 py-3 w-full max-w-md mx-auto text-center border-2 border-blue-500 rounded-xl">
            <input
                className="w-full px-3 text-center placeholder-text bg-slate-800 text-white outline-none"
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
};
