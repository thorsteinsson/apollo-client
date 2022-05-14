import { SubmitHandler, useForm } from "react-hook-form";

interface AddVideoFormInput {
  videoId: string;
  title: string;
}

export default function AddVideo({ playlistId }: { playlistId: string }) {
  const { register, handleSubmit } = useForm<AddVideoFormInput>();

  const onSubmit: SubmitHandler<AddVideoFormInput> = (data) => {
    //TODO: Create mutation to save video to API
    console.log(`Adding to ${playlistId}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("videoId")} placeholder="Video ID" />
      <input {...register("title")} placeholder="Title" />
      <button type="submit">Add</button>
    </form>
  );
}
