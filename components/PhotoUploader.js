import Image from "next/image";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

function PhotoUploader() {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(true);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setShow(false);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {show && <button>Add Your Foto</button>}
          </div>
        )}
      </Dropzone>
      {file && (
        <div>
          <img
            className="w-[120px] h-[120px] rounded-xl"
            src={URL.createObjectURL(file)}
            alt="Uploaded File"
          />
        </div>
      )}
    </div>
  );
}

export default PhotoUploader;
