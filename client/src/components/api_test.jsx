import axios from "axios";
import { useEffect } from "react";

export default function ApiTest() {
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <p>hello</p>
    </>
  );
}
