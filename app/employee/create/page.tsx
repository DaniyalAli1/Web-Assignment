import React from 'react'
import FormWrapper from '@/components/ui/form-wrapper'
import { EmployeeForm } from '@/components/employee-form'

const EmployeeCreatePage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <FormWrapper title="Create A new Employee">
        <EmployeeForm/>
      </FormWrapper>
    </div>

  )
}

export default EmployeeCreatePage