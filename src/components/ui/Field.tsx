import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

const fieldBase =
  "w-full bg-transparent border border-hairline focus:border-gold px-4 py-3 text-ink placeholder:text-muted outline-none transition-colors";

export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm text-ink2 mb-2">
      {children}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={fieldBase} {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${fieldBase} min-h-[120px] resize-y`} {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={`${fieldBase} appearance-none`} {...props} />
  );
}

export function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div className="mb-6">{children}</div>;
}
