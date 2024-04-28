import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const EmployeePage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 w-screen max-w-[1000px] justify-center items-center'>
        <h1 className='text-4xl font-bold'>CRUD Operations Using NextJS 14, Prisme And PostgreSQL</h1>
        <Button asChild>
            <Link href="/employee/create">
                Create
            </Link>
        </Button>
    </div>
    
  )
}

export default EmployeePage