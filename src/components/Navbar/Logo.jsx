import CompanyIcon from '../../assets/Logo.webp'

export default function Logo() {
  return (
    <div className='ml-3 flex items-center gap-2'> 
      <img 
        src={CompanyIcon}
        alt='logo'
      />
      {/* customize font */}
      <h1 className='tracking-wider text-xl font-medium'>
        Tesco       
      </h1>
    </div>
  )
}

