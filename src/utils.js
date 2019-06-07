export const getType = (fileType) => {
  let type = "IMAGE";
  if (fileType === 'application/pdf') {
    type = "PDF"
  }
  return type;
}

export const getFileName = (fileName, fileType) => {
  console.log(fileName, fileType)
  let name = fileName;
  
  if (fileType === 'application/pdf') {
    name = fileName.substring(0, fileName.lastIndexOf("."))
  }

  if (fileType === 'image/jpeg') {
    if (fileName.includes("jpg")) {
      name = fileName.substring(0, fileName.lastIndexOf("."))
    } else if (fileName.includes("jpeg")) {
      name = fileName.substring(0, fileName.lastIndexOf("."))
    }
  }

  if (fileType === 'image/png') {
    name = fileName.substring(0, fileName.lastIndexOf("."))
  }

  console.log(name, 'name')

  return name;
}

export const isValid = (file) => {
  let name = file && file.name;
  let type = name.substring(name.lastIndexOf(".") + 1, name.length);
  if (type === 'jpeg' || type === 'jpg' || type === 'png' || type === 'pdf' || type === 'PDF') {
    return true
  }
  return false
}