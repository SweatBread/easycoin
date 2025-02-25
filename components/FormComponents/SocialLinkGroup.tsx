import FormInput from "./FormInput";

// components/SocialLinksGroup.tsx
export default function SocialLinksGroup({
    links,
    formData,
    errors,
    handleChange
  }: {
    links: Array<{ name: string; label: string; placeholder: string }>;
    formData: any;
    errors: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <FormInput
            key={link.name}
            name={link.name}
            label={link.label}
            value={formData[link.name]}
            onChange={handleChange}
            error={errors[link.name]}
            placeholder={link.placeholder}
          />
        ))}
      </div>
    );
  }