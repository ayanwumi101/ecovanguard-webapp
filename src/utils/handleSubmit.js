import Fetch from "./Fetch";

const handleSubmit = async (ev, endpoint = "") => {
  ev.preventDefault();
  const URL = `https://jsonplaceholder.typicode.com/${endpoint}`;
  const formData = new FormData(ev.target);
};
const DEFAULT_CONFIG = {
  credentials: "include",
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export default handleSubmit;
