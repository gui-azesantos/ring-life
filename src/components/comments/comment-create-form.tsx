"use client";

import * as actions from "@/actions";
import FormButton from "@/components/common/form-button";
import { Button, Textarea } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen = false ,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <div className="space-y-2 px-1">
        <Textarea
          name="content"
          label="Responder"
          labelPlacement="inside"
          placeholder="Coloque o seu comentário"
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton>Postar comentário</FormButton>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col ml-4 gap-8 color-white ">
      <Button
        size="sm"
        variant="solid"
        color="success"
        className="mg-8"
        onClick={() => setOpen(!open)}
        style={{ color: "white", maxWidth: "100px" }}
      >
        Responder
      </Button>
      {open && form}
    </div>
  );
}
