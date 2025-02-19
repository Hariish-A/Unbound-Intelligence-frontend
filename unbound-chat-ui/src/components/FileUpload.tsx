import { useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function FileUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/v1/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(`✅ Upload Successful: ${response.data.response}`);

      // **Reset the file input field**
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      toast.error("❌ Upload Failed");
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor="file-upload">📎</label>
      <input id="file-upload" type="file" ref={fileInputRef} onChange={handleFileUpload} />
    </div>
  );
}
