import * as yup from 'yup';
const now = new Date();
const aHundredYear = new Date();
aHundredYear.setFullYear(now.getFullYear() - 100);

const fields = [
  {
    key: 'firstname',
    label: 'Nombre',
    rules: yup
      .string()
      .required('El Nombre es requerido')
      .min(2, 'Debe tener al menos 2 (dos) caracteres'),
  },
  {
    key: 'lastname',
    label: 'Apellido',
    rules: yup.string().required('El Apellido es requerido'),
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email',
    rules: yup
      .string()
      .required('El mail es requerido')
      .email('Debe ser un mail valido'),
  },
  {
    key: 'password',
    label: 'Clave',
    type: 'password',
    rules: yup
      .string()
      .required('El password es requerido')
      .matches(
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        'Debe tener al mayúsculas y minúsculas, al menos 8 caracteres y un carácter especial',
        { excludeEmptyString: true }
      ),
  },
  {
    key: 'dob',
    label: 'Fecha de Nacimiento',
    type: 'date',
    rules: yup
      .date()
      .required('La fecha es requerida')
      .min(aHundredYear, 'No puede ser hace mas de 100 años')
      .max(now, 'No puede ser mayor a hoy'),
  },
];

export default fields;
