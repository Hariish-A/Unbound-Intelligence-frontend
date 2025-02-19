import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "http://127.0.0.1:8000/v1/file/upload";

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const message = response.data.response || "File uploaded successfully!";
    toast.success(`✅ ${message}`);

    return response.data;
  } catch (error) {
    console.error("Upload failed:", error);
    toast.error("❌ File upload failed. Please try again.");
    return null;
  }
}
