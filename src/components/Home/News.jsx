import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='container-xxl h-full py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>Últimas noticias</h2>
      <div className='container-fluid row justify-content-center align-items-center m-0'>
        <div className='row justify-content-center'>
          <NewsCard
            data={{
              src: 'src/assets/instagram_1.png',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Turpis egestas pretium aenean pharetra magna ac placerat. Est ullamcorper eget nulla facilisi. Lectus quam id leo in vitae turpis massa sed. Mollis aliquam ut porttitor leo. Turpis egestas maecenas pharetra convallis posuere. Vitae auctor eu augue ut lectus arcu bibendum. Odio morbi quis commodo odio. Felis eget velit aliquet sagittis id consectetur. Eget egestas purus viverra accumsan. Morbi tempus iaculis urna id volutpat lacus laoreet non. Tellus elementum sagittis vitae et.'
            }}
          />
          <NewsCard
            data={{
              src: 'src/assets/instagram_2.png',
              text: 'Nullam vehicula ipsum a arcu cursus vitae. Sit amet nisl purus in mollis. Mauris nunc congue nisi vitae suscipit. Dictum non consectetur a erat nam at lectus. Sagittis aliquam malesuada bibendum arcu vitae. Purus in mollis nunc sed id. Neque ornare aenean euismod elementum nisi quis eleifend. Ut morbi tincidunt augue interdum velit. Imperdiet nulla malesuada pellentesque elit eget gravida. Et netus et malesuada fames ac turpis egestas maecenas.'
            }}
          />
          <NewsCard
            data={{
              src: 'src/assets/instagram_3.png',
              text: 'Viverra nam libero justo laoreet sit. Massa tempor nec feugiat nisl pretium fusce id velit. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Magna etiam tempor orci eu lobortis.'
            }}
          />
        </div>
        <div className='row justify-content-center my-4'>
          <div className='col-10 col-md-5 col-lg-3 justify-content-center'>
            <button className='news__button btn btn-outline-light btn-lg px-5'>
              Ver más ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
