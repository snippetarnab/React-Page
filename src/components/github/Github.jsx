import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/snippetarnab`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // });
  return (
    <div className="text-center p-4 text-2xl font-mono rounded-md">
      Github: {data.login}
      <img className="" src={data.avatar_url} alt="profile picture" />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch(`https://api.github.com/users/snippetarnab`);
  return response.json();
};
