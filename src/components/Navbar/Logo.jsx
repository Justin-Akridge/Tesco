import CompanyIcon from '../../assets/Logo.webp'

export default function Logo() {
  return (
    <div className='ml-3 mt-2 w-10 flex items-center gap-2'> 
      <div className='flex items-center'>
        <img 
            src={CompanyIcon}
            alt='logo'
        />
        {/* customize font */}
        <h1 className='tracking-wider text-xl font-medium'>
          Tesco
        </h1>
      </div>
    </div>
  )
}

