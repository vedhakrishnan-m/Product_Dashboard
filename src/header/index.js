import SearchBarLogo from "./SearchBarLogo";
import TopNavBarMain from "./TopNavBarMain";
import NavigatorMenu from "./NavigatorMenu";

const Header = (props) => {
  return (
    <div>
      <TopNavBarMain />
      <SearchBarLogo />
      <NavigatorMenu />
    </div>
  );
};
export default Header;
