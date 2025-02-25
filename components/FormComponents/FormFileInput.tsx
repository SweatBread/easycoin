// components/FormFileInput.tsx
export default function FormFileInput({
  name,
  label,
  onChange,
  error
}: {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="file"
        className="file-input file-input-bordered w-full"
        onChange={onChange}
      />
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}