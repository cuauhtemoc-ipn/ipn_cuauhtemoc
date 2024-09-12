/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import join from '@/assets/join.svg'

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
    escuela: yup.string().required('Escribe el nombre de tu escuela'),
    carrera: yup.string().required('Ingresa tu carrera'),
    semestre: yup.string().required('Ingresa tu semestre')
  })
  .required()

const Recruitment = () => {
  const [showMessageModal, setShowMessageModal] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const form = useRef()
  const [isFirstForm, setIsFirstForm] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(schema) })

  const handleCloseModal = () => setShowModal(false)
  const handleCloseMessageModal = () => setShowMessageModal(false)
  const handleShowModal = () => setShowModal(true)
  const handleShowMessageModal = () => setShowMessageModal(true)

  const whenSubmit = data => {
    console.log(data)
    emailjs
      .sendForm('contact_service', 'recruitment_form', form.current, {
        publicKey: 'ZbCsu0DS45Vozgnve'
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )

    const result = {
      firstName: '',
      lastName: '',
      email: '',
      section: '',
      escuela: '',
      carrera: '',
      semestre: ''
    }
    reset(result)
    setShowModal(true)
  }

  return (
    <div className='row text-light'>
      <h1 className='display-3 text-center fw-semibold my-5'>Reclutamiento</h1>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className='align-self-center'
        centered
      >
        <Modal.Body className='rounded'>
          <h2 className='text-center'>Gracias por contactarnos</h2>
          <p className='text-center'>Nos comunicaremos pronto contigo</p>

          <div className='text-center mt-4'>
            <Button variant='dark' onClick={handleCloseModal}>
              Cerrar
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {isFirstForm
        ? (
          <div className='row justify-content-center align-items-center mx-0'>
            <div className='text-justify px-5 col-12 col-md-11 col-lg-6'>
              <img className='col-12 mb-4' src={join} />
              <p className='lead-lg text-justify'>
                ¡Nos encantaría que te unas a nuestro equipo! En Cuauhtemoc IPN
                estamos siempre buscando personas talentosas y apasionadas que
                quieran contribuir a nuestro crecimiento. Si te interesa explorar
                las secciones para desarrollarte, te invitamos a compartir tus
                datos de contacto y a indicarnos el área en la que te gustaría
                trabajar. De esta manera, podremos mantenerte al tanto de las
                secciones que coincidan con tus intereses y habilidades, y
                contactarte al respecto. ¡Esperamos saber de ti pronto
              </p>
            </div>
            <div className='contact-container px-5 col-12 col-md-11 col-lg-6'>
              <form onSubmit={handleSubmit(whenSubmit)} className='d-block '>
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

                  <div className='d-flex flex-column col-6'>
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
                  <p className='text-gray text-center'>{errors.email?.message}</p>
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

                  <div className='d-flex flex-column col-6'>
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

                  <div className='d-flex flex-column col-6'>
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
                    className='btn btn-outline-light btn-lg px- px-5 py-1 col-12 col-md-8 col-lg-12 my-3'
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
            <div className='text-justify px-5 col-12 col-md-11 col-lg-6'>
              <p className='lead text-justify'>
                Gracias por tu interés en unirte a nuestro equipo. Aunque no
                estamos reclutando en este momento, nos gustaría saber de ti.
                Déjanos tus datos y te avisaremos cuando se abran nuevas
                oportunidades. ¡Esperamos tenerte en cuenta pronto!
              </p>
            </div>
            <div className='contact-container px-5 col-12 col-md-11 col-lg-6'>
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

                  <div className='d-flex flex-column col-6'>
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
                  <p className='text-gray text-center'>{errors.email?.message}</p>
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
                    className='btn btn-outline-light btn-lg px- px-5 py-1 col-12 col-md-8 col-lg-12 my-3'
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
          )}

      <div className='d-flex text-justify-center'>
        <a
          onClick={handleShowMessageModal}
          className='text-center text-gray w-100'
        >
          Ver Aviso de Privacidad
        </a>

        <Modal
          show={showMessageModal}
          onHide={handleCloseMessageModal}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Aviso de Privacidad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='text-justify'>
              <p>
                Este aviso de privacidad describe cómo [Nombre del Equipo]
                recopila, utiliza, comparte y protege tu información personal
                cuando utilizas nuestro sitio web.
              </p>
              <p>1. Información que Recopilamos</p>
              <p>
                Recopilamos información personal que proporcionas
                voluntariamente a través de nuestros formularios, incluyendo:
              </p>
              <p>
                Nombre Apellido Correo electrónico Escuela Carrera Semestre
                Número de contacto Nombre de tu organización (si corresponde)
                Correo electrónico de la empresa (si corresponde)
              </p>
              <p>2. Cómo Usamos Tu Información</p>
              <p>Utilizamos tu información para las siguientes finalidades:</p>
              <p>
                Contactarte si has solicitado formar parte de nuestro equipo, ya
                sea durante una convocatoria abierta o fuera de ella.
              </p>
              <p>
                Contactar con organizaciones interesadas en ser patrocinadoras.
              </p>
              <p>
                Proveer información general a personas que desean conocer más
                sobre nuestro equipo.
              </p>
              <p>3. Compartir Tu Información</p>
              <p>
                No compartimos tu información personal con terceros. Solo los
                miembros del equipo de [Nombre del Equipo] tienen acceso a la
                información.
              </p>
              <p>4. Protección de Tu Información</p>
              <p>
                Tomamos medidas para proteger tu información personal de acceso
                no autorizado, uso, divulgación, alteración o destrucción. Sin
                embargo, debes tener en cuenta que ningún método de transmisión
                por internet o de almacenamiento digital es 100% seguro.
              </p>
              <p>5. Conservación de Tu Información</p>
              <p>
                No tenemos un plazo establecido para la conservación de tu
                información. La conservaremos mientras sea necesario para los
                propósitos mencionados anteriormente o mientras lo permita la
                ley.
              </p>
              <p>6. Tus Derechos</p>
              <p>
                Tienes derecho a acceder, corregir y eliminar tu información
                personal. También tienes derecho a retirar tu consentimiento al
                procesamiento de tu información.
              </p>
              <p>
                Para ejercer estos derechos, puedes contactarnos a través del
                correo electrónico [correo electrónico del equipo].
              </p>
              <p>7. Cambios en este Aviso de Privacidad</p>
              <p>
                Este aviso de privacidad puede ser actualizado periódicamente.
                Te recomendamos revisar este aviso de privacidad de forma
                regular para estar al tanto de cualquier cambio.
              </p>
              <p>Política de Cookies</p>
              <p>Actualmente, no utilizamos cookies en nuestro sitio web.</p>
              <p>Política de Uso de Datos</p>
              <p>
                Nuestra política de uso de datos se detalla en este aviso de
                privacidad.
              </p>
              <p>Contacto</p>
              <p>
                Si tienes alguna pregunta sobre este aviso de privacidad o
                nuestras prácticas de privacidad, por favor contáctanos a través
                del correo electrónico [correo electrónico del equipo].
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseMessageModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Recruitment
