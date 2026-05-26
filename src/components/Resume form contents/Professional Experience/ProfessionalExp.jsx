import React from 'react'

import FormTitle from '../Form Title/FormTitle';
import ExperienceForm from './Experience Form/ExperienceForm';

export default function ProfessionalExp() {
  return (
    <>
      <FormTitle
      title={'Professional Experience'}
      description={'Add your job experience'}
      text={'add Experience'}
      />
      <ExperienceForm/>
    </>
  )
}
