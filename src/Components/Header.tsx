import { BasicButton } from "./Common/Buttons";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { changeStoreView } from "../Redux/appSlice";
import { Section } from "./Common/Container";
import { styled } from "styled-components";

const HeaderSection = styled(Section)`
  position: fixed;
  top: 0;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
`;

const HeaderButton = styled(BasicButton)`
  width: 110px;
`;

export default function Header() {
  const dispatch = useAppDispatch();
  const storesData = useAppSelector((state) => state.dataSlice.storesData);
  const storeToShow = useAppSelector((state) => state.dataSlice.storeToShow);

  function changeStoreViewOnClick(storeId: 100790000 | 100790001 | 100790002) {
    const storePicked = storesData.find((store) => store.id_store == storeId);
    if (storePicked) {
      dispatch(changeStoreView(storePicked));
    }
  }

  return (
    <HeaderSection>
      <HeaderButton
        disabled={storeToShow.id_store == 100790000}
        onClick={() => {
          changeStoreViewOnClick(100790000);
        }}
      >
        Store Three
      </HeaderButton>
      <HeaderButton
        disabled={storeToShow.id_store == 100790001}
        onClick={() => {
          changeStoreViewOnClick(100790001);
        }}
      >
        Store Six
      </HeaderButton>
      <HeaderButton
        disabled={storeToShow.id_store == 100790002}
        onClick={() => {
          changeStoreViewOnClick(100790002);
        }}
      >
        Store Nine
      </HeaderButton>
    </HeaderSection>
  );
}
