async function uploadFile(formData) {
  try {
    const res = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    console.log('data: ', data);
  } catch (e) {
    console.log("Error uploading file:", formData)
  }
}

const fileInput = document.querySelector('#fileUpload')
fileInput.addEventListener('change', e => {
  const formData = new FormData()
  formData.append('file', e.target.files[0])
  uploadFile(formData)
})