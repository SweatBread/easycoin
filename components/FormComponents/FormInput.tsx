// components/FormInput.tsx
export default function FormInput({
    name,
    label,
    type = 'text',
    value,
    onChange,
    error,
    placeholder
  }: {
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
  }) {
    return (
      <div className="form-control flex flex-col justify-center w-full align-center">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input input-bordered ${error ? 'input-error' : ''}`}
        />
        {error && (
          <label className="label">
            <span className="label-text-alt text-error">{error}</span>
          </label>
        )}
      </div>
    );
  }