const IconLogout = ({ className = '' }: { className?: string }) => (
    <svg className={className} width={24} height={24} viewBox='0 0 24 24' fill='transparent'>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='m7 16-4-4m0 0 4-4m-4 4h14m-6 4v1a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1'
        />
    </svg>
);

export default IconLogout;