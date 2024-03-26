import UserName from '../Username';

const Header = () => {
  return (
    <div className={'header-gestor'}>
      <div className={'header-gestor__left'}></div>
      <div className={'header-gestor__right'}>
        <div className={'header-gestor__user'}>
          <UserName />
        </div>
      </div>
    </div>
  );
};

export default Header;
