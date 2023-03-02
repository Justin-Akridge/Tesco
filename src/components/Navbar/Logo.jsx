import CompanyIcon from '../../assets/Logo.webp'

export default function Logo() {
  return (
    <div className='ml-3 mt-2 w-10 flex items-center gap-2'> 
        <img 
            src={CompanyIcon}
            alt='logo'
        />
        {/* customize font */}
        <div className='tracking-wider text-xl font-medium'>
          Tesco
        </div>
    </div>
  )
}

