export const getType = (fileType) => {
  let type = "IMAGE";
  if (fileType === 'application/pdf') {
    type = "PDF"
  }
  return type;
}

export const getFileName = (fileName, fileType) => {
  let name = fileName;
  if (fileType === 'application/pdf') {
    name = fileName.substring(0, fileName.indexOf(".pdf"))
  }

  if (fileType === 'image/jpeg') {
    if (fileName.includes("jpg")) {
      name = fileName.substring(0, fileName.indexOf(".jpg"))
    } else if (fileName.includes("jpeg")) {
      name = fileName.substring(0, fileName.indexOf(".jpeg"))
    }
  }

  if (fileType === 'image/png') {
    name = fileName.substring(0, fileName.indexOf(".png"))
  }

  return name;
}

export const isValid = (file) => {
  let name = file && file.name;
  let type = (/[^.]+$/.exec(name))[0];
  if (type === 'jpeg' || type === 'jpg' || type === 'png' || type === 'png') {
    return true
  }
  return false
}