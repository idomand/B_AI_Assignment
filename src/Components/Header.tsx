import { BasicButton } from "./Common/Buttons";
import { useAppDispatch, useAppSelector } from "../Redux/ReduxHooks";
import { changeStoreView } from "../Redux/appSlice";
import { Section } from "./Common/Container";

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
    <Section>
      <BasicButton
        disabled={storeToShow.id_store == 100790000}
        onClick={() => {
          changeStoreViewOnClick(100790000);
        }}
      >
        Store Three
      </BasicButton>
      <BasicButton
        disabled={storeToShow.id_store == 100790001}
        onClick={() => {
          changeStoreViewOnClick(100790001);
        }}
      >
        Store Six
      </BasicButton>
      <BasicButton
        disabled={storeToShow.id_store == 100790002}
        onClick={() => {
          changeStoreViewOnClick(100790002);
        }}
      >
        Store Nine
      </BasicButton>
    </Section>
  );
}
