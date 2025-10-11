import React from "react";

type Props = {
  title: string;
  label: string;
  error: string | null;
  children: React.ReactNode;
};

function FormLayout({ title, label, error, children }: Props) {
  return (
    <main className="grid min-h-[80dvh] place-content-center">
      <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4">
        <legend className="fieldset-legend text-xl">{title}</legend>

        <label>{label}</label>

        {/* ERROR MESSAGE  */}
        {error && <label className="alert alert-error mb-2">{error}</label>}
        {children}
      </fieldset>
    </main>
  );
}

export default FormLayout;
