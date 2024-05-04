import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { actionSingleUpload } from "@/store/upload";

const FileUploaderSingle = ({ setValue, name, error, trigger }) => {
  const [files, setFiles] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      try {
        const img = new FormData();
        img.append("file", acceptedFiles[0]);
        dispatch(actionSingleUpload(img)).then((res) => {
          if (res?.payload?.fileName)
            setFiles(acceptedFiles.map((file) => Object.assign(file)));
          setValue(name, res?.payload?.fileName);
          trigger(name);
        });
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
  });

  const handleDeleteImage = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    setValue(name, null);
    trigger(name);
  };

  const deleteButton = (index) => (
    <button
      className="disabled:opacity-50 disabled:-translate-y-0 bg-red-600 my-3 hover:-translate-y-1 duration-300 transition-all rounded-xl text-sm text-white px-4 h-[35px] font-semibold flex justify-center bg-purple items-center"
      onClick={() => handleDeleteImage(index)}
    >
      Remove
    </button>
  );

  const img = files.map((file, index) => (
    <div
      key={file.name}
      className="w-full flex items-center justify-center flex-col pt-3"
    >
      <Image
        width="300"
        height="200"
        alt={file.name}
        className="single-file-image rounded-xl"
        src={URL.createObjectURL(file)}
      />
      {deleteButton(index)}
    </div>
  ));

  return (
    <div className="mt-2">
      <Box
        {...getRootProps({ className: "dropzone" })}
        className={`border ${
          Boolean(error) ? "!border-qred pt-2.5" : "border-primary-4"
        }  rounded-xl cursor-pointer`}
      >
        <input {...getInputProps()} />
        {files.length ? (
          img
        ) : (
          <Box className="flex items-center justify-center flex-col gap-3 m-4">
            <Box className="rounded-lg flex items-center justify-center">
              {name === "selfie" ? (
                <Image
                  width="150"
                  height="200"
                  src={`/assets/images/kyc/${name}.png`}
                  alt="front card"
                />
              ) : name === "image" ? (
                <Image
                  width="150"
                  height="150"
                  src={`/assets/images/kyc/${name}.png`}
                  alt="front card"
                />
              ) : (
                <Image
                  width="300"
                  height="200"
                  src={`/assets/images/kyc/${name}.png`}
                  alt="front card"
                />
              )}
            </Box>
            <Typography variant="subtitle1">
              Drop files here or click to upload.
            </Typography>
          </Box>
        )}
      </Box>
      {error && error.message ? (
        <span className="text-xs font-semibold pl-2.5 mt-0.5 text-qred">
          {error.message}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default FileUploaderSingle;
