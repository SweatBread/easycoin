// components/FormTextarea.tsx
export default function FormTextarea({
    name,
    label,
    value,
    onChange,
    placeholder
  }: {
    name: string;
    label: string;
    value: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
  }) {
    return (
      <div className="form-control flex flex-col justify-center w-full align-center">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="textarea textarea-bordered"
          placeholder={placeholder}
        />
      </div>
    );
  }