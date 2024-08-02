"use server";

async function addProperty(formData) {
  console.log("addproperty action", formData.get("name"));
}

export default addProperty;
