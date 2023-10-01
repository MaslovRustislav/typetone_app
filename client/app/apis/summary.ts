import Axios, { AxiosError } from "axios";

const postFile = async (
  file: File,
  setGPTSummary: (value: string) => void,
  setLoading: (value: boolean) => void,
  showToast: (vlaue: string, value: "success" | "error" | "info") => void
) => {
  setLoading(true);
  const formData = new FormData();
  formData.append("pdfFile", file);
  let response;
  try {
    response = await Axios.post("http://localhost:8000/summary", formData);
    setGPTSummary(response.data);
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      showToast(e.response?.data?.detail || e.message, "error");
    }
    setLoading(false);
    return;
  }

  setLoading(false);
  return response.data;
};
export default postFile;
