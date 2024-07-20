import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup.string().required('Es necesario ingresar tu nombre'),
    lastName: yup.string().required('Es necesario ingresar tu apellido'),
    email: yup.string().required('Ingesa un email para contactarte'),
    message: yup.string().required('Escribe tu mensaje')
  })
  .required()

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const whenSubmit = data => {
    console.log(data)
  }

  return (
    <div className='col-12 col-md-6 px-5'>
      <h2 className='display-3 text-light fw-semibold my-5'>Contacto</h2>
      <div className='contact-container'>
        <form onSubmit={handleSubmit(whenSubmit)} className='d-block'>
          <div className='row'>
            <div className='d-flex flex-column col-6'>
              <label htmlFor='firstName' className='text-light'>
                Nombre
              </label>
              <input
                type='text'
                name='firstName'
                placeholder='Tu nombre'
                id='firstName'
                {...register('firstName', { required: true, maxlength: 20 })}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p className='text-gray text-center'>
                {errors.firstName?.message}
              </p>
            </div>

            <div className='d-flex flex-column col-6'>
              <label htmlFor='lastName' className='text-light'>
                Apellido
              </label>
              <input
                type='text'
                name='lastName'
                placeholder='Tu apellido'
                id='lastName'
                {...register('lastName', { required: true, maxlength: 20 })}
                className='rounded-3 my-2 p-2 border border-0'
              />
              <p className='text-gray text-center'>
                {errors.lastName?.message}
              </p>
            </div>
          </div>

          <div className='d-flex flex-column col-12'>
            <label htmlFor='email' className='text-light'>
              Email
            </label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='email'
              {...register('email')}
              className='rounded-3 my-2 p-2 border border-0'
            />
            <p className='text-gray text-center'>{errors.email?.message}</p>
          </div>

          <div className='d-flex flex-column col-12'>
            <label htmlFor='message' className='text-light'>
              Mensaje
            </label>
            <input
              type='text'
              name='message'
              placeholder='Escribe tu mensaje'
              id='message'
              {...register('message')}
              className='rounded-3 my-2 p-2 border border-0'
            />
            <p className='text-gray text-center'>{errors.message?.message}</p>
          </div>

          <button type='submit' className='btn btn-outline-light btn-lg px-5 py-1 col-12 my-3'>Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
