/* eslint-disable react/prop-types */
import GalleryCarousel from './GalleryCarousel'

const TabComponent = ({ entry, index, activeTab, reference }) => {
  const loadScores = entry => {
    const data = []
    entry.scores.forEach((score, index) => {
      data.push(
        <p key={'score' + index} className='text-light h2 text-center p-2'>
          {`${score.place}° lugar a nivel ${score.type}`}
        </p>
      )
    })
    return data
  }
  const loadDescriptions = entry => {
    const newOrder = generateSeries(entry.content.length)
    const data = []
    entry.content.forEach((element, index) => {
      if (element.type === 'text') {
        data.push(
          <div
            className='d-none d-lg-block col-lg-6 p-2 p-lg-4 align-content-center'
            key={'text' + index}
          >
            <p className='text-light lead lh-lg text-justify'>
              {element.value}
            </p>
          </div>
        )
      } else if (element.type === 'image') {
        data.push(
          <div className='d-none d-lg-block col-lg-6 p-2 p-lg-4 align-content-center'>
            <img
              src={element.value}
              alt='Image'
              className='w-100'
              key={'img' + index}
            />
          </div>
        )
      }
    })

    for (let index = 0; index < newOrder.length; index++) {
      const element = entry.content[newOrder[index] - 1]
      if (element.type === 'text') {
        data.push(
          <div
            className='d-lg-none col-10 p-2 p-lg-4 align-content-center'
            key={'sm-text' + index}
          >
            <p className='text-light lh-lg text-justify'>
              {element.value}
            </p>
          </div>
        )
      } else if (element.type === 'image') {
        data.push(
          <div className='d-lg-none col-10 p-2 p-lg-4 align-content-center'>
            <img
              src={element.value}
              alt='Image'
              className='w-100'
              key={'sm-img' + index}
            />
          </div>
        )
      }
    }
    return data
  }

  const generateSeries = n => {
    const series = []
    for (let i = 0; i < n; i++) {
      if (i % 4 === 1 || i % 4 === 0) {
        series.push(i + 1)
      } else if (i % 4 === 2) {
        series.push(i + 2)
      } else {
        series.push(i)
      }
    }
    return series
  }
  const loadConclusion = entry => {
    const data = []

    data.push(
      <div
        className='col-10 col-lg-12 p-4 align-content-center'
        key={`Conclusion-${entry.edition}`}
      >
        <p className='text-light lead-lg lh-lg text-justify'>{entry.conclusion}</p>
      </div>
    )

    data.push(
      <div
        className='col-10 col-lg-8 p-4'
        key={`ConclusionImage-${entry.edition}`}
      >
        <img src={entry.conclusionImage} alt='Image' className='w-100' />
      </div>
    )

    return data
  }
  return (
    <div
      className={`tab-pane fade ${
        activeTab === index ? 'show active' : ''
      } bg-gray bg-opacity-25`}
      id='home'
      role='tabpanel'
      aria-labelledby={`tab${index}`}
      key={'content' + index}
    >
      <h2 className='text-center p-3 pt-4 text-light display-3  fw-bold'>
        {entry.name + ' ' + entry.edition}
      </h2>
      <div className='d-flex justify-content-center'>
        <img
          src={entry.mainImage}
          alt='Competition header image'
          className='col-10 col-md-7 m-3 align-self-center'
        />
      </div>

      {loadScores(entry)}
      <div className='row m-0 p-0 justify-content-center'>
        <div className=' border-bottom border-4 border-primary mx-5 d-flex col-9 col-sm-8 col-md-6 col-xl-5  justify-content-center'>
          <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
            ¿En qué consistió?
          </h3>
        </div>
      </div>
      <div className='row justify-content-center m-0 m-lg-5'>
        {loadDescriptions(entry)}
        {loadConclusion(entry)}
      </div>
      <div className='container-fluid justify-content-center my-5 bg-dark bg-opacity-50 py-1'>
        <div className='row m-0 p-0 mb-5 justify-content-center'>
          <div className=' border-bottom border-4 border-primary mx-5 d-flex col-6 col-sm-4 col-xl-3  justify-content-center'>
            <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
              Galería
            </h3>
          </div>
        </div>

        <GalleryCarousel
          images={entry.images}
          index={index + 'car'}
          activeTab={activeTab}
          name={entry.edition}
          reference={reference}
        />
      </div>
      <div className='row m-0 p-0 justify-content-center'>
        <div className=' border-bottom border-4 border-primary mx-5 d-flex col-6 col-sm-4 col-xl-3  justify-content-center'>
          <h3 className='text-primary display-5 my-2 fw-bold d-flex'>
            El equipo
          </h3>
        </div>
      </div>
      <div className='d-flex justify-content-center m-4'>
        <img
          src={entry.team}
          alt='Competition team image'
          className='col-10 m-4 align-self-center'
        />
      </div>
    </div>
  )
}

export default TabComponent
