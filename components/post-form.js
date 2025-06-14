"use client";

import { useActionState } from "react";
import { FormSubmit } from "@/components/form-submit";
import { createPost } from "@/actions/posts";

export const PostForm = () => {
  const [state, action] = useActionState(createPost, { errors: [] });
  const hasErrors = state.errors.length > 0;
  return (
    <>
      <h1>Create a new post</h1>
      <form action={action}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {hasErrors && (
          <ul className="form-errors">
            {state.errors.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        )}
      </form>
    </>
  );
};
