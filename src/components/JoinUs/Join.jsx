/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup.string().required('Es necesario ingresar tu nombre'),
    lastName: yup.string().required('Es necesario ingresar tu apellido'),
    email: yup.string().required('Ingesa un email para contactarte'),
    section: yup
      .string()
      .test(
        'sectionRequired',
        'Selecciona una sección',
        value => value !== 'other'
      ),
    message: yup.string().required('Escribe tu mensaje'),
    escuela: yup.string().required('Escribe el nombre de tu escuela'),
    carrera: yup.string().required('Ingresa tu carrera'),
    semestre: yup.string().required('Ingresa tu semestre')
  })
  .required()

const Recruitment = () => {
  const [isFirstForm, setIsFirstForm] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const whenSubmit = data => {
    console.log(data)
  }

  return (
    <div className='container-lg d-flex flex-column justify-content-center h-full py-4 my-5'>
      <div className='row align-items-center text-light mx-0 my-5'>
        <div className='row align-items-center mx-0 my-5'>
          <h1 className='display-3 text-center fw-semibold'>Reclutamiento</h1>
        </div>
        {isFirstForm
          ? (
            <div className='row justify-content-center align-items-center mx-0'>
              <div className='text-light text-justify col-11 col-sm-10 col-lg-5'>
                <p>
                  ¡Nos encantaría que te unas a nuestro equipo! En Cuauhtemoc IPN
                  estamos siempre buscando personas talentosas y apasionadas que
                  quieran contribuir a nuestro crecimiento. Si te interesa
                  explorar las secciones para desarrollarte, te invitamos a
                  compartir tus datos de contacto y a indicarnos el área en la que
                  te gustaría trabajar. De esta manera, podremos mantenerte al
                  tanto de las secciones que coincidan con tus intereses y
                  habilidades, y contactarte al respecto. ¡Esperamos saber de ti
                  pronto
                </p>
              </div>
              <div className='contact-container col-11 col-sm-10 col-lg-5'>
                <form onSubmit={handleSubmit(whenSubmit)} className='d-block '>
                  <div className='row'>
                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='firstName' className='text-light'>
                        Nombre
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        placeholder='Tu nombre'
                        id='firstName'
                        {...register('firstName', {
                          required: true,
                          maxlength: 20
                        })}
                        className='rounded-3 my-2 p-2 border border-0'
                      />
                      <p className='text-gray text-center'>
                        {errors.firstName?.message}
                      </p>
                    </div>

                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='lastName' className='text-light'>
                        Apellido
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        placeholder='Tu apellido'
                        id='lastName'
                        {...register('lastName', {
                          required: true,
                          maxlength: 20
                        })}
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
                    <p className='text-gray text-center'>
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className='d-flex flex-column col-12'>
                    <label htmlFor='subject' className='text-light'>
                      Sección
                    </label>
                    <select
                      name='section'
                      id='subject'
                      className='form-select rounded-3 my-2 p-2 border border-0'
                      defaultValue='other'
                      {...register('section')}
                    >
                      <option value='other'>Selecciona una opción</option>
                      <option value='Aerodynamics'>Aerodinámica</option>
                      <option value='CDH'>CDH</option>
                      <option value='EPS'>EPS</option>
                      <option value='Mechanical'>Mecánica</option>
                    </select>
                    <p className='text-gray text-center'>
                      {errors.section?.message}
                    </p>
                  </div>

                  <div className='row'>
                    <div className='d-flex flex-column col-12'>
                      <label htmlFor='escuela' className='text-light'>
                        Escuela
                      </label>
                      <input
                        type='text'
                        name='escuela'
                        placeholder='Nombre de tu escuela'
                        id='escuela'
                        {...register('escuela', {
                          required: true,
                          maxlength: 30
                        })}
                        className='rounded-3 my-2 p-2 border border-0'
                      />
                      <p className='text-gray text-center'>
                        {errors.escuela?.message}
                      </p>
                    </div>

                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='carrera' className='text-light'>
                        Carrera
                      </label>
                      <input
                        type='text'
                        name='carrera'
                        placeholder='Ingresa tu carrera'
                        id='carrera'
                        {...register('carrera', {
                          required: true,
                          maxlength: 30
                        })}
                        className='rounded-3 my-2 p-2 border border-0'
                      />
                      <p className='text-gray text-center'>
                        {errors.carrera?.message}
                      </p>
                    </div>

                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='semestre' className='text-light'>
                        Semestre
                      </label>
                      <input
                        type='text'
                        name='semestre'
                        placeholder='Ingresa tu semestre'
                        id='semestre'
                        {...register('semestre', {
                          required: true,
                          maxlength: 20
                        })}
                        className='rounded-3 my-2 p-2 border border-0'
                      />
                      <p className='text-gray text-center'>
                        {errors.semestre?.message}
                      </p>
                    </div>
                  </div>

                  <div className='d-flex justify-content-center'>
                    <button
                      type='submit'
                      className='btn btn-outline-light btn-lg px- px-5 py-1 col-10 col-sm-6 col-md-5 col-lg-12 my-3'
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            )
          : (
            <div className='row justify-content-center align-items-center mx-0'>
              <div className='text-light text-justify col-11 col-sm-10 col-lg-5'>
                <p>
                  Gracias por tu interés en unirte a nuestro equipo. Aunque no
                  estamos reclutando en este momento, nos gustaría saber de ti.
                  Déjanos tus datos y te avisaremos cuando se abran nuevas
                  oportunidades. ¡Esperamos tenerte en cuenta pronto!
                </p>
              </div>
              <div className='contact-container col-11 col-sm-10 col-lg-5'>
                <form onSubmit={handleSubmit(whenSubmit)} className='d-block'>
                  <div className='row'>
                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='firstName' className='text-light'>
                        Nombre
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        placeholder='Tu nombre'
                        id='firstName'
                        {...register('firstName', {
                          required: true,
                          maxlength: 20
                        })}
                        className='rounded-3 my-2 p-2 border border-0'
                      />
                      <p className='text-gray text-center'>
                        {errors.firstName?.message}
                      </p>
                    </div>

                    <div className='d-flex flex-column col-12 col-sm-6'>
                      <label htmlFor='lastName' className='text-light'>
                        Apellido
                      </label>
                      <input
                        type='text'
                        name='lastName'
                        placeholder='Tu apellido'
                        id='lastName'
                        {...register('lastName', {
                          required: true,
                          maxlength: 20
                        })}
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
                    <p className='text-gray text-center'>
                      {errors.email?.message}
                    </p>
                  </div>

                  <div className='d-flex flex-column col-12'>
                    <label htmlFor='message' className='text-light'>
                      Mensaje
                    </label>
                    <textarea
                      name='message'
                      placeholder='Escribe tu mensaje'
                      id='message'
                      {...register('message')}
                      className='rounded-3 my-2 p-2 border border-0'
                      rows='3'
                    />
                    <p className='text-gray text-center'>
                      {errors.message?.message}
                    </p>
                  </div>

                  <div className='d-flex justify-content-center'>
                    <button
                      type='submit'
                      className='btn btn-outline-light btn-lg px- px-5 py-1 col-10 col-sm-6 col-md-5 col-lg-12 my-3'
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default Recruitment
