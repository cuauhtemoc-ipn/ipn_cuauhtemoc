import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import backgroundImage from '@/assets/background.png'
import projectHeader from '@/assets/CansatCompetition/comp_header.png'

const CansatCompetition = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <ProjectDetailHeader
        image={projectHeader}
        name='CanSat Competition'
        text='Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisis enim lectus sem maecenas rutrum fringilla. In fusce donec fusce, venenatis curabitur mauris varius consequat. Ex libero maecenas metus mattis orci. Scelerisque id lacus justo sollicitudin tincidunt urna curabitur placerat. Risus blandit arcu eu ac lobortis at. Nulla dui integer molestie torquent elit, nulla at torquent. Varius potenti dictum per interdum consectetur semper nisl. Nisi netus nec himenaeos feugiat scelerisque litora potenti. Praesent cubilia class rhoncus quisque dictum dapibus. Egestas porta ante quis nullam; risus nec elit. Dui mauris purus id tempus eros primis. Urna taciti nascetur ultricies litora porttitor dictumst. Tempor nascetur vitae in purus ad tellus. Malesuada nam purus rhoncus maximus phasellus blandit aliquet. Ligula dui faucibus mauris imperdiet pellentesque at quisque? Consequat arcu aenean magnis praesent commodo, consequat amet potenti. Imperdiet dis eleifend sociosqu varius sociosqu.'
      />
    </div>
  )
}

export default CansatCompetition
