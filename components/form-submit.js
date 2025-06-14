"use client";

const { useFormStatus } = require("react-dom");

export const FormSubmit = () => {
  const { pending } = useFormStatus();

  if (pending) {
    return <span>Creating Post...</span>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
};
