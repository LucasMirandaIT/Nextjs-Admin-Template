interface InputProps {
    type?: string,
    label: string,
    value: any,
    required?: boolean,
    width?: string,
    onBlur?: (value: any) => void
    onChange?: (value: any) => void
};

const Input = ({ type = 'text', label, required, width = 'w-full', value, onBlur, onChange, ...props }: InputProps) => {
    return (
        <div className={`flex flex-col mt-4 ${width}`}>
            <label htmlFor="">{label}</label>
            <input onBlur={onBlur} className="px-4 py-3 bg-gray-200 rounded-lg mt-2 border-2 focus:border-blue-500 focus:bg-white focus:outline-none" type={type} required={required} value={value} onChange={(e) => onChange?.(e.target.value)}/>
        </div>
    );
};

export default Input;