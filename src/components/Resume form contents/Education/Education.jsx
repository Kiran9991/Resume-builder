import React from 'react'
import FormTitle from '../Form Title/FormTitle'
import EmptyItems from '../Empty Items/EmptyItems'

export default function Education() {
  return (
    <>
      <FormTitle title={'Education'}
      description={'Add your education details'}
      text={'Add Education'}
      />
      <div>
        <EmptyItems text1={'education'}
        text2={'Add Education'} />
      </div>
    </>
  )
}
