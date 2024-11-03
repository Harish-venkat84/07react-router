import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p4 text-3xl py-2">
      Github followers: {data.followers}
      <img className="px-2" src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/Harish-V-84");
  const data = await response.json();
  return data;
};
