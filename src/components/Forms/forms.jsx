import { useState } from "react";

function Forms() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        dob:"",
        gender:"",
        course:"",
        termsandconditions:[]
    })
    const termsandconditions = ["Terms","Conditions"];
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form Submitted Successfully!");
    }

    console.log(formData);
    // const handleChange = (e)=>{
    //     setFormData({
    //         name: e.target.name == 'name' ? e.target.value : formData.name,
    //         email: e.target.name == 'email' ? e.target.value : formData.email,
    //         phone: e.target.name == 'phone' ? e.target.value : formData.phone,
    //         dob: e.target.name == 'dob' ? e.target.value : formData.dob,
    //     })   
    // }

    const handleChange = (e)=>{
        const {name,value,checked}= e.target
        if(name === "termsandconditions"){
            if(checked){
                // add to array
                setFormData({
                    ...formData,
                    termsandconditions: [...formData.termsandconditions,value]
                })
            }else{
                // remove from array
                setFormData({
                    ...formData,
                    termsandconditions: formData.termsandconditions.filter((item)=> item !== value)
                })
            }
        }else{     
            setFormData({
               ...formData,
               [name] : value
            })
        }
    }

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
          <form className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8" noValidate onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">
              Student Registration Form
            </h2>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
              />
              {formData.name}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {formData.email}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                placeholder="Enter phone number"
                onChange={handleChange}
                value={formData.phone}
              />
              {formData.phone}
            </div>

            {/* DOB */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Gender
              </label>
              <select
                name="gender"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="---">Select gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Others"}>Other</option>
              </select>
            </div>

            {/* Course */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Course
              </label>
              <input
                type="radio"
                name="course"
                className="border rounded-lg mx-3"
                value={"Java"}
                onChange={handleChange}
                checked={formData.course === "Java"}
              />Java
              <input
                type="radio"
                name="course"
                className="border rounded-lg mx-3"
                value={"Python"}
                onChange={handleChange}
                checked={formData.course === "Python"}
              />Python
            </div>

            {/* Terms */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Terms& Conditions
              </label>
                {termsandconditions.map((item)=>(
                    <div key={item}>
                        <input
                        type="checkbox"
                        name="termsandconditions"
                        className="border rounded-lg mx-3"
                        onChange={handleChange}
                        value={item}
                        />
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forms;
