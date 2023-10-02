import * as Yup from "yup"
import { useFormik } from "formik"

const Landing = () => {
  const initialvalues = {
    fulllName: "",
    username: "",
    matricNumber: "",
    password: "",
  }
  const validationSchema = Yup.object({
    fulllName: Yup.string(),
    username: Yup.string(),
    matricNumber: Yup.string(),
    password: Yup.string(),
  })

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <div>
        <h1>Welcome to NAMSSN Website</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            onChange={formik.handleChange}
            value={formik.values.fullname}  />
        </form>
      </div>

      {/* Vector image container */}
      <div></div>

    </div>
  )
}

export default Landing