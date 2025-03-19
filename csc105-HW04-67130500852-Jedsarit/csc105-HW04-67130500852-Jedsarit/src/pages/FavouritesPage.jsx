import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const favouriteSchema = z.object({
  number: z
    .number({ invalid_type_error: "Expected number, received nan" })
    .min(1, "Number must be at least 1.")
    .max(100, "Number must not exceed 100."),
  q: z.enum(["love", "like"], { message: "Select either 'love' or 'like'" }),
  size: z.enum(["small", "medium", "large"], { message: "Select a valid size" }),
});

const FavouritesPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favouriteSchema),
  });


  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div>
      <h2>Favourites Page</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Enter a number (1-100):
          <input type="number" {...register("number", { valueAsNumber: true })} />
        </label>
        {errors.number && <span style={{ color: "red" }}>{errors.number.message}</span>}
        <br />

        <label>
          Select query:
          <select {...register("q")}>
            <option>Select</option>
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
        </label>
        {errors.q && <span style={{ color: "red" }}>{errors.q.message}</span>}
        <br />

        <label>
          Select size:
          <select {...register("size")}>
          <option>Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        {errors.size && <span style={{ color: "red" }}>{errors.size.message}</span>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FavouritesPage;
