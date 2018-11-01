import { scheduleCallback as defer } from 'scheduler';

const Tab = ({ id, label }) => {
  const [state, dispatch] = useAppReducer();

  const setHighlightedTab = () =>
    dispatch({ type: 'selectedTab', selectedTab: id });

  const setVisibleTab = () =>
    dispatch({ type: 'showTab' });

  const handleClick = () => {
    setHighlightedTab(id);
    defer(() => {
      setVisibleTab(id);
    });
  }

  return(
    <TabButton
      isSelected={state.selectedTab === id}
      onClick={handleClick}
    >
      {label}
    </TabButton>
    <TabContent isVisible={state.visibleTab === id}/>
  )
}