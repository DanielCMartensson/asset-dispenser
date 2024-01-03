import { useState } from "react";

export default FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    try{
      if(file) {
        const formData = new FormData();
        formData.appende("file", file);
        const response = await fetch('http//localhost:3000/minting/upload',{
          method: 'POST',
          body:formData
        }).then(response=>response.json())
        .then(data=>{
          console.log(data.cid)
        }).catch(error => {
            console.log(error);
        });
      }
    }catch(error){
      alert(error);
    }
  }

  const retrieveFile=(e)=> {
    const data = e.target.file[0];
    setFile(data);
    e.preventDefault();
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={retrieveFile} />
        <button>Upload picture</button>
      </form>
    </div>
  )

}