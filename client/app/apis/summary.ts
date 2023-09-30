import Axios from "axios";

const postFile = async (
  file: File,
  setGPTSummary: (value: string) => void,
  setLoading: (value: boolean) => void
) => {
  setLoading(true);
  console.log("is it called??", file);
  const formData = new FormData();
  formData.append("pdf_file", file);
  const response = await Axios.post("http://localhost:8000/summary", formData);

  setGPTSummary(response.data);
  setLoading(false);
  return response.data;
};
export default postFile;
