// components/RevokeCheckbox.tsx
export default function RevokeCheckbox({
    name,
    label,
    description,
    checked,
    onChange
  }: {
    name: string;
    label: string;
    description: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    return (
      <div className="card border border-primary shadow-md shadow-primary">
        <div className="card-body p-4">
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2 p-0">
              <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="checkbox checkbox-secondary"
              />
              <span className="label-text font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">{label}</span>
            </label>
          </div>
          <p className="text-sm text-base-content opacity-75 mt-2">{description}</p>
        </div>
      </div>
    );
  }