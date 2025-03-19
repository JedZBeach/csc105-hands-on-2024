import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "unknown"; 
  const size = searchParams.get("size") || "unknown";

  return (
    <div>
      <p>
        Your favourite post is <strong>{query}</strong>. Post ID is <strong>{id}</strong>. Size is <strong>{size}</strong>.
      </p>
    </div>
  );
};

export default FavouriteDetailPage;
