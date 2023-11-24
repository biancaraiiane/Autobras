import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  emailAddress: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  carYear: Yup.string().required('Car year is required'),
  Vin: Yup.string().required('VIN is required'),
  make: Yup.string().required('Make is required'),
  model: Yup.string().required('Model is required'),
  carGlass: Yup.string().required('Car glass type is required')
})

export default schema
