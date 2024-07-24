import ThemeToggleButton from '../ThemeToggleButton';
export default function Header(){
    return <div className='min-h-[50px] flex justify-center items-center'>
        <div className='mr-4'>This is SmartHome Dashboard</div>
        <ThemeToggleButton/>
    </div>
}